export const OptionalChainingCall = {
  "@type": "Class",
  "@id": "OptionalChainingCall",
  "@inherits": [
    "MemberExpressionOrOptionalChainingCall",
    "ExpressionBase"
  ],
  "callee": "Expression",
  "arguments": {
    "@type": "List",
    "@class": "ExprOrSpread"
  },
  "typeArguments": {
    "@type": "Optional",
    "@class": "TsTypeParameterInstantiation"
  }
}