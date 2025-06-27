export const VariableDeclaration = {
    "@type": "Class",
    "@id": "VariableDeclaration",
    "@inherits": [
        "Statement"
    ],
    "declarations": {
        "@type": "Set",
        "@class": "VariableDeclarator"
    },
    "kind": {
        "@type": "Enum",
        "@id": "VariableKind",
        "@value": [
            "var",
            "let",
            "const"
        ]
    },
    "declare": "xsd:boolean"
};

//# sourceMappingURL=VariableDeclaration.js.map