export const MemberExpression = {
  "@type": "Class",
  "@id": "MemberExpression",
  "@inherits": [
    "Expression",
    "ExpressionBase",
    "MemberExpressionOrOptionalChainingCall"
  ],
  "object": "Expression",
  "property": {
    "@type": "Class",
    "@id": "IdentifierOrPrivateNameOrComputedPropName"
  }
}