---
layout: default
title: LaTeX
description: "Official wiki for the Mind Racing repository."
permalink: /latex
---

# LaTeX

In order to version control the process of my bachelor thesis, I use LaTeX together with Git. I don't only use it for that reason, but also to create dynamically created citations and page layouts without dealing with Microsoft Word or the like. Have a read [here](https://www.researchgate.net/post/Why_LaTex_is_better_choice_than_Microsoft_Word) to find out more about this comparison.

Due to the difficulty to make LaTeX a collaborative tool, I'm utilising [Overleaf](https://www.overleaf.com), which is an online LaTeX editor with a GitHub and [Zotero](https://www.zotero.org) integration to easily compile and preview `.tex` files in the browser. Its main functionality is still the easy access of collaborators to the connected repository without introducing the complexity of a LaTeX compiler or Git version control.

You can read more about LaTeX on the official Overleaf documentation: <https://www.overleaf.com/learn>.

## Quick Setup

Navigate to the `/thesis` directory of this repository and have a look at the `/src` folder to see the corresponding `.tex` files. There is also a huge `PhDThesisPSnPDF.cls` file that contains the LaTeX class definitions for the thesis to customise it.

The references are managed via [BibLaTeX](https://www.overleaf.com/learn/latex/Articles/Getting_started_with_BibLaTeX) inside of Overleaf itself. In order to create generate a new `references.bib` file, I simply connect [Zotero](https://www.overleaf.com/learn/how-to/How_to_link_your_Overleaf_account_to_Mendeley_and_Zotero) with Overleaf and click the "sync button".
