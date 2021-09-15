import { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0'

import 'tailwindcss/tailwind.css'

function MindRacingClient({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MindRacingClient
