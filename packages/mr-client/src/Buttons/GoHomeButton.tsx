import { useRouter } from 'next/router'

export default function GoHomeButton(): JSX.Element {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push('/')}
      className='px-4 py-2 mx-2 text-black bg-white rounded-full'
    >
      Go to home
    </button>
  )
}
