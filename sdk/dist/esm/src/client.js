import { WOQLClient } from "@terminusdb/terminusdb-client";
import { DataNode } from "./dataNode.js";
import { swcSchema } from "../swc/index.js";
import { randomBytes } from "node:crypto";
const schemaMap = new Map(swcSchema.map((x)=>[
        x["@id"],
        x
    ]));
export class Client {
    client = new WOQLClient('http://localhost:6364', {
        user: 'admin',
        key: 'root',
        db: 'ast'
    });
    async init() {
        const dbs = await this.client.getDatabases();
        if (dbs.some((x)=>x.label === 'ast')) {
            await this.client.deleteDatabase('ast');
        }
        await this.client.createDatabase('ast', {
            label: 'ast',
            public: true
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
                full_replace: true
            });
        } catch (e) {
            throw e;
        }
    }
    async update(node) {
        const x = DataNode.from(node);
        await this.client.updateDocument(x);
    }
    async add(program, fileName) {
        const converted = this.convert(program);
        // const traverser = new Traverser(program);
        // const nodes = traverser.getNodes();
        // nodes.find(x => x["@type"] === "Program")['name'] = fileName;
        converted['path'] = fileName;
        try {
            await this.client.addDocument(converted, {}, 'ast', 'init');
        } catch (e) {
            const errors = [];
            for (let error of e.data?.['api:error']?.['api:witnesses'] ?? []){
                errors.push(JSON.stringify(error, null, '  '));
            }
            throw new Error(`Failed to write to database: \n` + errors.join('\n'));
        }
    }
    convert(node, parent = null, key = null) {
        if (!node) return node;
        if (!node.type) {
            const parentSchema = this.getSchema(parent.type);
            node.type = parentSchema[key]['@class'] ?? parentSchema[key];
            if (!node.type) {
                throw new Error(`Node without type:\n ${JSON.stringify(node, null, ' ')}`);
            }
        }
        const res = {
            '@type': node.type,
            '@id': `${node.type}/${randomBytes(8).toString('base64')}`
        };
        const schema = this.getSchema(node.type);
        for(let key in node){
            if (key === 'type') continue;
            if (!schema[key]) continue;
            const value = node[key];
            if (!value || typeof value !== "object") res[key] = value;
            else if (Array.isArray(value)) {
                res[key] = value.map((x)=>this.convert(x, node, key));
            } else {
                res[key] = this.convert(value, node, key);
            }
        }
        for(let schemaKey in schema){
            if (schemaKey.startsWith('@')) continue;
            if (res[schemaKey] != null) continue;
            if (schema[schemaKey] == 'xsd:string') res[schemaKey] = '';
            if (schema[schemaKey] == 'xsd:double') res[schemaKey] = 0;
            if (schema[schemaKey] == 'xsd:boolean') res[schemaKey] = false;
            if (schema[schemaKey]?.['@type'] == 'List') res[schemaKey] = [];
        }
        return res;
    }
    async convertBack(node) {
        if (!node) return node;
        if (typeof node === "string" && node.match(/^\w+\/[\w=]+$/)) {
            return await this.getNode(node);
        }
        if (typeof node !== "object") return node;
        const res = {
            type: node['@type']
        };
        for(let key in node){
            if (key.startsWith('@')) continue;
            const value = node[key];
            if (value === -1) continue;
            if (value === '<NULL>') {
                res[key] = null;
                continue;
            }
            if (Array.isArray(value)) {
                res[key] = [];
                for(let i = 0; i < value.length; i++){
                    res[key][i] = await this.convertBack(value[i]);
                }
            } else {
                res[key] = await this.convertBack(value);
            }
        }
        return res;
    }
    getSchema(nodeType) {
        const schema = schemaMap.get(nodeType);
        if (!schema) throw new Error(`Node ${nodeType} not found`);
        const result = {
            ...schema
        };
        if (schema['@inherits']) {
            if (typeof schema['@inherits'] === "string") Object.assign(result, this.getSchema(schema['@inherits']));
            else for (let baseSchema of schema['@inherits']){
                Object.assign(result, this.getSchema(baseSchema));
            }
        }
        return result;
    }
    async getLastCommitDiff() {
        const [current, last] = await this.client.getCommitsLog(0, 2);
        const diff = await this.client.getVersionDiff(last['@id'].substr('ValidCommit/'.length), current['@id'].substr('ValidCommit/'.length));
        return diff;
    }
    async getModule(fileName) {
        return this.getNode('Module', {
            path: fileName
        });
    }
    async getNode(id, query = {
        '@id': id
    }) {
        let tryCount = 0;
        console.log(id, query);
        while(!this.cache[id]){
            try {
                this.cache[id] ??= await this.client.getDocument({
                    query,
                    type: id.split('/')[0]
                });
            } catch (e) {
                if (tryCount > 3) throw e;
                tryCount++;
            }
        }
        return await this.convertBack(this.cache[id]);
    }
    cache = {};
}
const skipped = new Set([
    '@id',
    '@type'
]);

//# sourceMappingURL=client.js.map