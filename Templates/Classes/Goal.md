---
limit: 100
mapWithTag: false
icon: target
tagNames: 
excludes: 
extends: 
version: "2.7"
fields:
  - id: ZosJQH
    name: status
    options:
      valuesList:
        "1": 💡Idea
        "2": 🔎Research
        "3": ⚒️In progress
        "4": 🤚On hold
        "5": ✅Completed
        "6": ❌Cancelled
        "7": 🟢Ready
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    type: Select
    path: ""
  - name: Due Date
    type: Date
    options:
      dateShiftInterval: 1 day
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: false
      linkPath: ""
    path: ""
    id: ZCEviY
filesPaths: 
bookmarksGroups: 
savedViews: []
favoriteView: 
fieldsOrder:
  - ZosJQH
  - ZCEviY
---
status:: {"type":"Select","options":{"valuesList":{"1":"💡Idea","2":"🔎Research","3":"⚒️In progress","4":"🤚On hold","5":"✅Completed","6":"❌Cancelled"},"sourceType":"ValuesList","valuesListNotePath":"","valuesFromDVQuery":""}}
tags: #goal
