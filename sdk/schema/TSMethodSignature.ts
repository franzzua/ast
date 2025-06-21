export const TSMethodSignature = {
    "@type": "Class",
    "@id": "TSMethodSignature",
    "key": "Node",
    "computed": "xsd:boolean",
    "optional": "xsd:boolean",
    "kind": {
        "@type": "Enum",
        "@id": "TSMethodSignatureKind",
        "@value": ["method", "get", "set"]
    },
    "typeParameters": {
        "@type": "Optional",
        "@class": "Node"
    },
    "params": {
        "@type": "List",
        "@class": "Node"
    },
    "returnType": {
        "@type": "Optional",
        "@class": "Node"
    },
    "accessibility": {
        "@type": "Optional",
        "@class": "xsd:string"
    },
    "readonly": "xsd:boolean",
    "static": "xsd:boolean"
}; 