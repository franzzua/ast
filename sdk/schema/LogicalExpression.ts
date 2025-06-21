export const LogicalExpression = {
    "@type": "Class",
    "@id": "LogicalExpression",
    "left": "Node",
    "operator": {
        "@type": "Enum",
        "@id": "LogicalOperator",
        "@value": ["||", "&&", "??"]
    },
    "right": "Node"
}; 