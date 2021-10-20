import { useState } from 'react'
import Countdown from 'react-countdown'

import useStore from '../store/useStore'

export default function CountDown(): JSX.Element {
  const TIME = 5000
  const [showCountDown, setShowCountDown] = useState(true)
  const { setGameStartState } = useStore()

  const renderer = ({ seconds, completed }) => {
    if (completed) {
      return null
    }
    return <span>{seconds}</span>
  }

  return (
    <>
      {showCountDown && (
        <div className='absolute z-30 flex items-center justify-center w-screen h-screen text-5xl bg-main'>
          <Countdown
            date={Date.now() + TIME}
            renderer={renderer}
            onComplete={() => {
              setGameStartState()
              setShowCountDown(false)
            }}
          />
        </div>
      )}
    </>
  )
}
