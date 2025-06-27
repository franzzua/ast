export const swcSchema = [
  {
    "@type": "Class",
    "@id": "Module",
    "@inherits": [
      "Node",
      "HasSpan",
      "HasInterpreter"
    ],
    "body": {
      "@type": "List",
      "@class": "ModuleItem"
    }
  },
  {
    "@type": "Class",
    "@id": "Node",
    "@inherits": []
  },
  {
    "@type": "Class",
    "@id": "HasSpan",
    "@inherits": [],
    "span": "Span"
  },
  {
    "@type": "Class",
    "@id": "Span",
    "@inherits": [],
    "start": "xsd:double",
    "end": "xsd:double",
    "ctxt": "xsd:double"
  },
  {
    "@type": "Class",
    "@id": "HasInterpreter",
    "@inherits": [],
    "interpreter": "xsd:string"
  },
  {
    "@type": "Class",
    "@id": "ModuleItem"
  },
  {
    "@type": "Class",
    "@id": "ModuleDeclaration"
  },
  {
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
  },
  {
    "@type": "Class",
    "@id": "ImportSpecifier"
  },
  {
    "@type": "Class",
    "@id": "NamedImportSpecifier",
    "@inherits": [
      "ImportSpecifier",
      "Node",
      "HasSpan"
    ],
    "local": "Identifier",
    "imported": {
      "@type": "Optional",
      "@class": "ModuleExportName"
    },
    "isTypeOnly": "xsd:boolean"
  },
  {
    "@type": "Class",
    "@id": "Identifier",
    "@inherits": [
      "Pattern",
      "ExpressionBase",
      "ModuleExportName",
      "Expression",
      "PropertyName",
      "TsEntityName",
      "TsThisTypeOrIdent",
      "TsEnumMemberId",
      "TsModuleName",
      "IdentifierOrPrivateNameOrComputedPropName",
      "IdentifierOrComputedPropName",
      "JSXObject",
      "JSXElementName",
      "JSXAttributeName",
      "Property",
      "SpreadElementOrProperty"
    ],
    "value": "xsd:string",
    "optional": "xsd:boolean"
  },
  {
    "@type": "Class",
    "@id": "ExpressionBase",
    "@inherits": [
      "Node",
      "HasSpan"
    ]
  },
  {
    "@type": "Class",
    "@id": "ModuleExportName"
  },
  {
    "@type": "Class",
    "@id": "StringLiteral",
    "@inherits": [
      "ModuleExportName",
      "Node",
      "HasSpan",
      "PropertyName",
      "TsLiteral",
      "TsEnumMemberId",
      "TsModuleName",
      "Literal",
      "Expression"
    ],
    "value": "xsd:string",
    "raw": {
      "@type": "Optional",
      "@class": "xsd:string"
    }
  },
  {
    "@type": "Class",
    "@id": "ModuleExportName"
  },
  {
    "@type": "Class",
    "@id": "ImportDefaultSpecifier",
    "@inherits": [
      "ImportSpecifier",
      "Node",
      "HasSpan"
    ],
    "local": "Identifier"
  },
  {
    "@type": "Class",
    "@id": "ImportNamespaceSpecifier",
    "@inherits": [
      "ImportSpecifier",
      "Node",
      "HasSpan"
    ],
    "local": "Identifier"
  },
  {
    "@type": "Class",
    "@id": "ImportSpecifier"
  },
  {
    "@type": "Class",
    "@id": "ObjectExpression",
    "@inherits": [
      "ExpressionBase"
    ],
    "properties": {
      "@type": "List",
      "@class": "SpreadElementOrProperty"
    }
  },
  {
    "@type": "Class",
    "@id": "SpreadElement",
    "@inherits": [
      "SpreadElementOrProperty",
      "Node",
      "JSXAttributeOrSpread"
    ],
    "spread": "Span",
    "arguments": "Expression"
  },
  {
    "@type": "Class",
    "@id": "ThisExpression",
    "@inherits": [
      "Expression",
      "ExpressionBase"
    ]
  },
  {
    "@type": "Class",
    "@id": "ArrayExpression",
    "@inherits": [
      "Expression",
      "ExpressionBase"
    ],
    "elements": {
      "@type": "List",
      "@class": "ExprOrSpread"
    }
  },
  {
    "@type": "Class",
    "@id": "ExprOrSpread",
    "@inherits": [],
    "spread": {
      "@type": "Optional",
      "@class": "Span"
    },
    "expression": "Expression"
  },
  {
    "@type": "Class",
    "@id": "FunctionExpression",
    "@inherits": [
      "Expression",
      "Fn",
      "ExpressionBase",
      "DefaultDecl"
    ],
    "identifier": {
      "@type": "Optional",
      "@class": "Identifier"
    }
  },
  {
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
  },
  {
    "@type": "Class",
    "@id": "HasDecorator",
    "@inherits": [],
    "decorators": {
      "@type": "List",
      "@class": "Decorator"
    }
  },
  {
    "@type": "Class",
    "@id": "Decorator",
    "@inherits": [
      "Node",
      "HasSpan"
    ],
    "expression": "Expression"
  },
  {
    "@type": "Class",
    "@id": "Parameter",
    "@inherits": [
      "Node",
      "HasSpan",
      "HasDecorator"
    ],
    "pat": "Pattern"
  },
  {
    "@type": "Class",
    "@id": "Pattern"
  },
  {
    "@type": "Class",
    "@id": "BindingIdentifier",
    "@inherits": [
      "Pattern",
      "PatternBase",
      "TsFnParameter",
      "TsParameterPropertyParameter"
    ],
    "value": "xsd:string",
    "optional": "xsd:boolean"
  },
  {
    "@type": "Class",
    "@id": "PatternBase",
    "@inherits": [
      "Node",
      "HasSpan"
    ],
    "typeAnnotation": {
      "@type": "Optional",
      "@class": "TsTypeAnnotation"
    }
  },
  {
    "@type": "Class",
    "@id": "TsTypeAnnotation",
    "@inherits": [
      "Node",
      "HasSpan"
    ],
    "typeAnnotation": "TsType"
  },
  {
    "@type": "Class",
    "@id": "TsType"
  },
  {
    "@type": "Class",
    "@id": "TsKeywordType",
    "@inherits": [
      "TsType",
      "Node",
      "HasSpan"
    ],
    "kind": "TsKeywordTypeKind"
  },
  {
    "@type": "Enum",
    "@id": "TsKeywordTypeKind",
    "@value": [
      "any",
      "unknown",
      "number",
      "object",
      "boolean",
      "bigint",
      "string",
      "symbol",
      "void",
      "undefined",
      "null",
      "never",
      "intrinsic"
    ]
  },
  {
    "@type": "Class",
    "@id": "TsThisType",
    "@inherits": [
      "TsType",
      "Node",
      "HasSpan",
      "TsThisTypeOrIdent"
    ]
  },
  {
    "@type": "Class",
    "@id": "TsFnOrConstructorType"
  },
  {
    "@type": "Class",
    "@id": "TsFunctionType",
    "@inherits": [
      "TsFnOrConstructorType",
      "TsType",
      "Node",
      "HasSpan"
    ],
    "params": {
      "@type": "List",
      "@class": "TsFnParameter"
    },
    "typeParams": {
      "@type": "Optional",
      "@class": "TsTypeParameterDeclaration"
    },
    "typeAnnotation": "TsTypeAnnotation"
  },
  {
    "@type": "Class",
    "@id": "TsFnParameter"
  },
  {
    "@type": "Class",
    "@id": "ArrayPattern",
    "@inherits": [
      "Pattern",
      "TsFnParameter",
      "PatternBase"
    ],
    "elements": {
      "@type": "List",
      "@class": "Pattern"
    },
    "optional": "xsd:boolean"
  },
  {
    "@type": "Class",
    "@id": "RestElement",
    "@inherits": [
      "Pattern",
      "TsFnParameter",
      "PatternBase",
      "ObjectPatternProperty"
    ],
    "rest": "Span",
    "argument": "Pattern"
  },
  {
    "@type": "Class",
    "@id": "ObjectPattern",
    "@inherits": [
      "Pattern",
      "TsFnParameter",
      "PatternBase"
    ],
    "properties": {
      "@type": "List",
      "@class": "ObjectPatternProperty"
    },
    "optional": "xsd:boolean"
  },
  {
    "@type": "Class",
    "@id": "ObjectPatternProperty"
  },
  {
    "@type": "Class",
    "@id": "KeyValuePatternProperty",
    "@inherits": [
      "ObjectPatternProperty",
      "Node"
    ],
    "key": "PropertyName",
    "value": "Pattern"
  },
  {
    "@type": "Class",
    "@id": "PropertyName"
  },
  {
    "@type": "Class",
    "@id": "NumericLiteral",
    "@inherits": [
      "PropertyName",
      "Node",
      "HasSpan",
      "TsLiteral",
      "Literal",
      "Expression"
    ],
    "value": "xsd:double",
    "raw": {
      "@type": "Optional",
      "@class": "xsd:string"
    }
  },
  {
    "@type": "Class",
    "@id": "ComputedPropName",
    "@inherits": [
      "PropertyName",
      "Node",
      "HasSpan",
      "IdentifierOrPrivateNameOrComputedPropName",
      "IdentifierOrComputedPropName"
    ],
    "expression": "Expression"
  },
  {
    "@type": "Class",
    "@id": "BigIntLiteral",
    "@inherits": [
      "PropertyName",
      "Node",
      "HasSpan",
      "TsLiteral",
      "Literal",
      "Expression"
    ],
    "value": "xsd:double",
    "raw": {
      "@type": "Optional",
      "@class": "xsd:string"
    }
  },
  {
    "@type": "Class",
    "@id": "PropertyName"
  },
  {
    "@type": "Class",
    "@id": "AssignmentPatternProperty",
    "@inherits": [
      "ObjectPatternProperty",
      "Node",
      "HasSpan"
    ],
    "key": "Identifier",
    "value": {
      "@type": "Optional",
      "@class": "Expression"
    }
  },
  {
    "@type": "Class",
    "@id": "ObjectPatternProperty"
  },
  {
    "@type": "Class",
    "@id": "TsFnParameter"
  },
  {
    "@type": "Class",
    "@id": "TsTypeParameterDeclaration",
    "@inherits": [
      "Node",
      "HasSpan"
    ],
    "parameters": {
      "@type": "List",
      "@class": "TsTypeParameter"
    }
  },
  {
    "@type": "Class",
    "@id": "TsTypeParameter",
    "@inherits": [
      "Node",
      "HasSpan"
    ],
    "name": "Identifier",
    "in": "xsd:boolean",
    "out": "xsd:boolean",
    "constraint": {
      "@type": "Optional",
      "@class": "TsType"
    },
    "default": {
      "@type": "Optional",
      "@class": "TsType"
    }
  },
  {
    "@type": "Class",
    "@id": "TsConstructorType",
    "@inherits": [
      "TsFnOrConstructorType",
      "TsType",
      "Node",
      "HasSpan"
    ],
    "params": {
      "@type": "List",
      "@class": "TsFnParameter"
    },
    "typeParams": {
      "@type": "Optional",
      "@class": "TsTypeParameterDeclaration"
    },
    "typeAnnotation": "TsTypeAnnotation",
    "isAbstract": "xsd:boolean"
  },
  {
    "@type": "Class",
    "@id": "TsFnOrConstructorType"
  },
  {
    "@type": "Class",
    "@id": "TsTypeReference",
    "@inherits": [
      "TsType",
      "Node",
      "HasSpan"
    ],
    "typeName": "TsEntityName",
    "typeParams": {
      "@type": "Optional",
      "@class": "TsTypeParameterInstantiation"
    }
  },
  {
    "@type": "Class",
    "@id": "TsEntityName"
  },
  {
    "@type": "Class",
    "@id": "TsQualifiedName",
    "@inherits": [
      "TsEntityName",
      "Node"
    ],
    "left": "TsEntityName",
    "right": "Identifier"
  },
  {
    "@type": "Class",
    "@id": "TsEntityName"
  },
  {
    "@type": "Class",
    "@id": "TsTypeParameterInstantiation",
    "@inherits": [
      "Node",
      "HasSpan"
    ],
    "params": {
      "@type": "List",
      "@class": "TsType"
    }
  },
  {
    "@type": "Class",
    "@id": "TsTypeQuery",
    "@inherits": [
      "TsType",
      "Node",
      "HasSpan"
    ],
    "exprName": "TsTypeQueryExpr",
    "typeArguments": {
      "@type": "Optional",
      "@class": "TsTypeParameterInstantiation"
    }
  },
  {
    "@type": "Class",
    "@id": "TsTypeQueryExpr"
  },
  {
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
  },
  {
    "@type": "Class",
    "@id": "TsTypeQueryExpr"
  },
  {
    "@type": "Class",
    "@id": "TsTypeLiteral",
    "@inherits": [
      "TsType",
      "Node",
      "HasSpan"
    ],
    "members": {
      "@type": "List",
      "@class": "TsTypeElement"
    }
  },
  {
    "@type": "Class",
    "@id": "TsTypeElement"
  },
  {
    "@type": "Class",
    "@id": "TsCallSignatureDeclaration",
    "@inherits": [
      "TsTypeElement",
      "Node",
      "HasSpan"
    ],
    "params": {
      "@type": "List",
      "@class": "TsFnParameter"
    },
    "typeAnnotation": {
      "@type": "Optional",
      "@class": "TsTypeAnnotation"
    },
    "typeParams": {
      "@type": "Optional",
      "@class": "TsTypeParameterDeclaration"
    }
  },
  {
    "@type": "Class",
    "@id": "TsConstructSignatureDeclaration",
    "@inherits": [
      "TsTypeElement",
      "Node",
      "HasSpan"
    ],
    "params": {
      "@type": "List",
      "@class": "TsFnParameter"
    },
    "typeAnnotation": {
      "@type": "Optional",
      "@class": "TsTypeAnnotation"
    },
    "typeParams": {
      "@type": "Optional",
      "@class": "TsTypeParameterDeclaration"
    }
  },
  {
    "@type": "Class",
    "@id": "TsPropertySignature",
    "@inherits": [
      "TsTypeElement",
      "Node",
      "HasSpan"
    ],
    "readonly": "xsd:boolean",
    "key": "Expression",
    "computed": "xsd:boolean",
    "optional": "xsd:boolean",
    "typeAnnotation": {
      "@type": "Optional",
      "@class": "TsTypeAnnotation"
    }
  },
  {
    "@type": "Class",
    "@id": "TsGetterSignature",
    "@inherits": [
      "TsTypeElement",
      "Node",
      "HasSpan"
    ],
    "readonly": "xsd:boolean",
    "key": "Expression",
    "computed": "xsd:boolean",
    "optional": "xsd:boolean",
    "typeAnnotation": {
      "@type": "Optional",
      "@class": "TsTypeAnnotation"
    }
  },
  {
    "@type": "Class",
    "@id": "TsSetterSignature",
    "@inherits": [
      "TsTypeElement",
      "Node",
      "HasSpan"
    ],
    "readonly": "xsd:boolean",
    "key": "Expression",
    "computed": "xsd:boolean",
    "optional": "xsd:boolean",
    "param": "TsFnParameter"
  },
  {
    "@type": "Class",
    "@id": "TsMethodSignature",
    "@inherits": [
      "TsTypeElement",
      "Node",
      "HasSpan"
    ],
    "readonly": "xsd:boolean",
    "key": "Expression",
    "computed": "xsd:boolean",
    "optional": "xsd:boolean",
    "params": {
      "@type": "List",
      "@class": "TsFnParameter"
    },
    "typeAnn": {
      "@type": "Optional",
      "@class": "TsTypeAnnotation"
    },
    "typeParams": {
      "@type": "Optional",
      "@class": "TsTypeParameterDeclaration"
    }
  },
  {
    "@type": "Class",
    "@id": "TsIndexSignature",
    "@inherits": [
      "TsTypeElement",
      "Node",
      "HasSpan",
      "ClassMember"
    ],
    "params": {
      "@type": "List",
      "@class": "TsFnParameter"
    },
    "typeAnnotation": {
      "@type": "Optional",
      "@class": "TsTypeAnnotation"
    },
    "readonly": "xsd:boolean",
    "static": "xsd:boolean"
  },
  {
    "@type": "Class",
    "@id": "TsTypeElement"
  },
  {
    "@type": "Class",
    "@id": "TsArrayType",
    "@inherits": [
      "TsType",
      "Node",
      "HasSpan"
    ],
    "elemType": "TsType"
  },
  {
    "@type": "Class",
    "@id": "TsTupleType",
    "@inherits": [
      "TsType",
      "Node",
      "HasSpan"
    ],
    "elemTypes": {
      "@type": "List",
      "@class": "TsTupleElement"
    }
  },
  {
    "@type": "Class",
    "@id": "TsTupleElement",
    "@inherits": [
      "Node",
      "HasSpan"
    ],
    "label": {
      "@type": "Optional",
      "@class": "Pattern"
    },
    "ty": "TsType"
  },
  {
    "@type": "Class",
    "@id": "TsOptionalType",
    "@inherits": [
      "TsType",
      "Node",
      "HasSpan"
    ],
    "typeAnnotation": "TsType"
  },
  {
    "@type": "Class",
    "@id": "TsRestType",
    "@inherits": [
      "TsType",
      "Node",
      "HasSpan"
    ],
    "typeAnnotation": "TsType"
  },
  {
    "@type": "Class",
    "@id": "TsUnionOrIntersectionType"
  },
  {
    "@type": "Class",
    "@id": "TsUnionType",
    "@inherits": [
      "TsUnionOrIntersectionType",
      "TsType",
      "Node",
      "HasSpan"
    ],
    "types": {
      "@type": "List",
      "@class": "TsType"
    }
  },
  {
    "@type": "Class",
    "@id": "TsIntersectionType",
    "@inherits": [
      "TsUnionOrIntersectionType",
      "TsType",
      "Node",
      "HasSpan"
    ],
    "types": {
      "@type": "List",
      "@class": "TsType"
    }
  },
  {
    "@type": "Class",
    "@id": "TsUnionOrIntersectionType"
  },
  {
    "@type": "Class",
    "@id": "TsConditionalType",
    "@inherits": [
      "TsType",
      "Node",
      "HasSpan"
    ],
    "checkType": "TsType",
    "extendsType": "TsType",
    "trueType": "TsType",
    "falseType": "TsType"
  },
  {
    "@type": "Class",
    "@id": "TsInferType",
    "@inherits": [
      "TsType",
      "Node",
      "HasSpan"
    ],
    "typeParam": "TsTypeParameter"
  },
  {
    "@type": "Class",
    "@id": "TsParenthesizedType",
    "@inherits": [
      "TsType",
      "Node",
      "HasSpan"
    ],
    "typeAnnotation": "TsType"
  },
  {
    "@type": "Class",
    "@id": "TsTypeOperator",
    "@inherits": [
      "TsType",
      "Node",
      "HasSpan"
    ],
    "op": "TsTypeOperatorOp",
    "typeAnnotation": "TsType"
  },
  {
    "@type": "Enum",
    "@id": "TsTypeOperatorOp",
    "@value": [
      "keyof",
      "unique",
      "readonly"
    ]
  },
  {
    "@type": "Class",
    "@id": "TsIndexedAccessType",
    "@inherits": [
      "TsType",
      "Node",
      "HasSpan"
    ],
    "readonly": "xsd:boolean",
    "objectType": "TsType",
    "indexType": "TsType"
  },
  {
    "@type": "Class",
    "@id": "TsMappedType",
    "@inherits": [
      "TsType",
      "Node",
      "HasSpan"
    ],
    "readonly": {
      "@type": "Optional",
      "@class": "TruePlusMinus"
    },
    "typeParam": "TsTypeParameter",
    "nameType": {
      "@type": "Optional",
      "@class": "TsType"
    },
    "optional": {
      "@type": "Optional",
      "@class": "TruePlusMinus"
    },
    "typeAnnotation": {
      "@type": "Optional",
      "@class": "TsType"
    }
  },
  {
    "@type": "Enum",
    "@id": "TruePlusMinus",
    "@value": [
      true,
      "+",
      "-"
    ]
  },
  {
    "@type": "Class",
    "@id": "TsLiteralType",
    "@inherits": [
      "TsType",
      "Node",
      "HasSpan"
    ],
    "literal": "TsLiteral"
  },
  {
    "@type": "Class",
    "@id": "TsLiteral"
  },
  {
    "@type": "Class",
    "@id": "BooleanLiteral",
    "@inherits": [
      "TsLiteral",
      "Node",
      "HasSpan",
      "Literal",
      "Expression"
    ],
    "value": "xsd:boolean"
  },
  {
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
  },
  {
    "@type": "Class",
    "@id": "TemplateElement",
    "@inherits": [
      "ExpressionBase"
    ],
    "tail": "xsd:boolean",
    "cooked": {
      "@type": "Optional",
      "@class": "xsd:string"
    },
    "raw": "xsd:string"
  },
  {
    "@type": "Class",
    "@id": "TsLiteral"
  },
  {
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
  },
  {
    "@type": "Class",
    "@id": "TsThisTypeOrIdent"
  },
  {
    "@type": "Class",
    "@id": "TsThisTypeOrIdent"
  },
  {
    "@type": "Class",
    "@id": "TsType"
  },
  {
    "@type": "Class",
    "@id": "AssignmentPattern",
    "@inherits": [
      "Pattern",
      "PatternBase",
      "TsParameterPropertyParameter"
    ],
    "left": "Pattern",
    "right": "Expression"
  },
  {
    "@type": "Class",
    "@id": "Invalid",
    "@inherits": [
      "Expression",
      "Pattern",
      "Node",
      "HasSpan"
    ]
  },
  {
    "@type": "Class",
    "@id": "Pattern"
  },
  {
    "@type": "Class",
    "@id": "BlockStatement",
    "@inherits": [
      "Node",
      "HasSpan"
    ],
    "stmts": {
      "@type": "List",
      "@class": "Statement"
    }
  },
  {
    "@type": "Class",
    "@id": "Statement"
  },
  {
    "@type": "Class",
    "@id": "EmptyStatement",
    "@inherits": [
      "Statement",
      "ModuleItem",
      "Node",
      "HasSpan",
      "ClassMember"
    ]
  },
  {
    "@type": "Class",
    "@id": "DebuggerStatement",
    "@inherits": [
      "Statement",
      "ModuleItem",
      "Node",
      "HasSpan"
    ]
  },
  {
    "@type": "Class",
    "@id": "WithStatement",
    "@inherits": [
      "Statement",
      "ModuleItem",
      "Node",
      "HasSpan"
    ],
    "object": "Expression",
    "body": "Statement"
  },
  {
    "@type": "Class",
    "@id": "ReturnStatement",
    "@inherits": [
      "Statement",
      "ModuleItem",
      "Node",
      "HasSpan"
    ],
    "argument": {
      "@type": "Optional",
      "@class": "Expression"
    }
  },
  {
    "@type": "Class",
    "@id": "LabeledStatement",
    "@inherits": [
      "Statement",
      "ModuleItem",
      "Node",
      "HasSpan"
    ],
    "label": "Identifier",
    "body": "Statement"
  },
  {
    "@type": "Class",
    "@id": "BreakStatement",
    "@inherits": [
      "Statement",
      "ModuleItem",
      "Node",
      "HasSpan"
    ],
    "label": {
      "@type": "Optional",
      "@class": "Identifier"
    }
  },
  {
    "@type": "Class",
    "@id": "ContinueStatement",
    "@inherits": [
      "Statement",
      "ModuleItem",
      "Node",
      "HasSpan"
    ],
    "label": {
      "@type": "Optional",
      "@class": "Identifier"
    }
  },
  {
    "@type": "Class",
    "@id": "IfStatement",
    "@inherits": [
      "Statement",
      "ModuleItem",
      "Node",
      "HasSpan"
    ],
    "test": "Expression",
    "consequent": "Statement",
    "alternate": {
      "@type": "Optional",
      "@class": "Statement"
    }
  },
  {
    "@type": "Class",
    "@id": "SwitchStatement",
    "@inherits": [
      "Statement",
      "ModuleItem",
      "Node",
      "HasSpan"
    ],
    "discriminant": "Expression",
    "cases": {
      "@type": "List",
      "@class": "SwitchCase"
    }
  },
  {
    "@type": "Class",
    "@id": "SwitchCase",
    "@inherits": [
      "Node",
      "HasSpan"
    ],
    "test": {
      "@type": "Optional",
      "@class": "Expression"
    },
    "consequent": {
      "@type": "List",
      "@class": "Statement"
    }
  },
  {
    "@type": "Class",
    "@id": "ThrowStatement",
    "@inherits": [
      "Statement",
      "ModuleItem",
      "Node",
      "HasSpan"
    ],
    "argument": "Expression"
  },
  {
    "@type": "Class",
    "@id": "TryStatement",
    "@inherits": [
      "Statement",
      "ModuleItem",
      "Node",
      "HasSpan"
    ],
    "block": "BlockStatement",
    "handler": {
      "@type": "Optional",
      "@class": "CatchClause"
    },
    "finalizer": {
      "@type": "Optional",
      "@class": "BlockStatement"
    }
  },
  {
    "@type": "Class",
    "@id": "CatchClause",
    "@inherits": [
      "Node",
      "HasSpan"
    ],
    "param": {
      "@type": "Optional",
      "@class": "Pattern"
    },
    "body": "BlockStatement"
  },
  {
    "@type": "Class",
    "@id": "WhileStatement",
    "@inherits": [
      "Statement",
      "ModuleItem",
      "Node",
      "HasSpan"
    ],
    "test": "Expression",
    "body": "Statement"
  },
  {
    "@type": "Class",
    "@id": "DoWhileStatement",
    "@inherits": [
      "Statement",
      "ModuleItem",
      "Node",
      "HasSpan"
    ],
    "test": "Expression",
    "body": "Statement"
  },
  {
    "@type": "Class",
    "@id": "ForStatement",
    "@inherits": [
      "Statement",
      "ModuleItem",
      "Node",
      "HasSpan"
    ],
    "init": {
      "@type": "Class",
      "@id": "VariableDeclarationOrExpression"
    },
    "test": {
      "@type": "Optional",
      "@class": "Expression"
    },
    "update": {
      "@type": "Optional",
      "@class": "Expression"
    },
    "body": "Statement"
  },
  {
    "@type": "Class",
    "@id": "VariableDeclaration",
    "@inherits": [
      "VariableDeclarationOrExpression",
      "Node",
      "HasSpan",
      "VariableDeclarationOrPattern",
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
  },
  {
    "@type": "Enum",
    "@id": "VariableDeclarationKind",
    "@value": [
      "var",
      "let",
      "const"
    ]
  },
  {
    "@type": "Class",
    "@id": "VariableDeclarator",
    "@inherits": [
      "Node",
      "HasSpan"
    ],
    "id": "Pattern",
    "init": {
      "@type": "Optional",
      "@class": "Expression"
    },
    "definite": "xsd:boolean"
  },
  {
    "@type": "Class",
    "@id": "VariableDeclarationOrExpression"
  },
  {
    "@type": "Class",
    "@id": "ForInStatement",
    "@inherits": [
      "Statement",
      "ModuleItem",
      "Node",
      "HasSpan"
    ],
    "left": {
      "@type": "Class",
      "@id": "VariableDeclarationOrPattern"
    },
    "right": "Expression",
    "body": "Statement"
  },
  {
    "@type": "Class",
    "@id": "VariableDeclarationOrPattern"
  },
  {
    "@type": "Class",
    "@id": "ForOfStatement",
    "@inherits": [
      "Statement",
      "ModuleItem",
      "Node",
      "HasSpan"
    ],
    "await": {
      "@type": "Optional",
      "@class": "Span"
    },
    "left": {
      "@type": "Class",
      "@id": "VariableDeclarationOrPattern"
    },
    "right": "Expression",
    "body": "Statement"
  },
  {
    "@type": "Class",
    "@id": "VariableDeclarationOrPattern"
  },
  {
    "@type": "Class",
    "@id": "Declaration"
  },
  {
    "@type": "Class",
    "@id": "ClassDeclaration",
    "@inherits": [
      "Declaration",
      "Statement",
      "ModuleItem",
      "Class",
      "Node"
    ],
    "identifier": "Identifier",
    "declare": "xsd:boolean"
  },
  {
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
  },
  {
    "@type": "Class",
    "@id": "ClassMember"
  },
  {
    "@type": "Class",
    "@id": "Constructor",
    "@inherits": [
      "ClassMember",
      "Node",
      "HasSpan"
    ],
    "key": "PropertyName",
    "params": {
      "@type": "List",
      "@class": "TsParameterPropertyOrParam"
    },
    "body": {
      "@type": "Optional",
      "@class": "BlockStatement"
    },
    "accessibility": {
      "@type": "Optional",
      "@class": "Accessibility"
    },
    "isOptional": "xsd:boolean"
  },
  {
    "@type": "Class",
    "@id": "TsParameterProperty",
    "@inherits": [
      "TsParameterPropertyOrParam",
      "Node",
      "HasSpan",
      "HasDecorator"
    ],
    "accessibility": {
      "@type": "Optional",
      "@class": "Accessibility"
    },
    "override": "xsd:boolean",
    "readonly": "xsd:boolean",
    "param": "TsParameterPropertyParameter"
  },
  {
    "@type": "Enum",
    "@id": "Accessibility",
    "@value": [
      "public",
      "protected",
      "private"
    ]
  },
  {
    "@type": "Class",
    "@id": "TsParameterPropertyParameter"
  },
  {
    "@type": "Class",
    "@id": "TsParameterPropertyParameter"
  },
  {
    "@type": "Class",
    "@id": "TsParameterPropertyOrParam"
  },
  {
    "@type": "Class",
    "@id": "ClassMethod",
    "@inherits": [
      "ClassMember",
      "ClassMethodBase"
    ],
    "key": "PropertyName"
  },
  {
    "@type": "Class",
    "@id": "ClassMethodBase",
    "@inherits": [
      "Node",
      "HasSpan"
    ],
    "function": "Fn",
    "kind": "MethodKind",
    "isStatic": "xsd:boolean",
    "accessibility": {
      "@type": "Optional",
      "@class": "Accessibility"
    },
    "isAbstract": "xsd:boolean",
    "isOptional": "xsd:boolean",
    "isOverride": "xsd:boolean"
  },
  {
    "@type": "Enum",
    "@id": "MethodKind",
    "@value": [
      "method",
      "getter",
      "setter"
    ]
  },
  {
    "@type": "Class",
    "@id": "PrivateMethod",
    "@inherits": [
      "ClassMember",
      "ClassMethodBase"
    ],
    "key": "PrivateName"
  },
  {
    "@type": "Class",
    "@id": "PrivateName",
    "@inherits": [
      "Expression",
      "ExpressionBase",
      "IdentifierOrPrivateNameOrComputedPropName"
    ],
    "id": "Identifier"
  },
  {
    "@type": "Class",
    "@id": "ClassProperty",
    "@inherits": [
      "ClassMember",
      "ClassPropertyBase"
    ],
    "key": "PropertyName",
    "isAbstract": "xsd:boolean",
    "declare": "xsd:boolean"
  },
  {
    "@type": "Class",
    "@id": "ClassPropertyBase",
    "@inherits": [
      "Node",
      "HasSpan",
      "HasDecorator"
    ],
    "value": {
      "@type": "Optional",
      "@class": "Expression"
    },
    "typeAnnotation": {
      "@type": "Optional",
      "@class": "TsTypeAnnotation"
    },
    "isStatic": "xsd:boolean",
    "accessibility": {
      "@type": "Optional",
      "@class": "Accessibility"
    },
    "isOptional": "xsd:boolean",
    "isOverride": "xsd:boolean",
    "readonly": "xsd:boolean",
    "definite": "xsd:boolean"
  },
  {
    "@type": "Class",
    "@id": "PrivateProperty",
    "@inherits": [
      "ClassMember",
      "ClassPropertyBase"
    ],
    "key": "PrivateName"
  },
  {
    "@type": "Class",
    "@id": "StaticBlock",
    "@inherits": [
      "ClassMember",
      "Node",
      "HasSpan"
    ],
    "body": "BlockStatement"
  },
  {
    "@type": "Class",
    "@id": "ClassMember"
  },
  {
    "@type": "Class",
    "@id": "TsExpressionWithTypeArguments",
    "@inherits": [
      "Node",
      "HasSpan"
    ],
    "expression": "Expression",
    "typeArguments": {
      "@type": "Optional",
      "@class": "TsTypeParameterInstantiation"
    }
  },
  {
    "@type": "Class",
    "@id": "FunctionDeclaration",
    "@inherits": [
      "Declaration",
      "Statement",
      "ModuleItem",
      "Fn"
    ],
    "identifier": "Identifier",
    "declare": "xsd:boolean"
  },
  {
    "@type": "Class",
    "@id": "TsInterfaceDeclaration",
    "@inherits": [
      "Declaration",
      "Statement",
      "ModuleItem",
      "Node",
      "HasSpan",
      "DefaultDecl"
    ],
    "id": "Identifier",
    "declare": "xsd:boolean",
    "typeParams": {
      "@type": "Optional",
      "@class": "TsTypeParameterDeclaration"
    },
    "extends": {
      "@type": "List",
      "@class": "TsExpressionWithTypeArguments"
    },
    "body": "TsInterfaceBody"
  },
  {
    "@type": "Class",
    "@id": "TsInterfaceBody",
    "@inherits": [
      "Node",
      "HasSpan"
    ],
    "body": {
      "@type": "List",
      "@class": "TsTypeElement"
    }
  },
  {
    "@type": "Class",
    "@id": "TsTypeAliasDeclaration",
    "@inherits": [
      "Declaration",
      "Statement",
      "ModuleItem",
      "Node",
      "HasSpan"
    ],
    "declare": "xsd:boolean",
    "id": "Identifier",
    "typeParams": {
      "@type": "Optional",
      "@class": "TsTypeParameterDeclaration"
    },
    "typeAnnotation": "TsType"
  },
  {
    "@type": "Class",
    "@id": "TsEnumDeclaration",
    "@inherits": [
      "Declaration",
      "Statement",
      "ModuleItem",
      "Node",
      "HasSpan"
    ],
    "declare": "xsd:boolean",
    "isConst": "xsd:boolean",
    "id": "Identifier",
    "members": {
      "@type": "List",
      "@class": "TsEnumMember"
    }
  },
  {
    "@type": "Class",
    "@id": "TsEnumMember",
    "@inherits": [
      "Node",
      "HasSpan"
    ],
    "id": "TsEnumMemberId",
    "init": {
      "@type": "Optional",
      "@class": "Expression"
    }
  },
  {
    "@type": "Class",
    "@id": "TsEnumMemberId"
  },
  {
    "@type": "Class",
    "@id": "TsEnumMemberId"
  },
  {
    "@type": "Class",
    "@id": "TsModuleDeclaration",
    "@inherits": [
      "Declaration",
      "Statement",
      "ModuleItem",
      "Node",
      "HasSpan"
    ],
    "declare": "xsd:boolean",
    "global": "xsd:boolean",
    "id": "TsModuleName",
    "body": {
      "@type": "Optional",
      "@class": "TsNamespaceBody"
    }
  },
  {
    "@type": "Class",
    "@id": "TsModuleName"
  },
  {
    "@type": "Class",
    "@id": "TsModuleName"
  },
  {
    "@type": "Class",
    "@id": "TsNamespaceBody"
  },
  {
    "@type": "Class",
    "@id": "TsModuleBlock",
    "@inherits": [
      "TsNamespaceBody",
      "Node",
      "HasSpan"
    ],
    "body": {
      "@type": "List",
      "@class": "ModuleItem"
    }
  },
  {
    "@type": "Class",
    "@id": "TsNamespaceDeclaration",
    "@inherits": [
      "TsNamespaceBody",
      "Node",
      "HasSpan"
    ],
    "declare": "xsd:boolean",
    "global": "xsd:boolean",
    "id": "Identifier",
    "body": "TsNamespaceBody"
  },
  {
    "@type": "Class",
    "@id": "TsNamespaceBody"
  },
  {
    "@type": "Class",
    "@id": "Declaration"
  },
  {
    "@type": "Class",
    "@id": "ExpressionStatement",
    "@inherits": [
      "Statement",
      "ModuleItem",
      "Node",
      "HasSpan"
    ],
    "expression": "Expression"
  },
  {
    "@type": "Class",
    "@id": "Statement"
  },
  {
    "@type": "Class",
    "@id": "UnaryExpression",
    "@inherits": [
      "Expression",
      "ExpressionBase"
    ],
    "operator": "UnaryOperator",
    "argument": "Expression"
  },
  {
    "@type": "Enum",
    "@id": "UnaryOperator",
    "@value": [
      "-",
      "+",
      "!",
      "~",
      "typeof",
      "void",
      "delete"
    ]
  },
  {
    "@type": "Class",
    "@id": "UpdateExpression",
    "@inherits": [
      "Expression",
      "ExpressionBase"
    ],
    "operator": "UpdateOperator",
    "prefix": "xsd:boolean",
    "argument": "Expression"
  },
  {
    "@type": "Enum",
    "@id": "UpdateOperator",
    "@value": [
      "++",
      "--"
    ]
  },
  {
    "@type": "Class",
    "@id": "BinaryExpression",
    "@inherits": [
      "Expression",
      "ExpressionBase"
    ],
    "operator": "BinaryOperator",
    "left": "Expression",
    "right": "Expression"
  },
  {
    "@type": "Enum",
    "@id": "BinaryOperator",
    "@value": [
      "==",
      "!=",
      "===",
      "!==",
      "<",
      "<=",
      ">",
      ">=",
      "<<",
      ">>",
      ">>>",
      "+",
      "-",
      "*",
      "/",
      "%",
      "|",
      "^",
      "&",
      "||",
      "&&",
      "in",
      "instanceof",
      "**",
      "??"
    ]
  },
  {
    "@type": "Class",
    "@id": "AssignmentExpression",
    "@inherits": [
      "Expression",
      "ExpressionBase"
    ],
    "operator": "AssignmentOperator",
    "left": {
      "@type": "Class",
      "@id": "ExpressionOrPattern"
    },
    "right": "Expression"
  },
  {
    "@type": "Enum",
    "@id": "AssignmentOperator",
    "@value": [
      "=",
      "+=",
      "-=",
      "*=",
      "/=",
      "%=",
      "<<=",
      ">>=",
      ">>>=",
      "|=",
      "^=",
      "&=",
      "**=",
      "&&=",
      "||=",
      "??="
    ]
  },
  {
    "@type": "Class",
    "@id": "ExpressionOrPattern"
  },
  {
    "@type": "Class",
    "@id": "MemberExpression",
    "@inherits": [
      "Expression",
      "ExpressionBase",
      "MemberExpressionOrOptionalChainingCall"
    ],
    "object": "Expression",
    "property": {
      "@type": "Class",
      "@id": "IdentifierOrPrivateNameOrComputedPropName"
    }
  },
  {
    "@type": "Class",
    "@id": "IdentifierOrPrivateNameOrComputedPropName"
  },
  {
    "@type": "Class",
    "@id": "SuperPropExpression",
    "@inherits": [
      "Expression",
      "ExpressionBase"
    ],
    "obj": "Super",
    "property": {
      "@type": "Class",
      "@id": "IdentifierOrComputedPropName"
    }
  },
  {
    "@type": "Class",
    "@id": "Super",
    "@inherits": [
      "Node",
      "HasSpan"
    ]
  },
  {
    "@type": "Class",
    "@id": "IdentifierOrComputedPropName"
  },
  {
    "@type": "Class",
    "@id": "ConditionalExpression",
    "@inherits": [
      "Expression",
      "ExpressionBase"
    ],
    "test": "Expression",
    "consequent": "Expression",
    "alternate": "Expression"
  },
  {
    "@type": "Class",
    "@id": "CallExpression",
    "@inherits": [
      "Expression",
      "ExpressionBase"
    ],
    "callee": {
      "@type": "Class",
      "@id": "SuperOrImportOrExpression"
    },
    "arguments": {
      "@type": "List",
      "@class": "Argument"
    },
    "typeArguments": {
      "@type": "Optional",
      "@class": "TsTypeParameterInstantiation"
    }
  },
  {
    "@type": "Class",
    "@id": "Import",
    "@inherits": [
      "SuperOrImportOrExpression",
      "Node",
      "HasSpan"
    ]
  },
  {
    "@type": "Class",
    "@id": "SuperOrImportOrExpression"
  },
  {
    "@type": "Class",
    "@id": "Argument",
    "@inherits": [],
    "spread": {
      "@type": "Optional",
      "@class": "Span"
    },
    "expression": "Expression"
  },
  {
    "@type": "Class",
    "@id": "NewExpression",
    "@inherits": [
      "Expression",
      "ExpressionBase"
    ],
    "callee": "Expression",
    "arguments": {
      "@type": "List",
      "@class": "Argument"
    },
    "typeArguments": {
      "@type": "Optional",
      "@class": "TsTypeParameterInstantiation"
    }
  },
  {
    "@type": "Class",
    "@id": "SequenceExpression",
    "@inherits": [
      "Expression",
      "ExpressionBase"
    ],
    "expressions": {
      "@type": "List",
      "@class": "Expression"
    }
  },
  {
    "@type": "Class",
    "@id": "Literal"
  },
  {
    "@type": "Class",
    "@id": "NullLiteral",
    "@inherits": [
      "Literal",
      "Expression",
      "Node",
      "HasSpan"
    ]
  },
  {
    "@type": "Class",
    "@id": "RegExpLiteral",
    "@inherits": [
      "Literal",
      "Expression",
      "Node",
      "HasSpan"
    ],
    "pattern": "xsd:string",
    "flags": "xsd:string"
  },
  {
    "@type": "Class",
    "@id": "JSXText",
    "@inherits": [
      "Literal",
      "Expression",
      "Node",
      "HasSpan",
      "JSXElementChild"
    ],
    "value": "xsd:string",
    "raw": "xsd:string"
  },
  {
    "@type": "Class",
    "@id": "Literal"
  },
  {
    "@type": "Class",
    "@id": "TemplateLiteral",
    "@inherits": [
      "Expression",
      "ExpressionBase"
    ],
    "expressions": {
      "@type": "List",
      "@class": "Expression"
    },
    "quasis": {
      "@type": "List",
      "@class": "TemplateElement"
    }
  },
  {
    "@type": "Class",
    "@id": "TaggedTemplateExpression",
    "@inherits": [
      "Expression",
      "ExpressionBase"
    ],
    "tag": "Expression",
    "typeParameters": {
      "@type": "Optional",
      "@class": "TsTypeParameterInstantiation"
    },
    "template": "TemplateLiteral"
  },
  {
    "@type": "Class",
    "@id": "ArrowFunctionExpression",
    "@inherits": [
      "Expression",
      "ExpressionBase"
    ],
    "params": {
      "@type": "List",
      "@class": "Pattern"
    },
    "body": {
      "@type": "Class",
      "@id": "BlockStatementOrExpression"
    },
    "async": "xsd:boolean",
    "generator": "xsd:boolean",
    "typeParameters": {
      "@type": "Optional",
      "@class": "TsTypeParameterDeclaration"
    },
    "returnType": {
      "@type": "Optional",
      "@class": "TsTypeAnnotation"
    }
  },
  {
    "@type": "Class",
    "@id": "BlockStatementOrExpression"
  },
  {
    "@type": "Class",
    "@id": "ClassExpression",
    "@inherits": [
      "Expression",
      "Class",
      "ExpressionBase",
      "DefaultDecl"
    ],
    "identifier": {
      "@type": "Optional",
      "@class": "Identifier"
    }
  },
  {
    "@type": "Class",
    "@id": "YieldExpression",
    "@inherits": [
      "Expression",
      "ExpressionBase"
    ],
    "argument": {
      "@type": "Optional",
      "@class": "Expression"
    },
    "delegate": "xsd:boolean"
  },
  {
    "@type": "Class",
    "@id": "MetaProperty",
    "@inherits": [
      "Expression",
      "Node",
      "HasSpan"
    ],
    "kind": {
      "@type": "Enum",
      "@id": "new.targetOrimport.meta",
      "@value": [
        "new.target",
        "import.meta"
      ]
    }
  },
  {
    "@type": "Class",
    "@id": "AwaitExpression",
    "@inherits": [
      "Expression",
      "ExpressionBase"
    ],
    "argument": "Expression"
  },
  {
    "@type": "Class",
    "@id": "ParenthesisExpression",
    "@inherits": [
      "Expression",
      "ExpressionBase"
    ],
    "expression": "Expression"
  },
  {
    "@type": "Class",
    "@id": "JSXMemberExpression",
    "@inherits": [
      "Expression",
      "Node",
      "JSXObject",
      "JSXElementName"
    ],
    "object": "JSXObject",
    "property": "Identifier"
  },
  {
    "@type": "Class",
    "@id": "JSXObject"
  },
  {
    "@type": "Class",
    "@id": "JSXObject"
  },
  {
    "@type": "Class",
    "@id": "JSXNamespacedName",
    "@inherits": [
      "Expression",
      "Node",
      "JSXElementName",
      "JSXAttributeName"
    ],
    "namespace": "Identifier",
    "name": "Identifier"
  },
  {
    "@type": "Class",
    "@id": "JSXEmptyExpression",
    "@inherits": [
      "Expression",
      "Node",
      "HasSpan",
      "JSXExpression"
    ]
  },
  {
    "@type": "Class",
    "@id": "JSXElement",
    "@inherits": [
      "Expression",
      "Node",
      "HasSpan",
      "JSXAttrValue",
      "JSXElementChild"
    ],
    "opening": "JSXOpeningElement",
    "children": {
      "@type": "List",
      "@class": "JSXElementChild"
    },
    "closing": {
      "@type": "Optional",
      "@class": "JSXClosingElement"
    }
  },
  {
    "@type": "Class",
    "@id": "JSXOpeningElement",
    "@inherits": [
      "Node",
      "HasSpan"
    ],
    "name": "JSXElementName",
    "attributes": {
      "@type": "List",
      "@class": "JSXAttributeOrSpread"
    },
    "selfClosing": "xsd:boolean",
    "typeArguments": {
      "@type": "Optional",
      "@class": "TsTypeParameterInstantiation"
    }
  },
  {
    "@type": "Class",
    "@id": "JSXElementName"
  },
  {
    "@type": "Class",
    "@id": "JSXElementName"
  },
  {
    "@type": "Class",
    "@id": "JSXAttributeOrSpread"
  },
  {
    "@type": "Class",
    "@id": "JSXAttribute",
    "@inherits": [
      "JSXAttributeOrSpread",
      "Node",
      "HasSpan"
    ],
    "name": "JSXAttributeName",
    "value": {
      "@type": "Optional",
      "@class": "JSXAttrValue"
    }
  },
  {
    "@type": "Class",
    "@id": "JSXAttributeName"
  },
  {
    "@type": "Class",
    "@id": "JSXAttributeName"
  },
  {
    "@type": "Class",
    "@id": "JSXAttrValue"
  },
  {
    "@type": "Class",
    "@id": "JSXExpressionContainer",
    "@inherits": [
      "JSXAttrValue",
      "Node",
      "HasSpan",
      "JSXElementChild"
    ],
    "expression": "JSXExpression"
  },
  {
    "@type": "Class",
    "@id": "JSXExpression"
  },
  {
    "@type": "Class",
    "@id": "JSXExpression"
  },
  {
    "@type": "Class",
    "@id": "JSXFragment",
    "@inherits": [
      "Expression",
      "JSXAttrValue",
      "Node",
      "HasSpan",
      "JSXElementChild"
    ],
    "opening": "JSXOpeningFragment",
    "children": {
      "@type": "List",
      "@class": "JSXElementChild"
    },
    "closing": "JSXClosingFragment"
  },
  {
    "@type": "Class",
    "@id": "JSXOpeningFragment",
    "@inherits": [
      "Node",
      "HasSpan"
    ]
  },
  {
    "@type": "Class",
    "@id": "JSXElementChild"
  },
  {
    "@type": "Class",
    "@id": "JSXSpreadChild",
    "@inherits": [
      "JSXElementChild",
      "Node",
      "HasSpan"
    ],
    "expression": "Expression"
  },
  {
    "@type": "Class",
    "@id": "JSXElementChild"
  },
  {
    "@type": "Class",
    "@id": "JSXClosingFragment",
    "@inherits": [
      "Node",
      "HasSpan"
    ]
  },
  {
    "@type": "Class",
    "@id": "JSXAttrValue"
  },
  {
    "@type": "Class",
    "@id": "JSXAttributeOrSpread"
  },
  {
    "@type": "Class",
    "@id": "JSXClosingElement",
    "@inherits": [
      "Node",
      "HasSpan"
    ],
    "name": "JSXElementName"
  },
  {
    "@type": "Class",
    "@id": "TsTypeAssertion",
    "@inherits": [
      "Expression",
      "ExpressionBase"
    ],
    "expression": "Expression",
    "typeAnnotation": "TsType"
  },
  {
    "@type": "Class",
    "@id": "TsConstAssertion",
    "@inherits": [
      "Expression",
      "ExpressionBase"
    ],
    "expression": "Expression"
  },
  {
    "@type": "Class",
    "@id": "TsNonNullExpression",
    "@inherits": [
      "Expression",
      "ExpressionBase"
    ],
    "expression": "Expression"
  },
  {
    "@type": "Class",
    "@id": "TsAsExpression",
    "@inherits": [
      "Expression",
      "ExpressionBase"
    ],
    "expression": "Expression",
    "typeAnnotation": "TsType"
  },
  {
    "@type": "Class",
    "@id": "TsSatisfiesExpression",
    "@inherits": [
      "Expression",
      "ExpressionBase"
    ],
    "expression": "Expression",
    "typeAnnotation": "TsType"
  },
  {
    "@type": "Class",
    "@id": "TsInstantiation",
    "@inherits": [
      "Expression",
      "Node",
      "HasSpan"
    ],
    "expression": "Expression",
    "typeArguments": "TsTypeParameterInstantiation"
  },
  {
    "@type": "Class",
    "@id": "OptionalChainingExpression",
    "@inherits": [
      "Expression",
      "ExpressionBase"
    ],
    "questionDotToken": "Span",
    "base": {
      "@type": "Class",
      "@id": "MemberExpressionOrOptionalChainingCall"
    }
  },
  {
    "@type": "Class",
    "@id": "OptionalChainingCall",
    "@inherits": [
      "MemberExpressionOrOptionalChainingCall",
      "ExpressionBase"
    ],
    "callee": "Expression",
    "arguments": {
      "@type": "List",
      "@class": "ExprOrSpread"
    },
    "typeArguments": {
      "@type": "Optional",
      "@class": "TsTypeParameterInstantiation"
    }
  },
  {
    "@type": "Class",
    "@id": "MemberExpressionOrOptionalChainingCall"
  },
  {
    "@type": "Class",
    "@id": "Expression"
  },
  {
    "@type": "Class",
    "@id": "Property"
  },
  {
    "@type": "Class",
    "@id": "KeyValueProperty",
    "@inherits": [
      "Property",
      "SpreadElementOrProperty",
      "PropBase"
    ],
    "value": "Expression"
  },
  {
    "@type": "Class",
    "@id": "PropBase",
    "@inherits": [
      "Node"
    ],
    "key": "PropertyName"
  },
  {
    "@type": "Class",
    "@id": "AssignmentProperty",
    "@inherits": [
      "Property",
      "SpreadElementOrProperty",
      "Node"
    ],
    "key": "Identifier",
    "value": "Expression"
  },
  {
    "@type": "Class",
    "@id": "GetterProperty",
    "@inherits": [
      "Property",
      "SpreadElementOrProperty",
      "PropBase",
      "HasSpan"
    ],
    "typeAnnotation": {
      "@type": "Optional",
      "@class": "TsTypeAnnotation"
    },
    "body": {
      "@type": "Optional",
      "@class": "BlockStatement"
    }
  },
  {
    "@type": "Class",
    "@id": "SetterProperty",
    "@inherits": [
      "Property",
      "SpreadElementOrProperty",
      "PropBase",
      "HasSpan"
    ],
    "param": "Pattern",
    "body": {
      "@type": "Optional",
      "@class": "BlockStatement"
    }
  },
  {
    "@type": "Class",
    "@id": "MethodProperty",
    "@inherits": [
      "Property",
      "SpreadElementOrProperty",
      "PropBase",
      "Fn"
    ]
  },
  {
    "@type": "Class",
    "@id": "Property"
  },
  {
    "@type": "Class",
    "@id": "SpreadElementOrProperty"
  },
  {
    "@type": "Class",
    "@id": "ExportDeclaration",
    "@inherits": [
      "ModuleDeclaration",
      "ModuleItem",
      "Node",
      "HasSpan"
    ],
    "declaration": "Declaration"
  },
  {
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
  },
  {
    "@type": "Class",
    "@id": "ExportSpecifier"
  },
  {
    "@type": "Class",
    "@id": "ExportNamespaceSpecifier",
    "@inherits": [
      "ExportSpecifier",
      "Node",
      "HasSpan"
    ],
    "name": "ModuleExportName"
  },
  {
    "@type": "Class",
    "@id": "ExportDefaultSpecifier",
    "@inherits": [
      "ExportSpecifier",
      "Node",
      "HasSpan"
    ],
    "exported": "Identifier"
  },
  {
    "@type": "Class",
    "@id": "NamedExportSpecifier",
    "@inherits": [
      "ExportSpecifier",
      "Node",
      "HasSpan"
    ],
    "orig": "ModuleExportName",
    "exported": {
      "@type": "Optional",
      "@class": "ModuleExportName"
    },
    "isTypeOnly": "xsd:boolean"
  },
  {
    "@type": "Class",
    "@id": "ExportSpecifier"
  },
  {
    "@type": "Class",
    "@id": "ExportDefaultDeclaration",
    "@inherits": [
      "ModuleDeclaration",
      "ModuleItem",
      "Node",
      "HasSpan"
    ],
    "decl": "DefaultDecl"
  },
  {
    "@type": "Class",
    "@id": "DefaultDecl"
  },
  {
    "@type": "Class",
    "@id": "DefaultDecl"
  },
  {
    "@type": "Class",
    "@id": "ExportDefaultExpression",
    "@inherits": [
      "ModuleDeclaration",
      "ModuleItem",
      "Node",
      "HasSpan"
    ],
    "expression": "Expression"
  },
  {
    "@type": "Class",
    "@id": "ExportAllDeclaration",
    "@inherits": [
      "ModuleDeclaration",
      "ModuleItem",
      "Node",
      "HasSpan"
    ],
    "source": "StringLiteral",
    "asserts": {
      "@type": "Optional",
      "@class": "ObjectExpression"
    }
  },
  {
    "@type": "Class",
    "@id": "TsImportEqualsDeclaration",
    "@inherits": [
      "ModuleDeclaration",
      "ModuleItem",
      "Node",
      "HasSpan"
    ],
    "declare": "xsd:boolean",
    "isExport": "xsd:boolean",
    "isTypeOnly": "xsd:boolean",
    "id": "Identifier",
    "moduleRef": "TsModuleReference"
  },
  {
    "@type": "Class",
    "@id": "TsModuleReference"
  },
  {
    "@type": "Class",
    "@id": "TsExternalModuleReference",
    "@inherits": [
      "TsModuleReference",
      "Node",
      "HasSpan"
    ],
    "expression": "StringLiteral"
  },
  {
    "@type": "Class",
    "@id": "TsModuleReference"
  },
  {
    "@type": "Class",
    "@id": "Expression"
  },
  {
    "@type": "Class",
    "@id": "TsExportAssignment",
    "@inherits": [
      "ModuleDeclaration",
      "ModuleItem",
      "Node",
      "HasSpan"
    ],
    "expression": "Expression"
  },
  {
    "@type": "Class",
    "@id": "TsNamespaceExportDeclaration",
    "@inherits": [
      "ModuleDeclaration",
      "ModuleItem",
      "Node",
      "HasSpan"
    ],
    "id": "Identifier"
  },
  {
    "@type": "Class",
    "@id": "ModuleDeclaration"
  },
  {
    "@type": "Class",
    "@id": "ModuleItem"
  }
]