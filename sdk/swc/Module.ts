export const Module = {
  "@type": "Class",
  "@id": "Module",
  "@inherits": [
    "Node",
    "HasSpan",
    "HasInterpreter"
  ],
  "body": {
    "@type": "List",
    "@class": "ModuleItem"
  }
}