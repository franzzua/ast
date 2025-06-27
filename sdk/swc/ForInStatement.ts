export const ForInStatement = {
  "@type": "Class",
  "@id": "ForInStatement",
  "@inherits": [
    "Statement",
    "ModuleItem",
    "Node",
    "HasSpan"
  ],
  "left": {
    "@type": "Class",
    "@id": "VariableDeclarationOrPattern"
  },
  "right": "Expression",
  "body": "Statement"
}