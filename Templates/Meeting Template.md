<%*
let title = tp.file.title
let folder = tp.file.folder(false)

if (folder == "Crispin Neads") {
	folder = "Mark Lambert"
}

if (title.startsWith("Untitled")) {
	title = await tp.system.prompt("Title")
	title = tp.date.now("YYMMDD - ") + folder + " - " + title
	await tp.file.rename(title)
}

tR += "---"
%>
Created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
<%* tR += "---" %>

Date: <% tp.date.now("Do MMMM YY")%>

# 🗣️Participants
- [[Mark Lambert]]
- <%* tR += "[[" + folder + "]]" %>
- <%tp.file.cursor(1) %>
# 📅Agenda
1. 
# 📝Notes
