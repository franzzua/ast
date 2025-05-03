import {WOQLClient} from "@terminusdb/terminusdb-client";
import {schema} from "./oxc-ast";
import {Node} from "./node";

export class Client {
    private readonly client = new WOQLClient('http://localhost:6364',{
        user: 'admin',
        key: 'root'
    });
    async init(): Promise<void> {
        const dbs: {label: string}[] = await this.client.getDatabases();
        if (dbs.some(x => x.label === 'ast')) {
            await this.client.deleteDatabase('ast')
        }
        await this.client.createDatabase('ast', {
            label: 'ast',
            public: true,
        }, 'admin');
        this.client.db('ast');
        await this.client.addDocument(schema, {
            graph_type: 'schema',
            full_replace: true
        })
    }

    async add(nodes: Node[]) {
        await this.init();
        // for (let node of nodes) {
            await this.client.addDocument(nodes);
        // }
    }
}