export const ClassPropertyBase = {
  "@type": "Class",
  "@id": "ClassPropertyBase",
  "@inherits": [
    "Node",
    "HasSpan",
    "HasDecorator"
  ],
  "value": {
    "@type": "Optional",
    "@class": "Expression"
  },
  "typeAnnotation": {
    "@type": "Optional",
    "@class": "TsTypeAnnotation"
  },
  "isStatic": "xsd:boolean",
  "accessibility": {
    "@type": "Optional",
    "@class": "Accessibility"
  },
  "isOptional": "xsd:boolean",
  "isOverride": "xsd:boolean",
  "readonly": "xsd:boolean",
  "definite": "xsd:boolean"
}