export const FunctionDeclaration = {
    "@type": "Class",
    "@id": "FunctionDeclaration",
    "@inherits": [
        "Statement"
    ],
    "id": {
        "@type": "Optional",
        "@class": "Identifier"
    },
    "params": {
        "@type": "Set",
        "@class": "Pattern"
    },
    "body": {
        "@type": "Optional",
        "@class": "BlockStatement"
    },
    "generator": "xsd:boolean",
    "async": "xsd:boolean",
    "expression": "xsd:boolean",
    "declare": "xsd:boolean",
    "typeParameters": {
        "@type": "Optional",
        "@class": "Statement"
    },
    "returnType": {
        "@type": "Optional",
        "@class": "Statement"
    }
};

//# sourceMappingURL=FunctionDeclaration.js.map