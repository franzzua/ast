export const SwitchStatement = {
  "@type": "Class",
  "@id": "SwitchStatement",
  "@inherits": [
    "Statement",
    "ModuleItem",
    "Node",
    "HasSpan"
  ],
  "discriminant": "Expression",
  "cases": {
    "@type": "List",
    "@class": "SwitchCase"
  }
}