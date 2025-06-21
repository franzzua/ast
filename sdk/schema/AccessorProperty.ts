export const AccessorProperty = {
    "@type": "Class",
    "@id": "AccessorProperty",
    "type": {
        "@type": "Enum",
        "@id": "AccessorPropertyType",
        "@value": ["AccessorProperty", "TSAbstractAccessorProperty"]
    },
    "key": "Node",
    "value": {
        "@type": "Optional",
        "@class": "Node"
    },
    "computed": "xsd:boolean",
    "static": "xsd:boolean",
    "decorators": {
        "@type": "Set",
        "@class": "Node"
    },
    "definite": "xsd:boolean",
    "typeAnnotation": {
        "@type": "Optional",
        "@class": "Node"
    },
    "accessibility": {
        "@type": "Optional",
        "@class": "xsd:string"
    },
    "optional": "xsd:boolean",
    "override": "xsd:boolean",
    "readonly": "xsd:boolean",
    "declare": "xsd:boolean"
}; 