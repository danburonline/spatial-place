import type { AppProps } from 'next/app'

import '../styles/globals.scss'

function HeogFrontendApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default HeogFrontendApp
