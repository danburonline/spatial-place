import { useEffect } from 'react'
import { useTimer } from 'use-timer'

export default function CountupTimer(): JSX.Element {
  const { time, start } = useTimer()
  useEffect(() => {
    start()
  }, [start])

  return (
    <div className='absolute z-10 flex items-center justify-center p-5 text-right bg-white rounded-full top-4 right-4'>
      <p className='absolute text-black'>{time}</p>
    </div>
  )
}
