import type { AppProps } from 'next/app'

function HeogFrontendApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default HeogFrontendApp
