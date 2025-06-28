export const ForOfStatement = {
  "@type": "Class",
  "@id": "ForOfStatement",
  "@inherits": [
    "Statement",
    "ModuleItem",
    "Node",
    "HasSpan"
  ],
  "await": {
    "@type": "Optional",
    "@class": "xsd:boolean"
  },
  "left": {
    "@type": "Class",
    "@id": "VariableDeclarationOrPattern"
  },
  "right": "Expression",
  "body": "Statement"
}