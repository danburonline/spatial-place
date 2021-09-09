# Mind Racing

![Rough architecture of Mind Racing and the corresponding IDUN Technologies software stack.](/readmes/img/rough-architecture.png)

Mind Racing is a web-based 3D racing game that can only be controlled by thoughts. You have to run on a finite track with a game figure in the shortest possible time. Randomly placed obstacles on the way to the goal slow down the game figure in case of a collision.

The game's biggest challenge is that only two people can control the game figure: Person A the x-axis, Person B the y-axis. Accordingly, one must interact with another's brain via the internet to reach the goal. This is an optimal demonstration of the Internet of Humans (IoH) and the underlying brain-cloud interface architecture.

This repository is part of my bachelor thesis and contains all files for the final project submission. Next to the 3D racing game, you can also find the entire source code for the brain-cloud interface application and the source text for the accompanying research paper.

## Project Goals

The main goal of my bachelor thesis is to create architectural foundations for brain-cloud interfaces and present the associated source code in a public and comprehensible way so that future engineers can make use of my findings and the source code.

As the field of neurotechnology is becoming increasingly industrialised, I am personally concerned that research should nevertheless be open source and available free of charge.

In addition to the main goal, my work has the goal to demonstrate the possibilities of brain-computer interfaces on the web, especially in the aspect of web accessibility.

## Directories

This repository contains the following directories:

- **[/docs](/docs/README.md)**: Auto generated documentation files for GitHub Pages.
- **[/thesis](/thesis/README.md):** All LaTeX files for the research paper PDF.
- **[/.github](/.github)**: GitHub templates, configurations and workflows.
- **[/readmes](/readmes/README.md)**: A directory with all included READMEs and files.
- **[/packages](/packages/README.md)**: A directory with all services for the Mind Racing system.
  - **[/mr-client](/packages/mr-client/README.md):** A web frontend service for Mind Racing.
  - **[/mr-storybook](/packages/mr-storybook/README.md):** A design system for Mind Racing.
  - **[/mr-socket](/packages/mr-socket/README.md):** A socket service for Mind Racing.
  - **[/mr-server](/packages/mr-server/README.md):** A backend server service for Mind Racing.
  - **[/mr-database](/packages/mr-database/README.md):** A database service for Mind Racing.

## Documentation

<!--- TODO Add the re-direct links -->

- Project documentation/wiki: <https://github.com/danburonline/mind-racing/wiki>
- Code documentation: <https://danburonline.github.io/mind-racing>
- Bachelor thesis: <https://github.com/danburonline/mind-racing/blob/main/thesis/export/bachelor-thesis_export.pdf>

## Licenses

- **Research Paper (CC-BY-4.0):** See [/thesis/LICENSE](/thesis/LICENSE)
- **Source Code (GNU GPLv3):** See [/packages/LICENSE](/packages/LICENSE)
- **Everything else (MIT):** [LICENSE](LICENSE)
