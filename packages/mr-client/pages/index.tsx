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
      <main>
        {user ? (
          <>
            <h1>Welcome, {user.name}</h1>
            <a href='/api/auth/logout'>Logout</a>
            <a href='/start'>Start game</a>
          </>
        ) : (
          <>
            <h1>Mind Racing</h1>
            <h2>
              Mind-controlled multiplayer 3D racing game to demonstrate the
              possibilities of the Internet of Humans and the underlying
              brain/cloud interface architecture as part of{' '}
              <a href='https://danielburger.online'>my</a> bachelor thesis.
            </h2>
            <a href='/api/auth/login'>Login</a>
          </>
        )}
      </main>
    </>
  )
}
