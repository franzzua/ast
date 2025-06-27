export const TsModuleDeclaration = {
  "@type": "Class",
  "@id": "TsModuleDeclaration",
  "@inherits": [
    "Declaration",
    "Statement",
    "ModuleItem",
    "Node",
    "HasSpan"
  ],
  "declare": "xsd:boolean",
  "global": "xsd:boolean",
  "id": "TsModuleName",
  "body": {
    "@type": "Optional",
    "@class": "TsNamespaceBody"
  }
}