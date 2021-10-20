import { useUser } from '@auth0/nextjs-auth0'
import Head from 'next/head'
import Link from 'next/link'

export default function Home(): JSX.Element {
  const { user, isLoading, error } = useUser()

  if (isLoading)
    return (
      <div className='flex items-center justify-center h-screen text-center'>
        Loading...
      </div>
    )
  if (error) return <div>{error.message}</div>

  return (
    <>
      <Head>
        <title>Mind Racing</title>
        <meta
          name='description'
          content='A proof of concept frontend for the Mind Racing BCI application.'
        />
      </Head>
      <main className='flex flex-col items-center justify-center h-screen text-center'>
        {user ? (
          <>
            <h1 className='mb-3 text-3xl font-bold'>Welcome, {user.name}</h1>
            <h2 className='max-w-md'>
              Be sure to have a connected{' '}
              <Link href='https://iduntechnologies.ch/guardian-dev-kit'>
                <a className='underline' rel='noreferrer' target='_blank'>
                  IDUN Guardian
                </a>
              </Link>{' '}
              brain-computer interface. Click the connect button below to go to
              the setup process. Otherwise, you&apos;re good to play the game.
            </h2>
            <div className='mt-8'>
              <Link href='/connect'>
                <a className='px-4 py-2 mx-2 text-black bg-white rounded-full'>
                  Connect device
                </a>
              </Link>
              <Link href='/start'>
                <a className='px-4 py-2 mx-2 text-white bg-black rounded-full'>
                  Start game
                </a>
              </Link>
            </div>
            <Link href='/api/auth/logout'>
              <a className='mt-8 opacity-50'>Logout</a>
            </Link>
          </>
        ) : (
          <>
            <h1 className='mb-3 text-3xl font-bold'>Mind Racing</h1>
            <h2 className='max-w-lg'>
              Mind-controlled multiplayer 3D racing game to demonstrate the
              possibilities of the Internet of Humans and the underlying
              brain/cloud interface architecture as part of{' '}
              <Link href='https://thesis.mind.racing'>
                <a className='underline' rel='noreferrer' target='_blank'>
                  Daniel Burger&apos;s bachelor thesis.
                </a>
              </Link>
            </h2>
            <div className='mt-12'>
              <Link href='/api/auth/login'>
                <a className='px-4 py-2 mx-2 text-black bg-white rounded-full'>
                  Login
                </a>
              </Link>
              <Link href='/api/auth/login'>
                <a className='px-4 py-2 mx-2 text-white bg-black rounded-full'>
                  Create an account
                </a>
              </Link>
            </div>
          </>
        )}
      </main>
    </>
  )
}
