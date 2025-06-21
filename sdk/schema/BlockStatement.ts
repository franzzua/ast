import { Statement } from ".";
import { Directive } from ".";

export const BlockStatement = {
    "@type": "Class",
    "@id": "BlockStatement",
    "@inherits": "Span",
    "body": {
        "@type": "List",
        "@class": {
            "@type": "Choice",
            "@choice": [
                "Directive",
                "Statement"
            ]
        }
    }
}; 