import { useState } from 'react'
import Countdown from 'react-countdown'

type CountdownTimerProps = {
  time?: number
  onComplete?: () => void
}

export default function CountdownTimer({
  time = 3000,
  onComplete = () => console.log('Countdown timer completed')
}: CountdownTimerProps): JSX.Element {
  const [showCountDown, setShowCountDown] = useState(true)

  const renderer = ({ seconds, completed }) => {
    if (completed) {
      return null
    } else {
      return <span>{seconds}</span>
    }
  }

  return (
    <>
      {showCountDown ? (
        <div className='absolute flex items-center justify-center w-screen h-screen text-5xl bg-main'>
          <Countdown
            date={Date.now() + time}
            renderer={renderer}
            onStart={() => console.log('Start the countdown timer')}
            onComplete={() => {
              onComplete()
              setShowCountDown(false)
            }}
          />
        </div>
      ) : null}
    </>
  )
}
