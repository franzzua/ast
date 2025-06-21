export const ExportNamedDeclaration = {
    "@type": "Class",
    "@id": "ExportNamedDeclaration",
    "declaration": {
        "@type": "Optional",
        "@class": "Node"
    },
    "specifiers": {
        "@type": "List",
        "@class": "Node"
    },
    "source": {
        "@type": "Optional",
        "@class": "Node"
    },
    "attributes": {
        "@type": "List",
        "@class": "Node"
    },
    "exportKind": {
        "@type": "Enum",
        "@id": "ImportOrExportKind",
        "@value": ["value", "type"]
    }
}; 