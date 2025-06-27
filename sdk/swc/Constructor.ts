export const Constructor = {
  "@type": "Class",
  "@id": "Constructor",
  "@inherits": [
    "ClassMember",
    "Node",
    "HasSpan"
  ],
  "key": "PropertyName",
  "params": {
    "@type": "List",
    "@class": "TsParameterPropertyOrParam"
  },
  "body": {
    "@type": "Optional",
    "@class": "BlockStatement"
  },
  "accessibility": {
    "@type": "Optional",
    "@class": "Accessibility"
  },
  "isOptional": "xsd:boolean"
}