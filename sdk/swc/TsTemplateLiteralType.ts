export const TsTemplateLiteralType = {
  "@type": "Class",
  "@id": "TsTemplateLiteralType",
  "@inherits": [
    "TsLiteral",
    "Node",
    "HasSpan"
  ],
  "types": {
    "@type": "List",
    "@class": "TsType"
  },
  "quasis": {
    "@type": "List",
    "@class": "TemplateElement"
  }
}