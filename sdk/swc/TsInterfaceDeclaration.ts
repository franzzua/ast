export const TsInterfaceDeclaration = {
  "@type": "Class",
  "@id": "TsInterfaceDeclaration",
  "@inherits": [
    "Declaration",
    "Statement",
    "ModuleItem",
    "Node",
    "HasSpan",
    "DefaultDecl"
  ],
  "id": "Identifier",
  "declare": "xsd:boolean",
  "typeParams": {
    "@type": "Optional",
    "@class": "TsTypeParameterDeclaration"
  },
  "extends": {
    "@type": "List",
    "@class": "TsExpressionWithTypeArguments"
  },
  "body": "TsInterfaceBody"
}