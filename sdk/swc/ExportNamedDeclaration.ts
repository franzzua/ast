export const ExportNamedDeclaration = {
  "@type": "Class",
  "@id": "ExportNamedDeclaration",
  "@inherits": [
    "ModuleDeclaration",
    "ModuleItem",
    "Node",
    "HasSpan"
  ],
  "specifiers": {
    "@type": "List",
    "@class": "ExportSpecifier"
  },
  "source": {
    "@type": "Optional",
    "@class": "StringLiteral"
  },
  "typeOnly": "xsd:boolean",
  "asserts": {
    "@type": "Optional",
    "@class": "ObjectExpression"
  }
}