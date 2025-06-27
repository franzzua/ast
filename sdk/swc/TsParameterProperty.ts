export const TsParameterProperty = {
  "@type": "Class",
  "@id": "TsParameterProperty",
  "@inherits": [
    "TsParameterPropertyOrParam",
    "Node",
    "HasSpan",
    "HasDecorator"
  ],
  "accessibility": {
    "@type": "Optional",
    "@class": "Accessibility"
  },
  "override": "xsd:boolean",
  "readonly": "xsd:boolean",
  "param": "TsParameterPropertyParameter"
}