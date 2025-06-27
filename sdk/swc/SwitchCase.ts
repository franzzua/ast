export const SwitchCase = {
  "@type": "Class",
  "@id": "SwitchCase",
  "@inherits": [
    "Node",
    "HasSpan"
  ],
  "test": {
    "@type": "Optional",
    "@class": "Expression"
  },
  "consequent": {
    "@type": "List",
    "@class": "Statement"
  }
}