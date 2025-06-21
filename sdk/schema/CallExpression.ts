export const CallExpression = {
    "@type": "Class",
    "@id": "CallExpression",
    "@inherits": "Span",
    "callee": "Node",
    "arguments": {
        "@type": "List",
        "@class": "Node"
    },
    "optional": "xsd:boolean",
    "typeArguments": {
        "@type": "Optional",
        "@class": "Node"
    }
}; 