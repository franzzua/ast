export const CallExpression = {
  "@type": "Class",
  "@id": "CallExpression",
  "@inherits": [
    "Expression",
    "Pattern",
    "ExpressionBase",
    "MemberExpressionOrOptionalChainingCall"
  ],
  "callee": {
    "@type": "Class",
    "@id": "SuperOrImportOrExpression"
  },
  "arguments": {
    "@type": "List",
    "@class": "Argument"
  },
  "typeArguments": {
    "@type": "Optional",
    "@class": "TsTypeParameterInstantiation"
  }
}