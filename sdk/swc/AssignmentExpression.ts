export const AssignmentExpression = {
  "@type": "Class",
  "@id": "AssignmentExpression",
  "@inherits": [
    "Expression",
    "ExpressionBase"
  ],
  "operator": "AssignmentOperator",
  "left": {
    "@type": "Class",
    "@id": "ExpressionOrPattern"
  },
  "right": "Expression"
}