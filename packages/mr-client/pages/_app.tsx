import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

function MindRacingClient({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default MindRacingClient
