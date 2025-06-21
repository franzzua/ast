export const Function = {
    "@type": "Class",
    "@id": "Function",
    "type": {
        "@type": "Enum",
        "@id": "FunctionType",
        "@value": ["FunctionDeclaration", "FunctionExpression", "TSDeclareFunction", "TSEmptyBodyFunctionExpression"]
    },
    "id": {
        "@type": "Optional",
        "@class": "Node"
    },
    "expression": "xsd:boolean",
    "generator": "xsd:boolean",
    "async": "xsd:boolean",
    "params": {
        "@type": "List",
        "@class": "Node"
    },
    "body": {
        "@type": "Optional",
        "@class": "Node"
    },
    "declare": "xsd:boolean",
    "typeParameters": {
        "@type": "Optional",
        "@class": "Node"
    },
    "returnType": {
        "@type": "Optional",
        "@class": "Node"
    }
}; 