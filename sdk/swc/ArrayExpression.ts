export const ArrayExpression = {
  "@type": "Class",
  "@id": "ArrayExpression",
  "@inherits": [
    "Expression",
    "Pattern",
    "ExpressionBase"
  ],
  "elements": {
    "@type": "List",
    "@class": "ExprOrSpread"
  }
}