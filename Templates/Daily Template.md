---
Class: [Daily]
Mood: 😊
Exercise: false
---
[[0 - Journal/Daily/<%tp.date.now("YYYY-MM-DD",-1,tp.file.title,"YYYY-MM-DD")%>|Yesterday]] <-> [[0 - Journal/Daily/<%tp.date.now("YYYY-MM-DD",1,tp.file.title,"YYYY-MM-DD")%>|Tomorrow]]
<%*
let title = tp.file.title
let filename = moment(title).format("YYYY_MM_MMM_DD").toUpperCase()
let path = "https://actionforhappiness.org/sites/default/files/styles/daily_message_convo_overlay/public/AFH_ACTION_" + filename + ".png"
%>
# <% tp.date.now("dddd, [the] Do [day of] MMMM, YYYY") %>
Week Summary: [[0 - Journal/1 - Weekly/<%moment(tp.file.title).format("gggg-[W]ww")%>|<%moment(tp.file.title).format("gggg-[W]ww")%>]]
Monthly Plan / Review : [[0 - Journal/2 - Monthly/<%moment(tp.file.title).format("YYYY-MM")%>|<%moment(tp.file.title).format("YYYY-MM")%>]]
<% tp.web.daily_quote() %>

<%* tR += "![" + filename + "|200](" + path + ")" %>
### Todays quests
- 
### Journal
- 