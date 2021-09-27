---
layout: default
title: Storybook
description: "Official wiki for the Mind Racing repository."
parent: Documentation
---

# Storybook

Storybook is a tool that allows developers to create organized UI systems making both the building process and documentation more efficient and easier to use. It has the possibility to create a component explorer with the stateless preview and the corresponding component documentation next to it.

## Quick Setup

In order to use Storybook, make sure to create a `.mdx` for each component you want to include in Storybook. Read more about the MDX file extension [here](https://storybook.js.org/docs/react/api/mdx). At the build process (or development preview), Storybook will look with files ending with `stories.mdx` for components to include in the preview.

You can preview the Storybook component explorer via the following command inside the MR-CLIENT directory:

```bash
yarn start:doc
```

This will open the Storybook component explorer in your default browser. Inside the GitHub Action pipeline, a command will turn the Storybook component explorer into a static exported website via the `yarn build:doc` command, which puts the exported HTML, CSS and JavaScript files into the `public/docs` directory of MR-CLIENT. To serve static `index.html` files inside the public folder of a Next.js application (re-directing the folder root to the `index.html` file), I needed to create a custom configuration inside the `next.config.js` file:

```js
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/index.html",
        permanent: true,
      },
    ];
  },
};
```
