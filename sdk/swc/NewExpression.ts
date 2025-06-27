export const NewExpression = {
  "@type": "Class",
  "@id": "NewExpression",
  "@inherits": [
    "Expression",
    "ExpressionBase"
  ],
  "callee": "Expression",
  "arguments": {
    "@type": "List",
    "@class": "Argument"
  },
  "typeArguments": {
    "@type": "Optional",
    "@class": "TsTypeParameterInstantiation"
  }
}