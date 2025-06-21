export const PropertyDefinition = {
    "@type": "Class",
    "@id": "PropertyDefinition",
    "type": {
        "@type": "Enum",
        "@id": "PropertyDefinitionType",
        "@value": ["PropertyDefinition", "TSAbstractPropertyDefinition"]
    },
    "static": "xsd:boolean",
    "computed": "xsd:boolean",
    "key": "Node",
    "value": {
        "@type": "Optional",
        "@class": "Node"
    },
    "decorators": {
        "@type": "Set",
        "@class": "Node"
    },
    "declare": "xsd:boolean",
    "override": "xsd:boolean",
    "optional": "xsd:boolean",
    "definite": "xsd:boolean",
    "readonly": "xsd:boolean",
    "typeAnnotation": {
        "@type": "Optional",
        "@class": "Node"
    },
    "accessibility": {
        "@type": "Optional",
        "@class": "xsd:string"
    }
}; 