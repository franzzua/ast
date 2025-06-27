export const IfStatement = {
  "@type": "Class",
  "@id": "IfStatement",
  "@inherits": [
    "Statement",
    "ModuleItem",
    "Node",
    "HasSpan"
  ],
  "test": "Expression",
  "consequent": "Statement",
  "alternate": {
    "@type": "Optional",
    "@class": "Statement"
  }
}