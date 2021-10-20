import { useEffect } from 'react'
import { useTimer } from 'use-timer'

import useStore from '../store/useStore'

export default function StopWatch(): JSX.Element {
  const { setFinalNeededTime } = useStore()
  const { time, start } = useTimer()

  useEffect(() => {
    setFinalNeededTime(time)
  }, [time, setFinalNeededTime])

  useEffect(() => {
    start()
  }, [start])

  return (
    <div className='absolute z-10 flex items-center justify-center p-5 text-right rounded-full bg-main top-4 right-4'>
      <p className='absolute text-black'>{time}</p>
    </div>
  )
}
