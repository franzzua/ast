export const ObjectExpression = {
    "@type": "Class",
    "@id": "ObjectExpression",
    "@inherits": [
        "Expression"
    ],
    "properties": {
        "@type": "Set",
        "@class": "Property"
    }
};
export const ObjectProperty = {
    "@type": "Class",
    "@id": "Property",
    "kind": "PropertyKind",
    "key": "PropertyKey",
    "value": "Expression",
    "method": "xsd:boolean",
    "shorthand": "xsd:boolean",
    "computed": "xsd:boolean",
    "optional": "xsd:boolean"
};
export const PropertyKey = {
    "@type": "Class",
    "@id": "PropertyKey",
    "@abstract": []
};
export const PropertyKind = {
    "@type": "Enum",
    "@id": "PropertyKind",
    "@value": [
        "init",
        "get",
        "set"
    ]
};

//# sourceMappingURL=ObjectExpression.js.map