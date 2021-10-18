import { useState } from 'react'
import Countdown from 'react-countdown'

// TODO Pass the countdown time and functions as props
export default function CountdownTimer(): JSX.Element {
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
        <div
          style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Countdown
            date={Date.now() + 5000}
            renderer={renderer}
            onStart={() => console.log('Start the countdown timer')}
            onComplete={() => {
              console.log('Start the game countdown')
              setShowCountDown(false)
            }}
          />
        </div>
      ) : null}
    </>
  )
}
