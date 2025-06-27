export const Class = {
  "@type": "Class",
  "@id": "Class",
  "@inherits": [
    "HasSpan",
    "HasDecorator"
  ],
  "body": {
    "@type": "List",
    "@class": "ClassMember"
  },
  "superClass": {
    "@type": "Optional",
    "@class": "Expression"
  },
  "isAbstract": "xsd:boolean",
  "typeParams": {
    "@type": "Optional",
    "@class": "TsTypeParameterDeclaration"
  },
  "superTypeParams": {
    "@type": "Optional",
    "@class": "TsTypeParameterInstantiation"
  },
  "implements": {
    "@type": "List",
    "@class": "TsExpressionWithTypeArguments"
  }
}