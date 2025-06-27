export const JSXElement = {
  "@type": "Class",
  "@id": "JSXElement",
  "@inherits": [
    "Expression",
    "Node",
    "HasSpan",
    "JSXAttrValue",
    "JSXElementChild"
  ],
  "opening": "JSXOpeningElement",
  "children": {
    "@type": "List",
    "@class": "JSXElementChild"
  },
  "closing": {
    "@type": "Optional",
    "@class": "JSXClosingElement"
  }
}