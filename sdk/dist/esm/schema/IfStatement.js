export const IfStatement = {
    "@type": "Class",
    "@id": "IfStatement",
    "@inherits": [
        "Statement"
    ],
    "test": "Expression",
    "consequent": "Statement",
    "alternate": {
        "@type": "Optional",
        "@class": "Statement"
    }
};

//# sourceMappingURL=IfStatement.js.map