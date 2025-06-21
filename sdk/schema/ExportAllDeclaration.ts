export const ExportAllDeclaration = {
    "@type": "Class",
    "@id": "ExportAllDeclaration",
    "exported": {
        "@type": "Optional",
        "@class": "Node"
    },
    "source": "Node",
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