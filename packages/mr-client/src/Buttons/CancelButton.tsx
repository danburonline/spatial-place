import { useRouter } from 'next/router'

export default function CancelButton(): JSX.Element {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push('/')}
      className='absolute z-10 px-4 py-2 text-white bg-black rounded-full top-4 left-4'
    >
      Cancel the game
    </button>
  )
}
