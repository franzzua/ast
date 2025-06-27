export const AssignmentExpression = {
    "@type": "Class",
    "@id": "AssignmentExpression",
    "@inherits": [
        "Expression"
    ],
    "operator": "xsd:string",
    "left": {
        "@type": "Optional",
        "@class": "Pattern"
    },
    "right": {
        "@type": "Optional",
        "@class": "Expression"
    }
};

//# sourceMappingURL=AssignmentExpression.js.map