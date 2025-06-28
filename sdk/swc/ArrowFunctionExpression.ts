export const ArrowFunctionExpression = {
  "@type": "Class",
  "@id": "ArrowFunctionExpression",
  "@inherits": [
    "Expression",
    "Pattern",
    "ExpressionBase"
  ],
  "params": {
    "@type": "List",
    "@class": "Pattern"
  },
  "body": {
    "@type": "Class",
    "@id": "BlockStatementOrExpression"
  },
  "async": "xsd:boolean",
  "generator": "xsd:boolean",
  "typeParameters": {
    "@type": "Optional",
    "@class": "TsTypeParameterDeclaration"
  },
  "returnType": {
    "@type": "Optional",
    "@class": "TsTypeAnnotation"
  }
}