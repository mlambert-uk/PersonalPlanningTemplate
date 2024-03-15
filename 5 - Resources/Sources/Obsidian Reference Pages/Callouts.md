Types you can use in callouts:
- info
- todo
- tip (hint, important)
- success (check, done)
- question (help, faq)
- warning (caution, attention)
- failure (fail, missing)
- danger (error)
- bug
- example
- quote (cite)

Syntax:
````markdown
>[!type]{+} {Header}

Where:
+ = Collapsable panel
Header = Custom header to replace the type entered
````

>[!info]+
> - info

>[!todo]+
> - todo

>[!tip]+
> - tip
> - hint
> - important

>[!success]+
> - success
> - check
> - done

>[!question]+
> - question
> - help
> - faq

>[!warning]+
> - warning
> - caution
> - attention

>[!failure]+
> - failure
> - fail
> - missing

>[!danger]+
> - danger
> - error

>[!bug]+
> - bug

>[!example]+
> - example

>[!quote]+
> - quote
> - cite

Custom callouts - In css add a block like the following:
````css
.callout[data-callout="custom-callout-type"] {
	--callout-color: var(colorvar) ;
	--callout-icon: lucide-alert-circle ;
}

````

Callouts
>[!tip]
>Some block text

>[!question] Custom Label
>Some block text

>[!example]+ Collapsible
>Some block text

# My Custom Callouts

> [!code]
> ````js
> var x = "Hello World";
> console.log(x);
> ````

> [!career]
> Some text

> [!finances]
> Some text

> [!health]
> Some text

> [!fitness]
 Some text

> [!moonshot]
> Some Text

> [!hobbies]
> Some text

> [!relationships]
> Some text

> [!mentalhealth]
> Some Text

> [!spirituality]
> Some text

> [!brand]
> Some text

> [!development]
> Some text






