import { withPageAuthRequired } from '@auth0/nextjs-auth0'

export default function Connect(): JSX.Element {
  // TODO Create the start onboarding flow (pseudo)
  return <h1>Start</h1>
}

export const getServerSideProps = withPageAuthRequired()
