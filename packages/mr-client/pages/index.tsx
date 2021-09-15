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
        <link rel='icon' href='/favicon/favicon.ico' />
      </Head>
      <main>
        <h1>Hello World</h1>
      </main>
    </>
  )
}
