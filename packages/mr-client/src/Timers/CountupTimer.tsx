import { useEffect } from 'react'
import { useTimer } from 'use-timer'

import useState from '../store/useStore'

export default function CountupTimer(): JSX.Element {
  const { gameState } = useState()
  const { time, start, pause } = useTimer()

  useEffect(() => {
    pause()
    // TODO Set final time into global store
  }, [gameState, pause])

  useEffect(() => {
    start()
  }, [start])

  return (
    <div className='absolute z-10 flex items-center justify-center p-5 text-right rounded-full bg-main top-4 right-4'>
      <p className='absolute text-black'>{time}</p>
    </div>
  )
}
