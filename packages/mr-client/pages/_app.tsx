import { AppProps } from 'next/app'

function MindRacingClient({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default MindRacingClient
