import '../styles/globals.css'

/**
 * Custom App component for Next.js
 *
 * @remarks
 * The name of this file is an official convention of Next.js.
 *
 * @param Component - The wrapper component
 * @param pageProps - All page props for the rendered children
 * @returns JSX.Element
 *
 */
function MindRacingClient({ Component, pageProps }): JSX.Element {
  return <Component {...pageProps} />
}

export default MindRacingClient
