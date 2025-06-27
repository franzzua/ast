export const TsCallSignatureDeclaration = {
  "@type": "Class",
  "@id": "TsCallSignatureDeclaration",
  "@inherits": [
    "TsTypeElement",
    "Node",
    "HasSpan"
  ],
  "params": {
    "@type": "List",
    "@class": "TsFnParameter"
  },
  "typeAnnotation": {
    "@type": "Optional",
    "@class": "TsTypeAnnotation"
  },
  "typeParams": {
    "@type": "Optional",
    "@class": "TsTypeParameterDeclaration"
  }
}