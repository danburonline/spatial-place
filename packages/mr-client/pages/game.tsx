import Head from 'next/head'
import dynamic from 'next/dynamic'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

const GameScene = dynamic(() => import('../components/scenes/GameScene'), {
  ssr: false
})

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Game – Mind Racing</title>
        <meta
          name='description'
          content='A proof of concept frontend for the Mind Racing BCI application.'
        />
      </Head>
      <main className='h-screen bg-black'>
        <GameScene />
      </main>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired()
