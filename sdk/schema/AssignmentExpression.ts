export const AssignmentExpression = {
    "@type": "Class",
    "@id": "AssignmentExpression",
    "@inherits": "Span",
    "operator": {
        "@type": "Enum",
        "@id": "AssignmentOperator",
        "@value": ["=", "+=", "-=", "*=", "/=", "%=", "**=", "<<=", ">>=", ">>>=", "|=", "^=", "&=", "||=", "&&=", "??="]
    },
    "left": "Node",
    "right": "Node"
}; 