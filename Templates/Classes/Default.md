---
limit: 100
mapWithTag: false
icon: help
tagNames: 
excludes: 
extends: 
version: "2.0"
fields:
  - id: R2kCNC
    name: Class
    options:
      valuesList: {}
      sourceType: ValuesFromDVQuery
      valuesListNotePath: ""
      valuesFromDVQuery: dv.pages('"Templates/Classes"').map(p => p.file.name)
    type: Select
    path: ""
---

Class:: {"type":"Select","options":{"valuesList":{},"sourceType":"ValuesFromDVQuery","valuesListNotePath":"","valuesFromDVQuery":"dv.pages('\"Templates/Classes\"').map(p => p.file.name)"}}