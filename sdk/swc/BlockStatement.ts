export const BlockStatement = {
  "@type": "Class",
  "@id": "BlockStatement",
  "@inherits": [
    "Node",
    "HasSpan",
    "Statement",
    "ModuleItem",
    "BlockStatementOrExpression"
  ],
  "stmts": {
    "@type": "List",
    "@class": "Statement"
  }
}