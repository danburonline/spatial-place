---
layout: default
title: TypeDoc
description: "Official wiki for the Mind Racing repository."
parent: Documentation
---

# TypeDoc

TypeDoc is a tool that converts comments in TypeScript source code into rendered statically exported documentation. It is extensible and supports a variety of configurations. I'm utilising TypeDoc in every service except the MR-CLIENT service since this one is using Storybook.

## Quick Setup

TypeDoc automatically detects all TypeScript files that include comments following the [TSDoc](https://tsdoc.org) convention. Here's how such a comment might look like:

```typescript
export class Statistics {
  /**
   * Returns the average of two numbers.
   *
   * @remarks
   * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
   *
   * @param x - The first input number
   * @param y - The second input number
   * @returns The arithmetic mean of `x` and `y`
   *
   * @beta
   */
  public static getAverage(x: number, y: number): number {
    return (x + y) / 2.0;
  }
}
```

A GitHub Action pipeline automatically generates the documentation on push into the `main` branch and deploys the statically exported website under the `/docs` directory. You can access these documentations under this URL schema `https://<service-name>.mind.racing/docs`.

In order to preview the documentation locally, go into the corresponding service directory and run the command `yarn build:doc`. This will create a directory called `/docs` in the root directory of the service.

TypeDoc is configured through the `tsconfig.json` file. You can read more [here](https://typedoc.org/guides/options).
