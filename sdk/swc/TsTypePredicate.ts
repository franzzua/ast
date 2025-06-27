export const TsTypePredicate = {
  "@type": "Class",
  "@id": "TsTypePredicate",
  "@inherits": [
    "TsType",
    "Node",
    "HasSpan"
  ],
  "asserts": "xsd:boolean",
  "paramName": "TsThisTypeOrIdent",
  "typeAnnotation": {
    "@type": "Optional",
    "@class": "TsTypeAnnotation"
  }
}