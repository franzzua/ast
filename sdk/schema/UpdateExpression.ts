export const UpdateExpression = {
    "@type": "Class",
    "@id": "UpdateExpression",
    "operator": {
        "@type": "Enum",
        "@id": "UpdateOperator",
        "@value": ["++", "--"]
    },
    "prefix": "xsd:boolean",
    "argument": "Node"
}; 