---
layout: default
title: Home
nav_order: 1
description: "Official wiki for the Mind Racing repository."
permalink: /
---

# Mind Racing Wiki

This is the official wiki for the Mind Racing repository. Mind Racing is a mind-controlled multiplayer 3D racing game to demonstrate the possibilities of the Internet of Humans and the underlying brain/cloud interface architecture as part of my bachelor thesis.

[Getting started](#getting-started){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 } [View it on GitHub](https://github.com/danburonline/mind-racing){: .btn .fs-5 .mb-4 .mb-md-0 }

---

## Prerequisites

Working on this project requires the following prerequisites:

- [Git](https://git-scm.com), [Node.js](https://nodejs.org) and [Yarn](https://yarnpkg.com) globally installed.
- A code editor that supports languages and syntax such as TypeScript, JSX, YAML, LaTeX etc. I highly recommend using [Visual Studio Code](https://code.visualstudio.com).
- A [LaTeX](https://www.latex-project.org/get) compiler or all-in-one editor like [Overleaf](https://overleaf.com) for working with the `.tex` files to edit the bachelor thesis paper.

---

## Getting Started

The repository is a monorepo and includes various sub-projects. I utilised [Yarn workspaces](https://yarnpkg.com/features/workspaces) for handling the dependencies for each workspace (the LaTeX sub-project excluded). To start working on the repository install all dependencies via `yarn install`.

CD into the different directories to have a look at the different sub-projects. [Here](https://github.com/danburonline/mind-racing#directories) is an overview of the different sub-projects.

---

## About This Wiki

This wiki concentrates on the more top-down concepts utilised in the creation of Mind Racing, e.g. how the authentication works, or how I build the automated documentation. Have a look at the categories in the menu of this wiki. You can also use the search to search for a specific topic of keyword. If you think something isn't included in the wiki, or some topic isn't covered well, write me an email to **[public@danielburger.online](mailto:public@danielburger.online)**.
