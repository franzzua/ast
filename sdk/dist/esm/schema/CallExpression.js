export const CallExpression = {
    "@type": "Class",
    "@id": "CallExpression",
    "@inherits": [
        "Expression"
    ],
    "callee": {
        "@type": "Optional",
        "@class": "FunctionDeclaration"
    },
    "arguments": {
        "@type": "Set",
        "@class": "Expression"
    },
    "optional": {
        "@type": "Optional",
        "@class": "xsd:boolean"
    },
    "typeArguments": {
        "@type": "Optional",
        "@class": "TSTypeParameterInstantiation"
    }
};

//# sourceMappingURL=CallExpression.js.map