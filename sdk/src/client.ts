import {WOQLClient, UTILS} from "@terminusdb/terminusdb-client";
import {INode, DataNode, TypedNode} from "./dataNode";
import {Module, Node, parse, transform, } from "@swc/core";
import {Traverser} from "./traverser";
import {swcSchema} from "../swc/schema";
import {randomBytes} from "node:crypto";

const schemaMap = new Map(swcSchema.map(x => [x["@id"], x]));
export class Client {
	private readonly client = new WOQLClient('http://localhost:6364', {
		user: 'admin',
		key: 'root',
		db: 'ast'
	});

	async init(): Promise<void> {
		const dbs: { label: string }[] = await this.client.getDatabases();
		if (dbs.some(x => x.label === 'ast')) {
			await this.client.deleteDatabase('ast');
		}
		await this.client.createDatabase('ast', {
			label: 'ast',
			public: true,
		}, 'admin');
		try {
			await this.client.addDocument([
				{
					"@type": "@context",
					"@schema": "http://terminusdb.com/schema/woql#",
					"@base": "terminusdb://woql/data/",
					"xsd": "http://www.w3.org/2001/XMLSchema#",
					"rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
					"rdfs": "http://www.w3.org/2000/01/rdf-schema#",
					"terminus": "http://terminusdb.com/schema/terminus#",
					"vio": "http://terminusdb.com/schema/vio#"
				},
				...schemaMap.values()
			], {
				graph_type: 'schema',
				full_replace: true,
			})
		} catch (e) {
			throw e;
		}
	}

	async update(node: TypedNode<any>) {
		const x = DataNode.from(node);
		await this.client.updateDocument(x);
	}

	async add(program: Module, fileName: string): Promise<void> {
		const converted = this.convert(program);
		// const traverser = new Traverser(program);
		// const nodes = traverser.getNodes();
		// nodes.find(x => x["@type"] === "Program")['name'] = fileName;
		try {
			await this.client.addDocument(converted, {}, 'ast', 'init');
		} catch (e) {
			const errors = [];
			for (let error of e.data?.['api:error']?.['api:witnesses'] ?? []) {
				errors.push(JSON.stringify(error, null, '  '));
			}
			throw new Error(`Failed to write to database: \n` + errors.join('\n'));
		}
	}
	convert(node: Node){
		if (!node || !node.type) return node;
		const res = {
			'@type': node.type,
			'@id': `${node.type}/${randomBytes(8).toString('base64')}`,
		};
		const schema = this.getSchema(node.type);
		for (let key in node){
			if (key === 'type') continue;
			if (!schema[key]) continue;
			const value = node[key]
			if (!value || typeof value !== "object")
				res[key] = value;
			else if (Array.isArray(value))
				res[key] = value.map(x => this.convert(x));
			else {
				if (!value.type && schema[key])
					value.type = schema[key];
				res[key] = this.convert(value);
			}
		}
		for (let schemaKey in schema) {
			if (schemaKey.startsWith('@')) continue;
			if (res[schemaKey]) continue;
			if (schema[schemaKey] == 'xsd:string')
				res[schemaKey] = '';
			if (schema[schemaKey] == 'xsd:double')
				res[schemaKey] = 0;
		}
		return res;
	}
	getSchema(nodeType: string){
		const schema = schemaMap.get(nodeType);
		const result = {...schema};
		if (schema['@inherits']){
			if (typeof schema['@inherits'] === "string")
				Object.assign(result, this.getSchema(schema['@inherits']))
			else for (let baseSchema of schema['@inherits']) {
				Object.assign(result, this.getSchema(baseSchema))
			}
		}
		return result;
	}

	async getLastCommitDiff() {
		const [current, last] = await this.client.getCommitsLog(0, 2);
		const diff = await this.client.getVersionDiff(
			last['@id'].substr('ValidCommit/'.length),
			current['@id'].substr('ValidCommit/'.length)
		)
		return diff;
	}

	async getProgram(fileName: string) {
		const program = await this.client.getDocument({
			type: 'Program',
			query: {
				name: fileName
			},
			unfold: false
		}) as Module;
		return program;
	}

	private cache = new Map<string, DataNode>();
	//
	// async getOxcNode<TNode extends OxcNode>(node: INode<TNode> | string): Promise<DataNode<TNode>> {
	// 	if (!node) return node as any;
	// 	if (typeof node === 'string') {
	// 		if (this.cache.has(node)) {
	// 			return this.cache.get(node) as DataNode<TNode>;
	// 		}
	// 		if (!node.includes('/')) return node as any;
	// 		node = await this.client.getDocument({id: node}) as INode<TNode>;
	// 	}
	// 	if (typeof node !== 'object') return node as any;
	// 	const oxcNode = new DataNode<TNode>(node);
	// 	this.cache.set(node["@id"], oxcNode);
	// 	for (let key in node) {
	// 		if (skipped.has(key)) continue;
	// 		const value = node[key];
	// 		if (Array.isArray(value)) {
	// 			oxcNode[key] = [];
	// 			for (let i = 0; i < value.length; i++) {
	// 				oxcNode[key][i] = await this.getOxcNode(value[i]);
	// 			}
	// 		} else {
	// 			oxcNode[key] = await this.getOxcNode(value)
	// 		}
	// 	}
	// 	return oxcNode;
	// }
}

const skipped = new Set(['@id', '@type']);
