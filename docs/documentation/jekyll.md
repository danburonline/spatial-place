---
layout: default
title: Jekyll
description: "Official wiki for the Mind Racing repository."
parent: Documentation
---

# Jekyll

In order to make the Jekyll documentation publicly available, make sure to have a folder in the root directory called `docs`. Afterwards, it's as easy as just editing the markdown files – Jekyll will automatically generate the HTML, CSS and JavaScript files. Push the changes to the `main` branch, and a custom GitHub Pages deployment pipeline will automatically update the documentation. The documentation is available as the main wiki of the Mind Racing project: <https://wiki.mind.racing>.

## Meta Data

You can edit the metadata of each markdown file by adding a YAML header to the top of the file. The header should look like this:

```yml
---
layout: default
title: Jekyll
description: "Official wiki for the Mind Racing repository."
parent: Documentation
---
```

You can also utilise subfolders to group your markdown files. For example, if you have a `docs/jekyll/index.md` file, you can create a `docs/jekyll/` folder and put the file in there.

## Customisation

In order to customise the Jekyll theme, you can edit the `_config.yml_` file. The theme is a template called [Just the Docs](https://github.com/pmarsceill/just-the-docs).
