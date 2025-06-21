export const VariableDeclaration = {
    "@type": "Class",
    "@id": "VariableDeclaration",
    "declarations": {
        "@type": "List",
        "@class": "Node"
    },
    "kind": {
        "@type": "Enum",
        "@id": "VariableDeclarationKind",
        "@value": ["var", "let", "const", "using", "await using"]
    },
    "declare": "xsd:boolean"
}; 