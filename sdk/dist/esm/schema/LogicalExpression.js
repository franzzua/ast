export const LogicalExpression = {
    "@type": "Class",
    "@id": "LogicalExpression",
    "@inherits": [
        "Expression"
    ],
    "left": "Expression",
    "operator": "LogicalOperator",
    "right": "Expression"
};
export const LogicalOperator = {
    "@type": "Enum",
    "@id": "LogicalOperator",
    "@value": [
        "||",
        "&&",
        "??"
    ]
};

//# sourceMappingURL=LogicalExpression.js.map