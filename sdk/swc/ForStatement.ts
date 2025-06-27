export const ForStatement = {
  "@type": "Class",
  "@id": "ForStatement",
  "@inherits": [
    "Statement",
    "ModuleItem",
    "Node",
    "HasSpan"
  ],
  "init": {
    "@type": "Class",
    "@id": "VariableDeclarationOrExpression"
  },
  "test": {
    "@type": "Optional",
    "@class": "Expression"
  },
  "update": {
    "@type": "Optional",
    "@class": "Expression"
  },
  "body": "Statement"
}