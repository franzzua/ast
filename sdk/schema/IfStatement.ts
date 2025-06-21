import { Expression } from ".";
import { Statement } from ".";

export const IfStatement = {
    "@type": "Class",
    "@id": "IfStatement",
    "@inherits": "Span",
    "test": "Expression",
    "consequent": "Statement",
    "alternate": {
        "@type": "Optional",
        "@class": "Statement"
    }
}; 