export const NamedImportSpecifier = {
  "@type": "Class",
  "@id": "NamedImportSpecifier",
  "@inherits": [
    "ImportSpecifier",
    "Node",
    "HasSpan"
  ],
  "local": "Identifier",
  "imported": {
    "@type": "Optional",
    "@class": "ModuleExportName"
  },
  "isTypeOnly": "xsd:boolean"
}