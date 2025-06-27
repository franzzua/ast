export const Class = {
    "@type": "Class",
    "@id": "Class",
    "@inherits": [
        "Expression"
    ],
    "id": {
        "@type": "Optional",
        "@class": "Identifier"
    },
    "superClass": {
        "@type": "Optional",
        "@class": "Expression"
    },
    "body": "ClassBody",
    "decorators": {
        "@type": "Set",
        "@class": "Decorator"
    }
};
export const ClassBody = {
    "@type": "Class",
    "@id": "ClassBody",
    "body": {
        "@type": "List",
        "@class": "ClassElement"
    }
};
export const ClassElement = {
    "@type": "Class",
    "@id": "ClassElement",
    "@abstract": []
};
export const Decorator = {
    "@type": "Class",
    "@id": "Decorator",
    "expression": "Expression"
};

//# sourceMappingURL=Class.js.map