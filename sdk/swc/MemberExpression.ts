export const MemberExpression = {
  "@type": "Class",
  "@id": "MemberExpression",
  "@inherits": [
    "Expression",
    "Pattern",
    "ExpressionBase",
    "MemberExpressionOrOptionalChainingCall"
  ],
  "object": "Expression",
  "property": {
    "@type": "Class",
    "@id": "IdentifierOrPrivateNameOrComputedPropName"
  }
}