import { useRouter } from 'next/router'

import useState from '../store/useStore'

export default function EndScreen(): JSX.Element {
  const { neededTime } = useState()
  const router = useRouter()

  return (
    <div className='absolute z-10 flex flex-col items-center justify-center w-screen h-screen text-center bg-main'>
      <p className='text-5xl font-bold'>Congrats, game finished</p>
      <br />
      <p className='text-xl'>It took you {neededTime} seconds</p>
      <div>
        <button
          onClick={() => router.reload()}
          className='px-4 py-2 mx-1 mt-12 text-white bg-black rounded-full'
        >
          Restart the game
        </button>
        <button
          onClick={() => router.push('/')}
          className='px-4 py-2 mx-1 mt-12 text-black bg-white rounded-full'
        >
          Go to home
        </button>
      </div>
    </div>
  )
}
