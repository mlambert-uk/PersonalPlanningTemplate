<%*
let title = tp.file.title
if (title.startsWith("Untitled")) {
	title = await tp.system.prompt("Name of the recipe:")
	await tp.file.rename(title)
}

tR += "---"
%>
Created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
Tags: Recipe
<%* tR += "---" %>
Prep time: 
Cooking time: 

## Ingredients

- 

## Method

1. 

#### Source 

