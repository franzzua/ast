export const TsFunctionType = {
  "@type": "Class",
  "@id": "TsFunctionType",
  "@inherits": [
    "TsFnOrConstructorType",
    "TsType",
    "Node",
    "HasSpan"
  ],
  "params": {
    "@type": "List",
    "@class": "TsFnParameter"
  },
  "typeParams": {
    "@type": "Optional",
    "@class": "TsTypeParameterDeclaration"
  },
  "typeAnnotation": "TsTypeAnnotation"
}