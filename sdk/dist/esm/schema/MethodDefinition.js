export const MethodDefinition = {
    "@type": "Class",
    "@id": "MethodDefinition",
    "@inherits": [
        "ClassElement"
    ],
    "key": "PropertyKey",
    "value": "FunctionDeclaration",
    "kind": "MethodDefinitionKind",
    "computed": "xsd:boolean",
    "static": "xsd:boolean",
    "override": "xsd:boolean"
};
export const PropertyDefinition = {
    "@type": "Class",
    "@id": "PropertyDefinition",
    "@inherits": [
        "ClassElement"
    ],
    "key": "PropertyKey",
    "value": {
        "@type": "Optional",
        "@class": "Expression"
    },
    "computed": "xsd:boolean",
    "static": "xsd:boolean",
    "declare": "xsd:boolean",
    "override": "xsd:boolean",
    "optional": "xsd:boolean",
    "definite": "xsd:boolean",
    "readonly": "xsd:boolean",
    "typeAnnotation": {
        "@type": "Optional",
        "@class": "TSTypeAnnotation"
    }
};
export const MethodDefinitionKind = {
    "@type": "Enum",
    "@id": "MethodDefinitionKind",
    "@value": [
        "constructor",
        "method",
        "get",
        "set"
    ]
};

//# sourceMappingURL=MethodDefinition.js.map