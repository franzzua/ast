export const TsMappedType = {
  "@type": "Class",
  "@id": "TsMappedType",
  "@inherits": [
    "TsType",
    "Node",
    "HasSpan"
  ],
  "readonly": {
    "@type": "Optional",
    "@class": "TruePlusMinus"
  },
  "typeParam": "TsTypeParameter",
  "nameType": {
    "@type": "Optional",
    "@class": "TsType"
  },
  "optional": {
    "@type": "Optional",
    "@class": "TruePlusMinus"
  },
  "typeAnnotation": {
    "@type": "Optional",
    "@class": "TsType"
  }
}