import { WOQLClient } from "@terminusdb/terminusdb-client";
import { schema } from "../schema/index.js";
import { DataNode } from "./dataNode.js";
import { Traverser } from "./traverser.js";
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
        await this.client.addDocument(schema, {
            graph_type: 'schema',
            full_replace: true
        });
    }
    async update(node) {
        const x = DataNode.from(node);
        await this.client.updateDocument(x);
    }
    async add(program, fileName) {
        const traverser = new Traverser(program);
        const nodes = traverser.getNodes();
        nodes.find((x)=>x["@type"] === "Program")['name'] = fileName;
        try {
            await this.client.addDocument(nodes, {}, 'ast', 'init');
        } catch (e) {
            for (let error of e.data?.['api:error']?.['api:witnesses'] ?? []){
                console.log(JSON.stringify(error, null, '  '));
            }
            throw new Error(`Failed to write to database`);
        }
    }
    async getLastCommitDiff() {
        const [current, last] = await this.client.getCommitsLog(0, 2);
        const diff = await this.client.getVersionDiff(last['@id'].substr('ValidCommit/'.length), current['@id'].substr('ValidCommit/'.length));
        return diff;
    }
    async getProgram(fileName) {
        const program = await this.client.getDocument({
            type: 'Program',
            query: {
                name: fileName
            },
            unfold: false
        });
        return (await this.getOxcNode(program)).as();
    }
    cache = new Map();
    async getOxcNode(node) {
        if (!node) return node;
        if (typeof node === 'string') {
            if (this.cache.has(node)) {
                return this.cache.get(node);
            }
            if (!node.includes('/')) return node;
            node = await this.client.getDocument({
                id: node
            });
        }
        if (typeof node !== 'object') return node;
        const oxcNode = new DataNode(node);
        this.cache.set(node["@id"], oxcNode);
        for(let key in node){
            if (skipped.has(key)) continue;
            const value = node[key];
            if (Array.isArray(value)) {
                oxcNode[key] = [];
                for(let i = 0; i < value.length; i++){
                    oxcNode[key][i] = await this.getOxcNode(value[i]);
                }
            } else {
                oxcNode[key] = await this.getOxcNode(value);
            }
        }
        return oxcNode;
    }
}
const skipped = new Set([
    '@id',
    '@type'
]);

//# sourceMappingURL=client.js.map