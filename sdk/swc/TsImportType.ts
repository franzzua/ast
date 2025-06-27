export const TsImportType = {
  "@type": "Class",
  "@id": "TsImportType",
  "@inherits": [
    "TsType",
    "TsTypeQueryExpr",
    "Node",
    "HasSpan"
  ],
  "argument": "StringLiteral",
  "qualifier": {
    "@type": "Optional",
    "@class": "TsEntityName"
  },
  "typeArguments": {
    "@type": "Optional",
    "@class": "TsTypeParameterInstantiation"
  }
}