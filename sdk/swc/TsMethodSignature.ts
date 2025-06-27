export const TsMethodSignature = {
  "@type": "Class",
  "@id": "TsMethodSignature",
  "@inherits": [
    "TsTypeElement",
    "Node",
    "HasSpan"
  ],
  "readonly": "xsd:boolean",
  "key": "Expression",
  "computed": "xsd:boolean",
  "optional": "xsd:boolean",
  "params": {
    "@type": "List",
    "@class": "TsFnParameter"
  },
  "typeAnn": {
    "@type": "Optional",
    "@class": "TsTypeAnnotation"
  },
  "typeParams": {
    "@type": "Optional",
    "@class": "TsTypeParameterDeclaration"
  }
}