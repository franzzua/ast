export const schema = [
    {
        "@type": "@context",
        "@schema": "http://terminusdb.com/schema/woql#",
        "@base": "terminusdb://woql/data/",
        "xsd": "http://www.w3.org/2001/XMLSchema#",
        "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
        "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
        "terminus": "http://terminusdb.com/schema/terminus#",
        "vio": "http://terminusdb.com/schema/vio#"
    },
    {
        "@type": "Class",
        "@id": "Module",
        "nodes": {
            "@type": "Set",
            "@class": "Node",
        }
    },
    {
        "@type": "Class",
        "@id": "Node",
        "@abstract": []
    },
    {
        "@type": "Class",
        "@id": "Program",
        "@key": {"@type": "Random"},
        '@inherits': "Node",
        "body": {
            "@type": "Set",
            "@class": "Statement"
        },
        "sourceType": "xsd:string"
    },
    {
        "@type": "Class",
        "@id": "Statement",
        '@inherits': "Node",
        "@abstract": []
    },
    {
        "@type": "Class",
        "@id": "ExpressionStatement",
        "@inherits": ["Statement"],
        "expression": {
            "@type": "Optional",
            "@class": "Expression"
        },
        "directive": {
            "@type": "Optional",
            "@class": "xsd:string"
        }
    },
    {
        "@type": "Class",
        "@id": "VariableDeclaration",
        "@inherits": ["Statement"],
        "declarations": {
            "@type": "Set",
            "@class": "VariableDeclarator"
        },
        "kind": {
            "@type": "Enum",
            "@id": "VariableKind",
            "@value": ["var", "let", "const"]
        },
        "declare": "xsd:boolean"
    },
    {
        "@type": "Class",
        "@id": "VariableDeclarator",
        "id": {
            "@type": "Optional",
            "@class": "Identifier"
        },
        "init": {
            "@type": "Optional",
            "@class": "Expression"
        },
        "definite": "xsd:boolean"
    },
    {
        "@type": "Class",
        "@id": "FunctionDeclaration",
        "@inherits": ["Statement"],
        "id": {
            "@type": "Optional",
            "@class": "Identifier"
        },
        "params": {
            "@type": "Set",
            "@class": "Pattern"
        },
        "body": {
            "@type": "Optional",
            "@class": "BlockStatement"
        },
        "generator": "xsd:boolean",
        "async": "xsd:boolean",
        "expression": "xsd:boolean",
        "declare": "xsd:boolean",
        "typeParameters": {
            "@type": "Optional",
            "@class": "Statement"
        },
        "returnType": {
            "@type": "Optional",
            "@class": "Statement"
        }
    },
    {
        "@type": "Class",
        "@id": "BlockStatement",
        "@inherits": ["Statement"],
        "body": {
            "@type": "Set",
            "@class": "Statement"
        }
    },
    {
        "@type": "Class",
        "@id": "Expression",
        "@inherits": ["Node"],
        "@abstract": []
    },
    {
        "@type": "Class",
        "@id": "CallExpression",
        "@inherits": ["Expression"],
        "callee": {
            "@type": "Optional",
            "@class": "FunctionDeclaration"
        },
        "arguments": {
            "@type": "Set",
            "@class": "Expression"
        },
        "optional": {
            "@type": "Optional",
            "@class": "xsd:boolean"
        },
        "typeArguments": {
            "@type": "Optional",
            "@class": "TSTypeParameterInstantiation"
        }
    },
    {
        "@type": "Class",
        "@id": "TSTypeParameterInstantiation",
        "params": {
            "@type": "Set",
            "@class": "TSType"
        }
    },
    {
        "@type": "Class",
        "@id": "BinaryExpression",
        "@inherits": ["Expression"],
        "operator": "xsd:string",
        "left": {
            "@type": "Optional",
            "@class": "Expression"
        },
        "right": {
            "@type": "Optional",
            "@class": "Expression"
        }
    },
    {
        "@type": "Class",
        "@id": "Identifier",
        "@inherits": ["Expression", "Pattern"],
        "name": "xsd:string",
        "typeAnnotation": {
            "@type": "Optional",
            "@class": "TSTypeAnnotation"
        },
        "decorators": {
            "@type": "Set",
            "@class": "Expression"
        },
        "optional": {
            "@type": "Optional",
            "@class": "xsd:boolean"
        },
        "resolved": {
            "@type": "Optional",
            "@class": "Statement"
        },
    },
    {
        "@type": "Class",
        "@id": "Literal",
        "@inherits": ["Expression"],
        "value": "xsd:string",
        "raw": {
            "@type": "Optional",
            "@class": "xsd:string"
        },
    },
    {
        "@type": "Class",
        "@id": "IdentifierPattern",
        "@inherits": ["Pattern"],
        "name": "xsd:string"
    },
    {
        "@type": "Class",
        "@id": "MemberExpression",
        "@inherits": ["Expression"],
        "object": {
            "@type": "Optional",
            "@class": "Expression"
        },
        "property": {
            "@type": "Optional",
            "@class": "Expression"
        },
        "computed": "xsd:boolean",
        "optional": "xsd:boolean",
    },
    {
        "@type": "Class",
        "@id": "AssignmentExpression",
        "@inherits": ["Expression"],
        "operator": "xsd:string",
        "left": {
            "@type": "Optional",
            "@class": "Pattern"
        },
        "right": {
            "@type": "Optional",
            "@class": "Expression"
        }
    },
    {
        "@type": "Class",
        "@id": "ArrowFunctionExpression",
        "@inherits": ["Expression"],
        "params": {
            "@type": "Set",
            "@class": "Pattern"
        },
        "body": {
            "@type": "Optional",
            "@class": "BlockStatement"
        },
        "expression": "xsd:boolean",
        "async": "xsd:boolean"
    },
    {
        "@type": "Class",
        "@id": "Pattern",
        "@abstract": []
    },

    {
        "@type": "Class",
        "@id": "TSTypeAnnotation",
        "typeAnnotation": {
            "@type": "Optional",
            "@class": "TSType"
        }
    },
    {
        "@type": "Class",
        "@id": "TSType",
        "@abstract": []
    },
    {
        "@type": "Class",
        "@id": "TSStringKeyword",
        "@inherits": ["TSType"]
    }
]
