import { UserProfile, withPageAuthRequired } from '@auth0/nextjs-auth0'
import Head from 'next/head'
import Link from 'next/link'

export default function Home(user: UserProfile): JSX.Element {
  return (
    <>
      <Head>
        <title>Home – Mind Racing</title>
        <meta
          name='description'
          content='A proof of concept frontend for the Mind Racing BCI application.'
        />
      </Head>
      <main>
        <h1>You&apos;re now logged in</h1>
        <h2>{JSON.stringify(user, null, 2)}</h2>
        <Link href='/game'>Start game</Link>
        {/* TODO Create button component to use an anchor tag without disabling
        ESLint rules */}
        {/* eslint-disable @next/next/no-html-link-for-pages */}
        <a href='/api/auth/logout'>Logout</a>
      </main>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired()
