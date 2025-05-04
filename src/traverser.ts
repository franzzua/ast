import {Node as OxcNode} from "@oxc-project/types";
import {Scope} from "./scope";
import {BindingIdentifier, IdentifierName, IdentifierReference, Program} from "oxc-parser";
import {walk} from "oxc-walker";
import {randomBytes} from "node:crypto";
import {INode} from "./dataNode";
type Identifier = BindingIdentifier | IdentifierName | IdentifierReference;

export class Traverser {
    private scopes = new Map<OxcNode, Scope>();
    private ids = new Map<OxcNode, string>();

    constructor(private program: Program) {
        walk(this.program, {enter: this.setScopes});
        walk(this.program, {enter: this.setDeclarations});
        walk(this.program, {enter: this.setIds});
    }

    setScopes = (node: OxcNode, parent?: OxcNode) => {
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

    register(parent: OxcNode, node: Identifier) {
        const scope = this.scopes.get(parent);
        const id = this.getId(node);
        scope.register(node.name, id);
        this.ids.set(node, id);
    }

    setDeclarations = (node: OxcNode, parent?: OxcNode) => {
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
                    this.register(parent, node.id);
                }
                for (const param of node.params) {
                    if (param.type === 'Identifier') {
                        this.register(node, param);
                    }
                }
                break;
            }
            case 'VariableDeclaration': {
                for (const decl of node.declarations) {
                    if (decl.id.type === 'Identifier') {
                        this.register(parent, decl.id);
                    }
                }
                break;
            }
        }
    }

    setIds = (node: OxcNode) => {
        if (this.ids.has(node)) return;
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

    getId(node: OxcNode): string {
        return `${node.type}/${randomBytes(8).toString('base64')}`
    }

    public getNodes(): INode[] {
        const map = new Map<string, INode>();
        walk(this.program, {
            enter: (node, parent, ctx) => {
                const id = this.ids.get(node);
                if (!map.has(id)) {
                    const result = {
                        '@id': id,
                        '@type': node.type,
                    } as INode;
                    for (let key in node) {
                        if (skip.has(key)) continue;
                        result[key] = node[key];
                    }
                    map.set(id, result);
                }
                if (!parent) return;
                const parentId = this.ids.get(parent);
                const parentNode = map.get(parentId);
                if (ctx.index !== null) {
                    parentNode[ctx.key][ctx.index] = id;
                } else {
                    parentNode[ctx.key] = id;
                }
            },
        });
        return Array.from(map.values());
    }

}
const skip = new Set(['type', 'start', 'end', 'hashbang']);
