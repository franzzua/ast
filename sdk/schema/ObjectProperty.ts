export const ObjectProperty = {
    "@type": "Class",
    "@id": "ObjectProperty",
    "method": "xsd:boolean",
    "shorthand": "xsd:boolean",
    "computed": "xsd:boolean",
    "key": "Node", // PropertyKey
    "value": "Node", // Expression
    "kind": {
        "@type": "Enum",
        "@id": "PropertyKind",
        "@value": ["init", "get", "set"]
    },
    "optional": "xsd:boolean"
}; 