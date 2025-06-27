export const ArrayPattern = {
  "@type": "Class",
  "@id": "ArrayPattern",
  "@inherits": [
    "Pattern",
    "TsFnParameter",
    "PatternBase"
  ],
  "elements": {
    "@type": "List",
    "@class": "Pattern"
  },
  "optional": "xsd:boolean"
}