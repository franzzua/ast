export const UnaryExpression = {
    "@type": "Class",
    "@id": "UnaryExpression",
    "operator": {
        "@type": "Enum",
        "@id": "UnaryOperator",
        "@value": ["+", "-", "!", "~", "typeof", "void", "delete"]
    },
    "prefix": "xsd:boolean",
    "argument": "Node"
}; 