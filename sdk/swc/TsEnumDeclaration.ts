export const TsEnumDeclaration = {
  "@type": "Class",
  "@id": "TsEnumDeclaration",
  "@inherits": [
    "Declaration",
    "Statement",
    "ModuleItem",
    "Node",
    "HasSpan"
  ],
  "declare": "xsd:boolean",
  "isConst": "xsd:boolean",
  "id": "Identifier",
  "members": {
    "@type": "List",
    "@class": "TsEnumMember"
  }
}