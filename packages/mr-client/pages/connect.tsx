import { withPageAuthRequired } from '@auth0/nextjs-auth0'

export default function Connect(): JSX.Element {
  // TODO Create the connect flow (pseudo)
  return <h1>Connect</h1>
}

export const getServerSideProps = withPageAuthRequired()
