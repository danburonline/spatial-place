import GoHomeButton from '../Buttons/GoHomeButton'
import RestartButton from '../Buttons/RestartButton'
import useState from '../store/useStore'

export default function EndScreen(): JSX.Element {
  const { neededTime } = useState()

  return (
    <div className='absolute z-30 flex flex-col items-center justify-center w-screen h-screen text-center text-black bg-main'>
      <h1 className='text-3xl font-bold '>Congrats, game finished</h1>
      <br />
      <h2>
        It took you <span className='font-bold'>{neededTime} seconds</span>
      </h2>
      <div className='mt-8'>
        <RestartButton />
        <GoHomeButton />
      </div>
    </div>
  )
}
