export const TsConstructorType = {
  "@type": "Class",
  "@id": "TsConstructorType",
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
  "typeAnnotation": "TsTypeAnnotation",
  "isAbstract": "xsd:boolean"
}