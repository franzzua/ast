const skipped = new Set([
    '@id',
    '@type'
]);
export class Serializer {
    constructor(){}
    serialize = (node)=>{
        switch(node.type){
            case "Program":
                return node.body.map(this.serialize).join("\n\n");
            case "VariableDeclaration":
                return `${node.kind} ${node.declarations.map(this.serialize).join(",\n")};`;
            case "VariableDeclarator":
                return `${this.serialize(node.id)} = ${this.serialize(node.init)}`;
            case "Identifier":
                return node.name;
            case "Literal":
                return node.raw;
            case "ExpressionStatement":
                return this.serialize(node.expression) + ';';
            case "CallExpression":
                return `${this.serialize(node.callee)}(${node.arguments.map(this.serialize).join(", ")})`;
            case "FunctionDeclaration":
                return [
                    `function ${node.id.name}(${node.params.map(this.serializeDecl).join(", ")}) {`,
                    node.body.body.map(this.serialize).map((x)=>`\t` + x).join("\n"),
                    "}"
                ].join('\n');
            case "MemberExpression":
                return this.serialize(node.object) + '.' + this.serialize(node.property);
            case "BinaryExpression":
                return this.serialize(node.left) + ' ' + node.operator + ' ' + this.serialize(node.right);
            default:
                return node.type;
        }
    };
    serializeTS(node) {
        switch(node.type){
            case 'TSStringKeyword':
                return 'string';
        }
    }
    serializeDecl = (node)=>{
        switch(node.type){
            case "Identifier":
                if (node.typeAnnotation) return `${node.name}: ${this.serializeTS(node.typeAnnotation.typeAnnotation)}`;
                return node.name;
        }
    };
}

//# sourceMappingURL=serializer.js.map