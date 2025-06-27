export const TsTypeAliasDeclaration = {
  "@type": "Class",
  "@id": "TsTypeAliasDeclaration",
  "@inherits": [
    "Declaration",
    "Statement",
    "ModuleItem",
    "Node",
    "HasSpan"
  ],
  "declare": "xsd:boolean",
  "id": "Identifier",
  "typeParams": {
    "@type": "Optional",
    "@class": "TsTypeParameterDeclaration"
  },
  "typeAnnotation": "TsType"
}