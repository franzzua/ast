export const AssignmentExpression = {
    "@type": "Class",
    "@id": "AssignmentExpression",
    "operator": {
        "@type": "Enum",
        "@id": "AssignmentOperator",
        "@value": ["=", "+=", "-=", "*=", "/=", "%=", "**=", "<<=", ">>=", ">>>=", "|=", "^=", "&=", "||=", "&&=", "??="]
    },
    "left": "Node",
    "right": "Node"
}; 