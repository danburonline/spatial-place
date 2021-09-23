# Mind Racing

Mind Racing is a web-based 3D racing game that can only be controlled by thoughts. You have to run on a finite track with a game figure in the shortest possible time. Randomly placed obstacles on the way to the goal slow down the game figure in case of a collision.

The game's biggest challenge is that only two people can control the game figure: Person A the x-axis, Person B the y-axis. Accordingly, one must interact with another's brain via the internet to reach the goal. This is an optimal demonstration of the Internet of Humans (IoH) and the underlying brain/cloud interface (B/CI) architecture.

This repository is part of my bachelor thesis and contains all files for the final project submission. Next to the 3D racing game, you can also find the entire source code for the brain/cloud interface application and the source text for the accompanying bachelor thesis.

## Project Goals

The main goal of my bachelor thesis is to create architectural foundations for brain/cloud interfaces and present the associated source code in a public and comprehensible way so that future engineers can make use of my findings and the source code.

As the field of neurotechnology is becoming increasingly industrialised, I am personally concerned that research should nevertheless be open source and available free of charge.

In addition to the main goal, my work has the goal to demonstrate the possibilities of brain-computer interfaces on the web, especially in the aspect of web accessibility.

## Directories

This repository contains the following directories:

- **[docs](/docs)**: All Markdown files for the Jekyll project wiki.
- **[thesis](/thesis):** All LaTeX files for the research thesis PDF.
- **[github](/.github)**: GitHub templates, configurations and workflows.
- **[packages](/packages)**: A directory with all services for the Mind Racing system.
  - **[mr-client](/packages/mr-client):** A web full-stack service for Mind Racing.
  - **[mr-server](/packages/mr-server):** A backend backend service for Mind Racing.
  - **[mr-socket](/packages/mr-socket):** A socket backend service for Mind Racing.
  - **[mr-database](/packages/mr-database):** A database backend service for Mind Racing.

## Environments

- Production: <https://mind.racing>
- Staging: <https://staging.mind.racing>

## Documentations

There are several documentation artefacts for the project. Some of them are deployed on their corresponding service, and some more broad-scale documentation is available on the project wiki: **<https://wiki.mind.racing>**.

### Services Overview

- MR-Client documentation: <https://mind.racing/docs>
- MR-Server documentation: <https://server.mind.racing/docs>
- MR-Socket documentation: <https://socket.mind.racing/docs>
- MR-Database documentation: <https://database.mind.racing/docs>

### Wiki Overview

- [Documentation](https://wiki.mind.racing/documentation)
- [Authentication](https://wiki.mind.racing/authentication)
- [Deployment](https://wiki.mind.racing/deployment)
- [Automation](https://wiki.mind.racing/automation)
- [Domains](https://wiki.mind.racing/domains)
- [LaTeX](https://wiki.mind.racing/latex)

## Licenses

- Source Code (GNU GPLv3): [LICENSE](/packages/LICENSE)
- Bachelor Thesis (CC-BY-4.0): [LICENSE](/thesis/LICENSE)
- Everything else (MIT): [LICENSE](LICENSE)
