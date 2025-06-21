export const TSModuleDeclaration = {
    "@type": "Class",
    "@id": "TSModuleDeclaration",
    "id": "Node",
    "body": {
        "@type": "Optional",
        "@class": "Node"
    },
    "kind": {
        "@type": "Enum",
        "@id": "TSModuleDeclarationKind",
        "@value": ["global", "module", "namespace"]
    },
    "declare": "xsd:boolean",
    "global": "xsd:boolean"
}; 