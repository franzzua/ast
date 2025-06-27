export const UnaryExpression = {
    "@type": "Class",
    "@id": "UnaryExpression",
    "@inherits": [
        "Expression"
    ],
    "operator": "UnaryOperator",
    "argument": "Expression"
};
export const UnaryOperator = {
    "@type": "Enum",
    "@id": "UnaryOperator",
    "@value": [
        "+",
        "-",
        "!",
        "~",
        "typeof",
        "void",
        "delete"
    ]
};

//# sourceMappingURL=UnaryExpression.js.map