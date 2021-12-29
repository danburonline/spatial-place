---
layout: default
title: Authentication
description: "Official wiki for the Mind Racing repository."
permalink: /authentication
---

# Authentication

In order not to create my own authentication logic, I'm utilising the services from [Auth0](https://auth0.com). I use JWT to authenticate the users and store the user's data in the session.

## Next.js Authentication

To use Auth0 together with Next.js I'm using the [Next.js Auth0 SDK](https://github.com/auth0/nextjs-auth0). First, I create a new dynamic API route called `[...auth0].ts` that includes this code:

```typescript
import { handleAuth } from "@auth0/nextjs-auth0";
export default handleAuth();
```

This automatically creates three endpoints that Auth0 utilises:

- `/api/auth/callback` Auth0 redirects users to this route after they successfully log in.
- `/api/auth/logout` Logout route to log out users.
- `/api/auth/login` Login route to redirect the user to the Auth0 universal login screen.
- `/api/auth/me` Fetch user profile information.

Afterwards, I'm able to use the `<UserProvider>` from the `@auth0/nextjs-auth0` module to guard certain routes, pages and components:

```typescript
function MindRacingClient({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  return  (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
```

Guarding a page or even a component works by exporting the `getServerSideProps` function. This function is called by Next.js when the page is rendered. It's used to fetch the user's data from the session and pass it to the component. But before that, it's important to check if the user is authenticated. If not, the user is redirected to the login page.

```typescript
// ... some component.tsx
export const getServerSideProps = withPageAuthRequired();
```

If you want to access user information or block certain parts or components to render, you can use the `useUser` hook from the `@auth0/nextjs-auth0` module:

```typescript
const { user, isLoading, error } = useUser()

if (isLoading) return <div>Loading...</div>
if (error) return <div>{error.message}</div>
if (user) return <div>{user.name}</div>
```

In order to make everything work, I need to include certain environment variables in a `.env*` file. Here are the variables required to make the Auth0 SDK work:

```txt
AUTH0_SECRET=''
AUTH0_BASE_URL=''
AUTH0_ISSUER_BASE_URL=''
AUTH0_CLIENT_ID=''
AUTH0_CLIENT_SECRET=''
```

I get these information from the [Auth0 dashboard](https://manage.auth0.com/dashboard). As an application type I select `Regular Web Application`. Inside the settings for the application, I need to adds multiple endpoints that are allowed to send requests to Auth0. I add the following callback endpoints:

```yaml
http://localhost:3000/api/auth/callback # For local dev
https://staging.mind.racing/api/auth/callback
https://mind.racing/api/auth/callback
```

And the following logout URLs:

```yaml
http://localhost:3000 # For local dev
https://staging.mind.racing
https://mind.racing
```

Last but not least, I'm able to customise the universal login screen via the Auth0 branding dashboard. I currently only changed the logo and the colours inside. It's possible to create a fully customisable universal login screen, but I'm not sure if it's worth the effort for this project.
