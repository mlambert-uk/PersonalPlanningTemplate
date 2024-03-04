---
limit: 100
mapWithTag: false
icon: layers
tagNames: 
excludes: 
extends: 
version: "2.1"
fields:
  - id: A7qA5Z
    name: Type
    options:
      valuesList:
        "1": 🔥On
        "2": ♻️Ongoing
        "3": 〰️Simmering
        "4": 💤Sleeping
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    type: Select
    path: ""
  - id: H1HMGU
    name: Priority
    options:
      valuesList:
        "1": ❗Urgent
        "2": High
        "3": Normal
        "4": Low
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    type: Select
    path: ""
  - id: 00BscX
    name: Status
    options:
      valuesList:
        "1": Idea
        "2": In Progress
        "3": On Hold
        "4": Completed
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    type: Select
    path: ""
filesPaths: 
bookmarksGroups: 
savedViews: []
favoriteView: 
fieldsOrder:
  - 00BscX
  - H1HMGU
  - A7qA5Z
---

Type:: {"type":"Select","options":{"valuesList":{"1":"🔥On","2":"♻️Ongoing","3":"〰️Simmering","4":"💤Sleeping"},"sourceType":"ValuesList","valuesListNotePath":"","valuesFromDVQuery":""}}
Priority:: {"type":"Select","options":{"valuesList":{"1":"❗Urgent","2":"High","3":"Normal","4":"Low"},"sourceType":"ValuesList","valuesListNotePath":"","valuesFromDVQuery":""}}
Status:: {"type":"Select","options":{"valuesList":{"1":"Idea","2":"In Progress","3":"On Hold","4":"Completed"},"sourceType":"ValuesList","valuesListNotePath":"","valuesFromDVQuery":""}}