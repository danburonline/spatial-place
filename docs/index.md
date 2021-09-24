---
layout: default
title: Home
nav_order: 1
description: "Official wiki for the Mind Racing repository."
permalink: /
---

## Mind Racing Wiki

{: .fs-9 }

This is the official wiki for the Mind Racing repository. Mind Racing is a mind-controlled multiplayer 3D racing game to demonstrate the possibilities of the Internet of Humans and the underlying brain/cloud interface architecture as part of my bachelor thesis.
{: .fs-6 .fw-300 }

[Getting started](#getting-started){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 } [View it on GitHub](https://github.com/danburonline/mind-racing){: .btn .fs-5 .mb-4 .mb-md-0 }

---

## Getting started

The repository is a monorepo and includes various sub-projects. I utilised [Yarn workspaces](https://yarnpkg.com/features/workspaces) for handling the dependencies for each workspace (the LaTeX sub-project excluded). To start working on the repository install all dependencies via `yarn install`. Be sure to have [Yarn installed globally](https://yarnpkg.com/getting-started/install).

CD into the different directories to have a look at the different sub-projects. Here's an overview of the different sub-projects:

- **/docs**: All Markdown files for the Jekyll project wiki.
- **/thesis:** All LaTeX files for the research thesis PDF.
- **/.github**: GitHub templates, configurations and workflows.
- **/packages**: A directory with all services for the Mind Racing system.
  - **/mr-client:** A web full-stack service for Mind Racing.
  - **/mr-server:** A backend backend service for Mind Racing.
  - **/mr-socket:** A socket backend service for Mind Racing.
  - **/mr-database:** A database backend service for Mind Racing.

Be sure to always have a look at the corresponding `README.md` files and the `package.json` files for each sub-project.

---

## Prerequisites

Working on this project requires the following prerequisites:

- [Git](https://git-scm.com), [Node.js](https://nodejs.org) and [Yarn](https://yarnpkg.com) globally installed.
- A code editor that supports languages and syntax such as TypeScript, JSX, YAML, LaTeX etc. I highly recommend using [Visual Studio Code](https://code.visualstudio.com).
- A [LaTeX](https://www.latex-project.org/get) compiler or all-in-one editor like [Overleaf](https://overleaf.com) for working with the `.tex` files to edit the bachelor thesis paper.

---

## About This Wiki

This wiki concentrates on the more top-down concepts utilised in the creation of Mind Racing, e.g. how the authentication works, or how I build the automated documentation. Have a look at the categories in the menu of this wiki. You can also use the search to search for a specific topic of keyword. If you think something isn't included in the wiki, or some topic isn't covered well, write me an email to **[public@danielburger.online](mailto:public@danielburger.online)**.
