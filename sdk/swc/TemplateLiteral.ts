export const TemplateLiteral = {
  "@type": "Class",
  "@id": "TemplateLiteral",
  "@inherits": [
    "Expression",
    "Pattern",
    "Node",
    "HasSpan",
    "TsLiteral"
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