export const BinaryExpression = {
    "@type": "Class",
    "@id": "BinaryExpression",
    "left": "Node",
    "operator": {
        "@type": "Enum",
        "@id": "BinaryOperator",
        "@value": ["==", "!=", "===", "!==", "<", "<=", ">", ">=", "+", "-", "*", "/", "%", "**", "<<", ">>", ">>>", "|", "^", "&", "in", "instanceof"]
    },
    "right": "Node"
}; 