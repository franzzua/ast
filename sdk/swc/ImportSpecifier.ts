export const ImportSpecifier = {
  "@type": "Class",
  "@id": "ImportSpecifier",
  "@inherits": [
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