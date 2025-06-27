export const TsTypeParameter = {
  "@type": "Class",
  "@id": "TsTypeParameter",
  "@inherits": [
    "Node",
    "HasSpan"
  ],
  "name": "Identifier",
  "in": "xsd:boolean",
  "out": "xsd:boolean",
  "constraint": {
    "@type": "Optional",
    "@class": "TsType"
  },
  "default": {
    "@type": "Optional",
    "@class": "TsType"
  }
}