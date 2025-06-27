export const ImportDeclaration = {
  "@type": "Class",
  "@id": "ImportDeclaration",
  "@inherits": [
    "ModuleDeclaration",
    "ModuleItem",
    "Node",
    "HasSpan"
  ],
  "specifiers": {
    "@type": "List",
    "@class": "ImportSpecifier"
  },
  "source": "StringLiteral",
  "typeOnly": "xsd:boolean",
  "asserts": {
    "@type": "Optional",
    "@class": "ObjectExpression"
  }
}