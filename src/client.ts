import {WOQLClient} from "@terminusdb/terminusdb-client";
import {Expression, Program, Statement} from "oxc-parser";
import {schema} from "./oxc-ast";
import { randomBytes} from "node:crypto"
import {Node} from "./parser";
import {as} from "@terminusdb/terminusdb-client/dist/typescript/lib/woql";

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

    async add(program: Program) {
        await this.init();
        convert(program);
        replaceIds(program);
        console.log(JSON.stringify(program, null, ' '))

        return this.client.addDocument(program);
    }
}

const skip = new Set(['type', 'start', 'end', 'hashbang']);
function convert(node: any) {
    if (!node || typeof node !== 'object') return node;
    if (Array.isArray(node)) {
        return node.map(convert).filter(x => x);
    }
    return convertStatement(node);
}

function replaceIds(node: Statement | Expression | Program){
    for (let key in node) {
        if (node[key] && typeof node[key] === 'object') {
            if (node[key].resolved) {
                node[key] = node[key].resolved['@id'];
            } else {
                replaceIds(node[key]);
            }
        }
    }
}

function convertStatement(node: Statement | Expression) {
    if (node['@id']) return;
    node['@type'] = node.type;
    const s = schema.find(x => x["@id"] == node.type)
    if (!s){
        console.log(`missed ${node.type}`);
    }
    const missedKeys = Object.keys(node).filter(x => !(x in s) && !skip.has(x));
    if (missedKeys.length > 0) {
        console.log(`missed ${missedKeys.join(', ')} in ${node.type}`);
    }
    // switch (node.type) {
    //     case 'ExpressionStatement':
    //         return  null;
    // }
    for (let key of skip) {
        delete node[key];
    }
    for (let key in node) {
        if (skip.has(key)) continue;
        convert(node[key]);
    }
    node['@id'] = `${node['@type']}/${id()}`;
}

const id = () => randomBytes(8).toString('base64');