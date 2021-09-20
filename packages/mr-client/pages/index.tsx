import Head from 'next/head'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Mind Racing</title>
        <meta
          name='description'
          content='A proof of concept frontend for the Mind Racing BCI application.'
        />
      </Head>
      <main>
        <h1>Not logged in – please log in.</h1>
        {/* TODO Create button component to use an anchor tag without disabling
        ESLint rules */}
        {/* eslint-disable @next/next/no-html-link-for-pages */}
        <a href='/api/auth/login'>Login</a>
      </main>
    </>
  )
}
