import { useEffect } from 'react'
import { useTimer } from 'use-timer'

export default function CountupTimer(): JSX.Element {
  const { time, start } = useTimer()
  useEffect(() => {
    start()
  }, [start])

  return <p>{time}</p>
}
