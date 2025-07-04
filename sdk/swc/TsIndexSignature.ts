export const TsIndexSignature = {
  "@type": "Class",
  "@id": "TsIndexSignature",
  "@inherits": [
    "ClassMember",
    "Node",
    "HasSpan",
    "TsTypeElement"
  ],
  "params": {
    "@type": "List",
    "@class": "TsFnParameter"
  },
  "typeAnnotation": {
    "@type": "Optional",
    "@class": "TsTypeAnnotation"
  },
  "readonly": "xsd:boolean",
  "static": "xsd:boolean"
}