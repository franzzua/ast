import { Scope } from "./scope.js";
import { walk } from "oxc-walker";
import { randomBytes } from "node:crypto";
export class Traverser {
    program;
    scopes;
    ids;
    constructor(program){
        this.program = program;
        this.scopes = new Map();
        this.ids = new Map();
        this.setScopes = (node, parent)=>{
            const parentScope = this.scopes.get(parent);
            switch(node.type){
                case 'Program':
                case 'BlockStatement':
                    {
                        const newScope = new Scope(parentScope, node.type);
                        this.scopes.set(node, newScope);
                        break;
                    }
                case 'FunctionDeclaration':
                    {
                        const newScope = new Scope(parentScope, `${node.type}/${node.id?.name}`);
                        this.scopes.set(node, newScope);
                        break;
                    }
                default:
                    this.scopes.set(node, parentScope);
                    break;
            }
        };
        this.setDeclarations = (node, parent)=>{
            switch(node.type){
                // case "ClassDeclaration":
                //     if (node.id && node.id.type === 'Identifier') {
                //         const scope = this.scopes.get(parent);
                //         const id = this.getId(node);
                //         scope.register(node.id.name, `${node.type}/${id}`);
                //     }
                //     break;
                case 'FunctionDeclaration':
                    {
                        if (node.id && node.id.type === 'Identifier') {
                            this.register(parent, node.id);
                        }
                        for (const param of node.params){
                            if (param.type === 'Identifier') {
                                this.register(node, param);
                            }
                        }
                        break;
                    }
                case 'VariableDeclaration':
                    {
                        for (const decl of node.declarations){
                            if (decl.id.type === 'Identifier') {
                                this.register(parent, decl.id);
                            }
                        }
                        break;
                    }
            }
        };
        this.setIds = (node)=>{
            if (this.ids.has(node)) return;
            switch(node.type){
                case 'Identifier':
                    const scope = this.scopes.get(node);
                    const resolved = scope.resolve(node.name);
                    if (resolved) {
                        this.ids.set(node, resolved);
                    } else {
                        this.ids.set(node, this.getId(node));
                    }
                    break;
                default:
                    this.ids.set(node, this.getId(node));
                    break;
            }
        };
        walk(this.program, {
            enter: this.setScopes
        });
        walk(this.program, {
            enter: this.setDeclarations
        });
        walk(this.program, {
            enter: this.setIds
        });
    }
    setScopes;
    register(parent, node) {
        const scope = this.scopes.get(parent);
        const id = this.getId(node);
        scope.register(node.name, id);
        this.ids.set(node, id);
    }
    setDeclarations;
    setIds;
    getId(node) {
        return `${node.type}/${randomBytes(8).toString('base64')}`;
    }
    getNodes() {
        const map = new Map();
        walk(this.program, {
            enter: (node, parent, ctx)=>{
                const id = this.ids.get(node);
                if (!map.has(id)) {
                    const result = {
                        '@id': id,
                        '@type': node.type
                    };
                    for(let key in node){
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
            }
        });
        return Array.from(map.values());
    }
}
const skip = new Set([
    'type',
    'start',
    'end',
    'hashbang'
]);

//# sourceMappingURL=traverser.js.map