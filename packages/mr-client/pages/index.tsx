import { useUser } from '@auth0/nextjs-auth0'
import Head from 'next/head'

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
              <a
                className='underline'
                rel='noreferrer'
                target='_blank'
                href='https://iduntechnologies.ch/guardian-dev-kit'
              >
                IDUN Guardian
              </a>{' '}
              brain-computer interface. Click the connect button below to go to
              the setup process. Otherwise, you&apos;re good to play the game.
            </h2>
            <div className='mt-8'>
              <a
                className='px-4 py-2 mx-2 text-black bg-white rounded-full'
                href='/connect'
              >
                Connect device
              </a>
              <a
                className='px-4 py-2 mx-2 text-white bg-black rounded-full'
                href='/start'
              >
                Start game
              </a>
            </div>
            <a className='mt-8 opacity-50' href='/api/auth/logout'>
              Logout
            </a>
          </>
        ) : (
          <>
            <h1 className='mb-3 text-3xl font-bold'>Mind Racing</h1>
            <h2 className='max-w-lg'>
              Mind-controlled multiplayer 3D racing game to demonstrate the
              possibilities of the Internet of Humans and the underlying
              brain/cloud interface architecture as part of{' '}
              <a
                className='underline'
                rel='noreferrer'
                target='_blank'
                href='https://thesis.mind.racing'
              >
                Daniel Burger&apos;s bachelor thesis.
              </a>
            </h2>
            <div className='mt-12'>
              <a
                className='px-4 py-2 mx-2 text-black bg-white rounded-full'
                href='/api/auth/login'
              >
                Login
              </a>
              <a
                className='px-4 py-2 mx-2 text-white bg-black rounded-full'
                href='/api/auth/login'
              >
                Create an account
              </a>
            </div>
          </>
        )}
      </main>
    </>
  )
}
