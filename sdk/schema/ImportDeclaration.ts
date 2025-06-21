export const ImportDeclaration = {
    "@type": "Class",
    "@id": "ImportDeclaration",
    "specifiers": {
        "@type": "List",
        "@class": "Node"
    },
    "source": "Node",
    "attributes": {
        "@type": "List",
        "@class": "Node"
    },
    "importKind": {
        "@type": "Enum",
        "@id": "ImportOrExportKind",
        "@value": ["value", "type"]
    }
}; 