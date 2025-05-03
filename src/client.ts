import {WOQLClient} from "@terminusdb/terminusdb-client";
import {schema} from "./oxc-ast";
import {Node} from "./node";
import {Program, Node as OxcNode} from "oxc-parser";
import {Traverser} from "./traverser";

export class Client {
    private readonly client = new WOQLClient('http://localhost:6364',{
        user: 'admin',
        key: 'root',
        db: 'ast'
    });
    async init(): Promise<void> {
        const dbs: {label: string}[] = await this.client.getDatabases();
        if (dbs.some(x => x.label === 'ast')) {
            await this.client.deleteDatabase('ast');
        }
        await this.client.createDatabase('ast', {
            label: 'ast',
            public: true,
        }, 'admin');
        await this.client.addDocument(schema, {
            graph_type: 'schema',
            full_replace: true
        })
    }

    async add(program: Program, fileName: string): Promise<void> {
        const traverser = new Traverser(program);
        const nodes = traverser.getNodes();
        nodes.find(x => x["@type"] === "Program")['name'] = fileName;
        await this.init();
        await this.client.addDocument(nodes);
    }
    async getProgram(fileName: string) {
        const program = await this.client.getDocument({
            type: 'Program',
            query: {
                name: fileName
            },
            unfold: false
        }) as Node<Program>;
        const cache = new Map<string, OxcNode>();
        return this.getOxcNode(program, cache);
    }

    async getOxcNode<TNode extends OxcNode>(node: Node<TNode> | string, cache: Map<string, OxcNode>): Promise<TNode> {
        if (!node) return node as any;
        if (typeof node === 'string') {
            if (cache.has(node)) {
                return cache.get(node) as TNode;
            }
            if (!node.includes('/')) return node as any;
            node = await this.client.getDocument({id: node}) as Node<TNode>;
        }
        if (typeof node !== 'object') return node as any;
        const oxcNode = {type: node["@type"]};
        cache.set(node["@id"], oxcNode as TNode);
        for (let key in node) {
            if (skipped.has(key)) continue;
            const value = node[key];
            if (Array.isArray(value)) {
                oxcNode[key] = [];
                for (let i = 0; i < value.length; i++) {
                    oxcNode[key][i] = await this.getOxcNode(value[i], cache);
                }
            } else {
                oxcNode[key] = await this.getOxcNode(value, cache)
            }
        }
        return oxcNode as TNode;
    }
}
const skipped = new Set(['@id', '@type']);
