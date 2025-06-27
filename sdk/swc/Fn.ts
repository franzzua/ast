export const Fn = {
  "@type": "Class",
  "@id": "Fn",
  "@inherits": [
    "HasSpan",
    "HasDecorator"
  ],
  "params": {
    "@type": "List",
    "@class": "Parameter"
  },
  "body": {
    "@type": "Optional",
    "@class": "BlockStatement"
  },
  "generator": "xsd:boolean",
  "async": "xsd:boolean",
  "typeParameters": {
    "@type": "Optional",
    "@class": "TsTypeParameterDeclaration"
  },
  "returnType": {
    "@type": "Optional",
    "@class": "TsTypeAnnotation"
  }
}