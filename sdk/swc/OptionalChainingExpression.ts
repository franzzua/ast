export const OptionalChainingExpression = {
  "@type": "Class",
  "@id": "OptionalChainingExpression",
  "@inherits": [
    "Expression",
    "Pattern",
    "ExpressionBase"
  ],
  "questionDotToken": {
    "@type": "Optional",
    "@class": "Span"
  },
  "base": {
    "@type": "Class",
    "@id": "MemberExpressionOrOptionalChainingCall"
  }
}