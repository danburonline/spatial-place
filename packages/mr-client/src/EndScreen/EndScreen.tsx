import GoHomeButton from '../Buttons/GoHomeButton'
import RestartButton from '../Buttons/RestartButton'
import useState from '../store/useStore'

export default function EndScreen(): JSX.Element {
  const { neededTime } = useState()

  return (
    <div className='absolute z-30 flex flex-col items-center justify-center w-screen h-screen text-center bg-main'>
      <p className='text-5xl font-bold'>Congrats, game finished</p>
      <br />
      <p className='text-xl'>It took you {neededTime} seconds</p>
      <div className='mt-12'>
        <RestartButton />
        <GoHomeButton />
      </div>
    </div>
  )
}
