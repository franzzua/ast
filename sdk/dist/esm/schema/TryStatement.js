export const TryStatement = {
    "@type": "Class",
    "@id": "TryStatement",
    "@inherits": [
        "Statement"
    ],
    "block": "BlockStatement",
    "handler": {
        "@type": "Optional",
        "@class": "CatchClause"
    },
    "finalizer": {
        "@type": "Optional",
        "@class": "BlockStatement"
    }
};
export const CatchClause = {
    "@type": "Class",
    "@id": "CatchClause",
    "param": {
        "@type": "Optional",
        "@class": "Pattern"
    },
    "body": "BlockStatement"
};

//# sourceMappingURL=TryStatement.js.map