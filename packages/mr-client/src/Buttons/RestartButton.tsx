import { useRouter } from 'next/router'

export default function RestartButton(): JSX.Element {
  const router = useRouter()

  return (
    <div className='absolute z-10 top-4 left-4'>
      <button
        onClick={() => router.reload()}
        className='px-4 py-2 text-white bg-black rounded-full'
      >
        Restart the game
      </button>
    </div>
  )
}
