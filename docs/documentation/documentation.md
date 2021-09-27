---
layout: default
title: Documentation
description: "Official wiki for the Mind Racing repository."
permalink: /documentation
has_children: true
---

# Documentation

Documenting every single thing is a lot of work, and I, therefore, decided to automate as much as possible. I use three different documentation methods and technologies for Mind Racing:

- **Jekyll:** Turning markdown files on the GitHub repo into a static generated website hosted on GitHub Pages (the one you're on right now). [Read more →](https://github.com/jekyll/jekyll)
- **Storybook:** Creating a documentation that lives next to the component code for each frontend component. This is a great way to document the component code and the component itself. The Storybook component explorer is statically deployed as part of the staging and production deployment of MR-CLIENT. [Read more →](https://storybook.js.org)
- **TypeDoc:** Following the guidelines of [TSDocs](https://tsdoc.org), TypeDoc will create a documentation for each component, service, module etc. The TypeDoc exported static website is deployed as part of the staging and production deployment of the corresponding services (MR-CLIENT excluded). [Read more →](https://typedoc.org)
