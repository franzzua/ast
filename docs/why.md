## Why Do We Use Text Files for Our Code?

It's not a rhetorical question at all. I know, that's how it came to be, but... why do we continue using text files?

You can say that it's very straightforward solution: what you see is what you get. 
But we deal with a few abstraction layers: text and filesystem. All abstractions are leaky. This leads to errors, tricky diffs and performance issues. 
Let's deep dive into storing code as text files.

### Text
Computers operate on binary data, so to represent text they have to use encoding to store text. 
There are so many options: UTF-8 or UTF-16; with BOM or without; CR, LF or CRLF; little-endian or big-endian - these are just the popular ones. 

You can write code in different ways depending on chosen code style. For example, you may prefer classes or functions, it's your freedom.
But if we talk about formatting it looks strange for me: why should we care about empty lines, tabs or spaces, line limits and other insignificant details? 
Thanks all gods, we don't add information about preferred font and color to our codebase, I really don't want to read code in Comic Sans.

Why we can't rely on amazing formatters that could represent code in a proper way?

### Filesystems
Another abstraction layer between code and storage. We have file names, why? We use extensions to distinguish different languages we use, is it the best solution? Obviously, no.
What about restrictions on directory depth and inotify watch limit? Do you know, that when you run your code in docker from mounted folder, your container doesn't see changes in your files? 
Don;t forget, that we can work on different filesystems, and they give us different features. Case-sensitive or not? Hard links and soft links. Permissions. Attributes. All this shit is nor related to our code, at least you can't read about it in your language specification usually.

### Parsing
So many tricks are involved in specifications of our language to support parsing: keywords, brackets, line splitting, indents.
They simplify code reading, of course, but I'm sure there is a better way to do it. These restrictions are required for parsing your code.

Usually parser splits your code by tokens and builds an Abstract Syntax Tree (AST). Then it links identifiers to understand what they are for. 
It's very fast operations and your computer can parse many files in seconds. But not so many as you have in repository, so sometimes IDE need significant time to load your project.

Parsing happens many times: when you open an IDE, when you enter code, when you switch branches, when you compile your code. 
With some languages even dependencies should be parsed (I'm about you, javascript).
We have different assistants to be productive: linters, static analyzers, formatters, language servers and AI agents.
They all read our code file-by-file and parse it. 
Sometimes you have one tool for all these tasks, sometimes they are different.
If so, their parsers can be implemented in different way which can lead to inconsistency: for example many times my WebStorm shows me errors in imports, but vite produces working JS without issues.

### Merging
Everything gets much worse when you work in a team. We use comprehensive software for merging changes, but it works awfully. 
When you move a class into another file - it's a new class. 
When you move a function few lines up or down - it's a new function. 
When you change the name for any identifier - you have changes in all files that use it. 
When two people make changes in one file - conflict arises.

The main problem with this behavior is that our text files don't have sufficient information about code blocks - there are no reliable identifiers, no structure.
When diffing two files, your software can parse both files and check what's changed, statement by statement. 

### Overall
Finally, let's imagine that we develop system for developers where they can write code, read it and collaborate.
Should we use text files as main source of truth? Obviously, no.
It's inconvenient, unreliable and may lead to inconsistency. But what if we parse AST, assign unique ids to code blocks, link identifiers and save it to graph database? 

## AST Version System

I'm working on PoC of CVS that stores AST of TypeScript code in distributed graph database with commits and branches.
Here is a repo: https://github.com/franzzua/ast

How it works? Current approach is very simple and straightforward. 
Provided code is parsed by [oxc](https://github.com/oxc-project/oxc?tab=readme-ov-file#-ast-and-parser). 
As a result I have AST: functions, expressions, calls. 
Then I have to calculate scopes for each block: every function creates scope, so identifiers should be resolved from inner scope to outer.
Then I assign unique id to every node and link corresponding identifiers, so when there is a call to function named `sayHello` I replace it with call to function with resolved id.
After that I save resulted graph in [TerminusDB](https://terminusdb.org). 
It requires schema for data, so I asked Gemini to generate a schema for oxc AST and modified it.

Now it can parse simple code into graph of statements, save it to database and then load and format as original text.

I'm going to implement interface for diffing and merging. 
I imagine it as something like suggestions mode in Google Docs: some parts are replaced, others are moved somewhere or deleted. I hope it would be really intuitive.
After that, you'll be able to configure auto-import for your project from git commit-by-commit and check the difference between PRs.

### Benefits
* Clean diffs
* Performance and reducing C02-emission
* Consistency across your tools 