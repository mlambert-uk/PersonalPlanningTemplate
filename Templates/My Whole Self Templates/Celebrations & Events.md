---
Class: Goal
---
<%*
let title = tp.file.title

if (title.startsWith("Untitled")) {
	title = await tp.system.prompt("Goal title")
	await tp.file.rename(title)
}
%>

>[!event] 
What am I looking forward to?


