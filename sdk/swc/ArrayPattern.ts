export const ArrayPattern = {
  "@type": "Class",
  "@id": "ArrayPattern",
  "@inherits": [
    "TsFnParameter",
    "PatternBase",
    "Pattern"
  ],
  "elements": {
    "@type": "List",
    "@class": "Pattern"
  },
  "optional": "xsd:boolean"
}