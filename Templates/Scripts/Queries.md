# Work Projects
## Active Projects
```dataview
TABLE without id file.link as "Project", Type, Status, Priority
FROM "4 - Work Projects"
SORT choice(Priority = "❗Critical",1, choice(Priority = "High",2,choice(Priority = "Normal",3,choice(Priority = "Low",4,5)))) ASC
SORT choice(Type = "🔥On", 1, choice(Type = "♻️Ongoing", 2, choice(Type = "〰️Simmering", 3, choice(Type = "💤Sleeping",4,5)))) ASC
```
## Tasks
```dataview
LIST
FROM "4 - Work Projects"
WHERE !contains(file.name,"Template") AND
 any(file.tasks, (t) => !t.fullyCompleted)
```
# Personal Projects
## Active Projects
```dataview
TABLE without id file.link as "Project", Type, Status, Priority
FROM "3 - Personal Projects"
SORT choice(Priority = "❗Critical",1, choice(Priority = "High",2,choice(Priority = "Normal",3,choice(Priority = "Low",4,5)))) ASC
SORT choice(Type = "🔥On", 1, choice(Type = "♻️Ongoing", 2, choice(Type = "〰️Simmering", 3, choice(Type = "💤Sleeping",4,5)))) ASC
```
## Tasks
```dataview
LIST
FROM "3 - Personal Projects"
WHERE !contains(file.name,"Template") AND
 any(file.tasks, (t) => !t.fullyCompleted)
```
# Unsorted Notes
```dataview
LIST
FROM "+ New Notes"
```

# Recent Files
- 🗄️ Recent file updates
 `$=dv.list(dv.pages('').limit(10).file.link)`

# Vault stats
- 〽️ Stats
	-  File Count: `$=dv.pages().length`
	-  Personal recipes: `$=dv.pages('"4 - Resources/Recipes"').length`

# Journal
## `=link(dateformat(date(today), "yyyy-MM"))`
## `=link(dateformat(date(today), "yyyy-'W'WW"))`
## `=link(dateformat(date(today), "yyyy-MM-dd"))`

# All Tasks
```dataview
LIST
WHERE !contains(file.name,"Template") AND
 any(file.tasks, (t) => !t.fullyCompleted)
```
