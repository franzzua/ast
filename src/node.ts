import {Expression, Program, Statement, VariableDeclarator} from "oxc-parser";
import {randomBytes} from "node:crypto";
import {Scope} from "./scope";
import {parseAsync} from "oxc-parser";
export type OxcNode = Statement | Program | Expression | VariableDeclarator;

export type Node<TStatement extends OxcNode = OxcNode> = Omit<TStatement, "type" | "start" | "end"> & {
    '@id': string;
    '@type': TStatement["type"];
}
export class NodeParser {

    async parse(fileName: string, code: string): Promise<Node[]> {
        const parseResult = await parseAsync(fileName, code);
        if (parseResult.errors.length) throw parseResult.errors;
        const program = parseResult.program;
        const traverser = new Traverser(program);
        const nodes = new Set([...traverser.getNodes()]);
        return [...nodes];
    }


}
const skip = new Set(['type', 'start', 'end', 'hashbang']);

class Traverser {
    private scopes = new Map<OxcNode, Scope>();
    private ids = new Map<OxcNode, string>();
    private nodes = new Map<string, Node>();
    constructor(private program: Program) {
        this.setScopes();
        this.setDeclarations();
        this.setIds();
    }

    setScopes() {
        for (let { node, parent } of this.iterate()) {
            const parentScope = this.scopes.get(parent);
            switch (node.type) {
                case 'Program':
                case 'BlockStatement': {
                    const newScope = new Scope(parentScope, node.type);
                    this.scopes.set(node, newScope);
                    break;
                }
                case 'FunctionDeclaration': {
                    const newScope = new Scope(parentScope, `${node.type}/${node.id?.name}`);
                    this.scopes.set(node, newScope);
                    break;
                }
                default:
                    this.scopes.set(node, parentScope);
                    break;
            }
        }
    }
    setDeclarations(){
        for (let { node, parent } of this.iterate()) {
            switch (node.type) {
                // case "ClassDeclaration":
                //     if (node.id && node.id.type === 'Identifier') {
                //         const scope = this.scopes.get(parent);
                //         const id = this.getId(node);
                //         scope.register(node.id.name, `${node.type}/${id}`);
                //     }
                //     break;
                case 'FunctionDeclaration': {
                    if (node.id && node.id.type === 'Identifier') {
                        const scope = this.scopes.get(parent);
                        const id = this.getId(node);
                        scope.register(node.id.name, id);
                        this.ids.set(node, id);
                        this.ids.set(node.id, this.getId(node.id));
                    }
                    for (const param of node.params) {
                        if (param.type === 'Identifier') {
                            const scope = this.scopes.get(node);
                            const id = this.getId(param);
                            this.ids.set(param, id);
                            scope.register(param.name, id);
                        }
                    }
                    break;
                }
                case 'VariableDeclaration': {
                    const scope = this.scopes.get(parent);
                    for (const decl of node.declarations) {
                        if (decl.id.type === 'Identifier') {
                            const id = this.getId(decl.id);
                            scope.register(decl.id.name, id);
                            this.ids.set(decl.id, id);
                        }
                    }
                    break;
                }
            }
        }
    }
    setIds(){
        for (let { node } of this.iterate()) {
            if (this.ids.has(node)) continue;
            switch (node.type) {
                case 'Identifier':
                    const scope = this.scopes.get(node);
                    const resolved = scope.resolve(node.name);

                    if (resolved) {
                        this.ids.set(node, resolved);
                    } else {
                        this.ids.set(node, this.getId(node))
                    }
                    break;
                default:
                    this.ids.set(node, this.getId(node))
                    break;
            }
        }
    }
    getId(node: OxcNode): string {
        return  `${node.type}/${randomBytes(8).toString('base64')}`
    }

    public * getNodes(node: OxcNode = this.program): Generator<Node> {
        const id = this.ids.get(node);
        if (this.nodes.has(id))
            return;
        const result = {
            '@id': id,
            '@type': node.type,
        }
        if (!result["@id"].startsWith(result["@type"]))
            return ;
        for (let key in node) {
            if (skip.has(key)) continue;
            if (Array.isArray(node[key])) {
                result[key] = [];
                for (let i = 0; i < node[key].length; i++) {
                    const item = node[key][i];
                    if (item && typeof item === "object" && 'type' in item) {
                        yield * this.getNodes(item);
                        result[key][i] = this.ids.get(item as OxcNode);
                    }
                }
            } else if (node[key] && typeof node[key] === 'object' && 'type' in node[key]) {
                yield* this.getNodes(node[key]);
                result[key] = this.ids.get(node[key] as OxcNode);
            } else {
                result[key] = node[key];
            }
        }
        this.nodes.set(id, result);
        yield result;
    }

    *iterate(node: OxcNode = this.program, parent?: OxcNode): Generator<{ node: OxcNode, parent?: OxcNode }> {
        yield { node, parent };
        for (const key in node) {
            const child = node[key];
            if (Array.isArray(child)) {
                for (let childNode of child) {
                    yield * this.iterate(childNode, node) as any;
                }
            } else if (child && typeof child === 'object' && 'type' in child) {
                yield * this.iterate(child, node) as any;
            }
        }
    }
}