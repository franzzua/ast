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
    "@class": "Span"
  },
  "left": {
    "@type": "Class",
    "@id": "VariableDeclarationOrPattern"
  },
  "right": "Expression",
  "body": "Statement"
}