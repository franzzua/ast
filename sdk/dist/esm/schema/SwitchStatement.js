export const SwitchStatement = {
    "@type": "Class",
    "@id": "SwitchStatement",
    "@inherits": [
        "Statement"
    ],
    "discriminant": "Expression",
    "cases": {
        "@type": "List",
        "@class": "SwitchCase"
    }
};
export const SwitchCase = {
    "@type": "Class",
    "@id": "SwitchCase",
    "test": {
        "@type": "Optional",
        "@class": "Expression"
    },
    "consequent": {
        "@type": "List",
        "@class": "Statement"
    }
};

//# sourceMappingURL=SwitchStatement.js.map