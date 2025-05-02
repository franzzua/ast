import {Expression, Program, Statement, Declaration} from "oxc-parser";

type Node = (Statement | Expression | Program | Declaration) & {
    resolved?: Declaration
}; // Replace with actual Node type from oxc AST
type Identifier = { type: 'Identifier'; name: string; resolved?: Node };

interface Scope {
    parent: Scope | null;
    bindings: Map<string, Declaration>;
}

function createScope(parent: Scope | null): Scope {
    return {
        parent,
        bindings: new Map(),
    };
}

function resolveIdentifier(name: string, scope: Scope): Declaration | null {
    if (scope.bindings.has(name)) {
        return scope.bindings.get(name)!;
    } else if (scope.parent) {
        return resolveIdentifier(name, scope.parent);
    } else {
        return null;
    }
}

export function traverse(node: Node, scope: Scope = createScope(null)): void {
    switch (node.type) {
        case 'Program':
        case 'BlockStatement': {
            const newScope = createScope(scope);
            for (const stmt of node.body) {
                traverse(stmt, newScope);
            }
            break;
        }
        case 'VariableDeclaration': {
            for (const decl of node.declarations) {
                if (decl.id.type === 'Identifier') {
                    scope.bindings.set(decl.id.name, decl);
                }
                if (decl.init) {
                    traverse(decl.init, scope);
                }
            }
            break;
        }
        case 'FunctionDeclaration': {
            if (node.id && node.id.type === 'Identifier') {
                scope.bindings.set(node.id.name, node);
            }
            const newScope = createScope(scope);
            for (const param of node.params) {
                if (param.type === 'Identifier') {
                    newScope.bindings.set(param.name, param);
                }
            }
            traverse(node.body, newScope);
            break;
        }
        case 'Identifier': {
            const declaration = resolveIdentifier(node.name, scope);
            node.resolved = declaration;
            break;
        }
        // Add more cases as needed for other node types
        default: {
            // Recursively traverse child nodes
            for (const key in node) {
                const child = node[key];
                if (Array.isArray(child)) {
                    for (const c of child) {
                        if (c && typeof c.type === 'string') {
                            traverse(c, scope);
                        }
                    }
                } else if (child && typeof child.type === 'string') {
                    traverse(child, scope);
                }
            }
            break;
        }
    }
}

// Usage:
// const ast = parseYourCodeWithOxc();
// const globalScope = createScope(null);
// traverse(ast, globalScope);
