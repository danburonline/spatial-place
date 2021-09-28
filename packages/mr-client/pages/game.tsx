import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import dynamic from 'next/dynamic'
import Head from 'next/head'

const MainGameScene = dynamic(
  () => import('../components/scenes/MainGameScene/MainGameScene'),
  {
    ssr: false
  }
)

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
        <MainGameScene />
      </main>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired()
