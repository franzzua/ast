export const Class = {
    "@type": "Class",
    "@id": "Class",
    "type": {
        "@type": "Enum",
        "@id": "ClassType",
        "@value": ["ClassDeclaration", "ClassExpression"]
    },
    "id": {
        "@type": "Optional",
        "@class": "Node"
    },
    "superClass": {
        "@type": "Optional",
        "@class": "Node"
    },
    "body": "Node",
    "decorators": {
        "@type": "Set",
        "@class": "Node"
    },
    "typeParameters": {
        "@type": "Optional",
        "@class": "Node"
    },
    "superTypeArguments": {
        "@type": "Optional",
        "@class": "Node"
    },
    "implements": {
        "@type": "Set",
        "@class": "Node"
    },
    "abstract": "xsd:boolean",
    "declare": "xsd:boolean"
}; 