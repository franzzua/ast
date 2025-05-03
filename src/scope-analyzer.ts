import {parse} from 'espree';
import {Program} from 'acorn';
import {ScopeManager, analyze} from "eslint-scope";

interface IdentifierNode {
    name: string;
    type: string;
    references: IdentifierNode[];
    definition?: {
        type: string;
        node: any;
    };
}

export class ScopeAnalyzer {
    private ast: Program;
    private scopeManager: ScopeManager;
    private identifierGraph: Map<string, IdentifierNode>;

    constructor() {
        this.identifierGraph = new Map();
    }

    public analyze(code: string): Map<string, IdentifierNode> {
        // Parse the code with espree
        this.ast = parse(code, {
            ecmaVersion: 2022,
            sourceType: 'module',
            ecmaFeatures: {
                jsx: true,
                globalReturn: true
            }
        });

        // Analyze scopes
        this.scopeManager = analyze(this.ast, {
            ecmaVersion: 2022,
            sourceType: 'module',
            nodejsScope: true
        });

        this.buildIdentifierGraph();
        return this.identifierGraph;
    }

    private buildIdentifierGraph(): void {
        // Process each scope
        for (let scope of this.scopeManager.scopes) {
            // Process variables in this scope
            for (const variable of scope.variables) {
                const identifierNode: IdentifierNode = {
                    name: variable.name,
                    type: variable.defs[0]?.type || 'unknown',
                    references: [],
                    definition: variable.defs[0] ? {
                        type: variable.defs[0].type,
                        node: variable.defs[0].node
                    } : undefined
                };

                // Add to graph if not already present
                if (!this.identifierGraph.has(variable.name)) {
                    this.identifierGraph.set(variable.name, identifierNode);
                }

                // Process references
                variable.references.forEach(ref => {
                    if (ref.identifier) {
                        const referencedNode = this.identifierGraph.get(ref.identifier.name);
                        if (referencedNode) {
                            this.identifierGraph.get(variable.name)?.references.push(referencedNode);
                        }
                    }
                });
            }
        }
    }

    public getGraph(): Map<string, IdentifierNode> {
        return this.identifierGraph;
    }

    public printGraph(): void {
        this.identifierGraph.forEach((node, name) => {
            console.log(`Identifier: ${name}`);
            console.log(`Type: ${node.type}`);
            if (node.definition) {
                console.log(`Definition: ${node.definition.type}`);
            }
            console.log('References:');
            node.references.forEach(ref => {
                console.log(`  - ${ref.name}`);
            });
            console.log('---');
        });
    }
} 