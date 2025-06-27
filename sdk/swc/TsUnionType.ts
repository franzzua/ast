export const TsUnionType = {
  "@type": "Class",
  "@id": "TsUnionType",
  "@inherits": [
    "TsUnionOrIntersectionType",
    "TsType",
    "Node",
    "HasSpan"
  ],
  "types": {
    "@type": "List",
    "@class": "TsType"
  }
}