export const ImportDeclaration = {
    "@type": "Class",
    "@id": "ImportDeclaration",
    "@inherits": [
        "Statement"
    ],
    "specifiers": {
        "@type": "List",
        "@class": "ImportDeclarationSpecifier"
    },
    "attributes": {
        "@type": "List",
        "@class": "xsd:string"
    },
    "source": "Literal",
    "importKind": {
        "@type": "Enum",
        "@id": "ImportKind",
        "@value": [
            "value",
            "type"
        ]
    }
};
export const ImportDeclarationSpecifier = {
    "@type": "Class",
    "@id": "ImportDeclarationSpecifier",
    "@abstract": []
};
export const ImportSpecifier = {
    "@type": "Class",
    "@id": "ImportSpecifier",
    "@inherits": [
        "ImportDeclarationSpecifier"
    ],
    "imported": "Identifier",
    "local": "Identifier",
    "importKind": "ImportKind"
};
export const ImportDefaultSpecifier = {
    "@type": "Class",
    "@id": "ImportDefaultSpecifier",
    "@inherits": [
        "ImportDeclarationSpecifier"
    ],
    "local": "Identifier"
};
export const ImportNamespaceSpecifier = {
    "@type": "Class",
    "@id": "ImportNamespaceSpecifier",
    "@inherits": [
        "ImportDeclarationSpecifier"
    ],
    "local": "Identifier"
};

//# sourceMappingURL=ImportDeclaration.js.map