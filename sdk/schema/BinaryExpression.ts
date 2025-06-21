export const BinaryExpression = {
    "@type": "Class",
    "@id": "BinaryExpression",
    "@inherits": "Span",
    "left": "Node",
    "operator": {
        "@type": "Enum",
        "@id": "BinaryOperator",
        "@value": ["==", "!=", "===", "!==", "<", "<=", ">", ">=", "+", "-", "*", "/", "%", "**", "<<", ">>", ">>>", "|", "^", "&", "in", "instanceof"]
    },
    "right": "Node"
}; 