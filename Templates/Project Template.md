---
Class: [Project]
Type: 〰️Simmering
Priority: Normal
Status: Idea
---
<%*
let title = tp.file.title

if (title.startsWith("Untitled")) {
	title = await tp.system.prompt("Project title")
	await tp.file.rename(title)
}
%>

>[!Goal] 
What am I trying to achieve with this Project.  Specify any end dates or other criteria in the goal

