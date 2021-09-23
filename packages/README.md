# Packages

The `/packages` directory contains the packages that are used for the entire Mind Racing system. The packages are organised into sub-directories based on the package's name. For example, the `/packages/mr-client` directory contains the Next.js frontend application and is key to the entire bachelor project.

## Naming Convention

Each package follows the naming convention as follows: `@mind-racing/<package-name>`. **Example:** `@mind-racing/client`.

## Commands

You can run commands for each package by running `yarn workspace <package-name> run <command>`. **Example:** `yarn run workspace @mind-racing/client`.

Additionally, you can also run commands for all packages by running `yarn workspaces run <command>`. **Example:** `yarn workspaces run format`. Read the instructions for the monorepo commands in the main README.md file.
