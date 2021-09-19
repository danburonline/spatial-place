# Mind Racing

<!-- TODO Replace with a screenshot of the game as soon as I have something -->

![Rough architecture of Mind Racing and the corresponding IDUN Technologies software stack.](/wiki/img/rough-architecture.png)

Mind Racing is a web-based 3D racing game that can only be controlled by thoughts. You have to run on a finite track with a game figure in the shortest possible time. Randomly placed obstacles on the way to the goal slow down the game figure in case of a collision.

The game's biggest challenge is that only two people can control the game figure: Person A the x-axis, Person B the y-axis. Accordingly, one must interact with another's brain via the internet to reach the goal. This is an optimal demonstration of the Internet of Humans (IoH) and the underlying brain-cloud interface architecture.

This repository is part of my bachelor thesis and contains all files for the final project submission. Next to the 3D racing game, you can also find the entire source code for the brain-cloud interface application and the source text for the accompanying research paper.

## Project Goals

The main goal of my bachelor thesis is to create architectural foundations for brain-cloud interfaces and present the associated source code in a public and comprehensible way so that future engineers can make use of my findings and the source code.

As the field of neurotechnology is becoming increasingly industrialised, I am personally concerned that research should nevertheless be open source and available free of charge.

In addition to the main goal, my work has the goal to demonstrate the possibilities of brain-computer interfaces on the web, especially in the aspect of web accessibility.

## Directories

This repository contains the following directories:

- **[/wiki](/wiki)**: All Markdown files for the project wiki.
- **[/thesis](/thesis):** All LaTeX files for the research paper PDF.
- **[/.github](/.github)**: GitHub templates, configurations and workflows.
- **[/packages](/packages)**: A directory with all services for the Mind Racing system.
  - **[/mr-client](/packages/mr-client):** A web full-stack service for Mind Racing.
  - **[/mr-socket](/packages/mr-socket):** A socket backend service for Mind Racing.
  - **[/mr-server](/packages/mr-server):** A backend backend service for Mind Racing.
  - **[/mr-database](/packages/mr-database):** A database backend service for Mind Racing.

## Documentation

<!-- TODO Add project documentation for the new topics and changes -->

- Project wiki: <https://wiki.mind.racing>
- Code documentation: <https://docs.mind.racing>
- Bachelor thesis: <https://thesis.mind.racing>

## Technical Topics

<!-- TODO Replace with final URLs as soon as I've created them -->

- Authentication and authorization with Auth0: <https://github.com/danburonline/mind-racing/tree/main/wiki>
- Domains, redirects and DNS: <https://github.com/danburonline/mind-racing/tree/main/wiki>
- GitHub Actions and CI/CD: <https://github.com/danburonline/mind-racing/tree/main/wiki>
- Deployment and GCP: <https://github.com/danburonline/mind-racing/tree/main/wiki>
- LaTeX and Overleaf: <https://github.com/danburonline/mind-racing/tree/main/wiki>

## Licenses

- **Research Paper (CC-BY-4.0):** See [/thesis/LICENSE](/thesis/LICENSE)
- **Source Code (GNU GPLv3):** See [/packages/LICENSE](/packages/LICENSE)
- **Everything else (MIT):** [LICENSE](LICENSE)
