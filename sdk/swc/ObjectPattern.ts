export const ObjectPattern = {
  "@type": "Class",
  "@id": "ObjectPattern",
  "@inherits": [
    "Pattern",
    "TsFnParameter",
    "PatternBase"
  ],
  "properties": {
    "@type": "List",
    "@class": "ObjectPatternProperty"
  },
  "optional": "xsd:boolean"
}