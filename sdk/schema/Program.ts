export const Program = {
    "@type": "Class",
    "@id": "Program",
    "body": {
        "@type": "List",
        "@class": "Node" // Directive | Statement
    },
    "sourceType": {
        "@type": "Enum",
        "@id": "ModuleKind",
        "@value": ["script", "module"]
    },
    "hashbang": {
        "@type": "Optional",
        "@class": "Node" // Hashbang | null
    }
}; 