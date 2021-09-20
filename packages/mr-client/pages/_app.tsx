import { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'
import 'tailwindcss/tailwind.css'

function MindRacingClient({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()

  return router.pathname === '/' ? (
    <Component {...pageProps} />
  ) : (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MindRacingClient
