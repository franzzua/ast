export const MethodDefinition = {
    "@type": "Class",
    "@id": "MethodDefinition",
    "type": {
        "@type": "Enum",
        "@id": "MethodDefinitionType",
        "@value": ["MethodDefinition", "TSAbstractMethodDefinition"]
    },
    "static": "xsd:boolean",
    "computed": "xsd:boolean",
    "key": "Node",
    "kind": {
        "@type": "Enum",
        "@id": "MethodDefinitionKind",
        "@value": ["constructor", "method", "get", "set"]
    },
    "value": "Node",
    "decorators": {
        "@type": "Set",
        "@class": "Node"
    },
    "override": "xsd:boolean",
    "optional": "xsd:boolean",
    "accessibility": {
        "@type": "Optional",
        "@class": "xsd:string"
    }
}; 