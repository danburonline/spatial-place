# MR-Client

This service is used to display the frontend for the Mind Racing system. It's a Next.js application with a React frontend and a Node backend. To display the 3D content, I leveraged React-Three-Fiber for writing declaratively Three.js components via JSX.

**Package name in the CLI is:** `@mind-racing/client`.

## Technologies

- **Programming language:** TypeScript and JavaScript
- **Frontend:** Next.js (React.js)
- **Backend:** Next.js (Node.js)
- **Design system:** TailwindCSS (+ SASS)
- **WebGL rendering:** React-Three-Fiber (Three.js)
- **Authentication:** Auth0 Next.js SDK
- **Documentation:** Storybook

Have a look a the [package.json](package.json) file to see all dependencies and commands.

## Documentation

I use Storybook to automatically create the documentation for the components – 2D and 3D. In order to use Storybook, you first need to install all dependencies with `yarn` and then start the Storybook development server with `yarn start:doc`. See the output in the terminal for further instructions.
