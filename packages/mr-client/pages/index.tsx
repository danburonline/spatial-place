import Head from 'next/head'
import Link from 'next/link'

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
        <h1>VAR: {process.env.NEXT_PUBLIC_EXAMPLE}</h1>
        <Link href='/api/auth/login'>Login</Link>
      </main>
    </>
  )
}
