## Moonshots
```dataview
TABLE without id file.link As "Goal", status as "Status"
FROM "2 - Goals/Moonshots"
SORT choice(status = "💡Idea", 1, choice(status = "🔎Research", 2, choice(status = "⚒️In progress", 3, choice(status = "🤚On hold",4, choice(status ="✅Completed",5, choice(status = "❌Cancelled", 6,7)))))) ASC
```
## Career & Professional Skills
```dataview
TABLE without id file.link As "Goal", status as "Status"
FROM "2 - Goals/Career & Professional Skills"
WHERE status !="✅Completed"
SORT choice(status = "💡Idea", 1, choice(status = "🔎Research", 2, choice(status = "⚒️In progress", 3, choice(status = "🤚On hold",4, choice(status ="✅Completed",5, choice(status = "❌Cancelled", 6,7)))))) ASC
```
## Finances
```dataview
TABLE without id file.link As "Goal", status as "Status"
FROM "2 - Goals/Finances"
SORT choice(status = "💡Idea", 1, choice(status = "🔎Research", 2, choice(status = "⚒️In progress", 3, choice(status = "🤚On hold",4, choice(status ="✅Completed",5, choice(status = "❌Cancelled", 6,7)))))) ASC
```
## Health & Fitness
```dataview
TABLE without id file.link As "Goal", status as "Status"
FROM "2 - Goals/Health & Fitness"
WHERE status !="✅Completed"
SORT choice(status = "💡Idea", 1, choice(status = "🔎Research", 2, choice(status = "⚒️In progress", 3, choice(status = "🤚On hold",4, choice(status ="✅Completed",5, choice(status = "❌Cancelled", 6,7)))))) ASC
```
## Spiritual & Mental Health
```dataview
TABLE without id file.link As "Goal", status as "Status"
FROM "2 - Goals/Spiritual & Mental Health"
WHERE status != "✅Completed"
SORT choice(status = "💡Idea", 1, choice(status = "🔎Research", 2, choice(status = "⚒️In progress", 3, choice(status = "🤚On hold",4, choice(status ="✅Completed",5, choice(status = "❌Cancelled", 6,7)))))) ASC
```
## Relationships
```dataview
TABLE without id file.link As "Goal", status as "Status"
FROM "2 - Goals/Relationships"
WHERE status != "✅Completed" 
SORT choice(status = "💡Idea", 1, choice(status = "🔎Research", 2, choice(status = "⚒️In progress", 3, choice(status = "🤚On hold",4, choice(status ="✅Completed",5, choice(status = "❌Cancelled", 6,7)))))) ASC
```
## Quality of Life & Hobbies
```dataview
TABLE without id file.link As "Goal", status as "Status"
FROM "2 - Goals/Hobbies & Quality of Life"
WHERE status != "✅Completed" 
SORT choice(status = "💡Idea", 1, choice(status = "🔎Research", 2, choice(status = "⚒️In progress", 3, choice(status = "🤚On hold",4, choice(status ="✅Completed",5, choice(status = "❌Cancelled", 6,7)))))) ASC
```
## Personal Development
```dataview
TABLE without id file.link As "Goal", status as "Status"
FROM "2 - Goals/Personal Development"
WHERE status != "✅Completed" 
SORT choice(status = "💡Idea", 1, choice(status = "🔎Research", 2, choice(status = "⚒️In progress", 3, choice(status = "🤚On hold",4, choice(status ="✅Completed",5, choice(status = "❌Cancelled", 6,7)))))) ASC
```
## Personal Brand
```dataview
TABLE without id file.link As "Goal", status as "Status"
FROM "2 - Goals/Personal Brand"
WHERE status != "✅Completed" 
SORT choice(status = "💡Idea", 1, choice(status = "🔎Research", 2, choice(status = "⚒️In progress", 3, choice(status = "🤚On hold",4, choice(status ="✅Completed",5, choice(status = "❌Cancelled", 6,7)))))) ASC
```
## Celebrations & Events
```dataview
TABLE without id file.link As "Event", status as "Status"
FROM "2 - Goals/Celebrations & Events"
SORT choice(status = "💡Idea", 1, choice(status = "🔎Research", 2, choice(status = "⚒️In progress", 3, choice(status = "🤚On hold",4, choice(status ="✅Completed",5, choice(status = "❌Cancelled", 6,7)))))) ASC
```
## Achievements
```dataview
TABLE without id file.link As "Goal", regexreplace(file.folder, ".*\/([^\/]+)$", "$1") as "Area"
FROM "2 - Goals"
WHERE status = "✅Completed" 
```
