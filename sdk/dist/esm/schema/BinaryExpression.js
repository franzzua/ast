export const BinaryExpression = {
    "@type": "Class",
    "@id": "BinaryExpression",
    "@inherits": [
        "Expression"
    ],
    "operator": "xsd:string",
    "left": {
        "@type": "Optional",
        "@class": "Expression"
    },
    "right": {
        "@type": "Optional",
        "@class": "Expression"
    }
};

//# sourceMappingURL=BinaryExpression.js.map