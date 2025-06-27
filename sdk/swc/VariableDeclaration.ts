export const VariableDeclaration = {
  "@type": "Class",
  "@id": "VariableDeclaration",
  "@inherits": [
    "VariableDeclarationOrExpression",
    "Node",
    "HasSpan",
    "VariableDeclarationOrPattern",
    "Declaration",
    "Statement",
    "ModuleItem"
  ],
  "kind": "VariableDeclarationKind",
  "declare": "xsd:boolean",
  "declarations": {
    "@type": "List",
    "@class": "VariableDeclarator"
  }
}