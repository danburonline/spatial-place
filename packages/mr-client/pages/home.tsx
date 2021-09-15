import Head from 'next/head'
import Link from 'next/link'

export default function Home(): JSX.Element {
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
        <Link href='/game' passHref>
          <a href='passHref'>Start game</a>
        </Link>
        <Link href='/logout' passHref>
          <a href='passHref'>Logout</a>
        </Link>
      </main>
    </>
  )
}
