export const UpdateExpression = {
    "@type": "Class",
    "@id": "UpdateExpression",
    "@inherits": [
        "Expression"
    ],
    "operator": "UpdateOperator",
    "prefix": "xsd:boolean",
    "argument": "Expression"
};
export const UpdateOperator = {
    "@type": "Enum",
    "@id": "UpdateOperator",
    "@value": [
        "++",
        "--"
    ]
};

//# sourceMappingURL=UpdateExpression.js.map