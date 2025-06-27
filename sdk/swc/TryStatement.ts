export const TryStatement = {
  "@type": "Class",
  "@id": "TryStatement",
  "@inherits": [
    "Statement",
    "ModuleItem",
    "Node",
    "HasSpan"
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
}