import { WorkerApi } from '@react-three/cannon'
import { useEffect, useState } from 'react'

type EventKey = {
  [key: string]: string
}

type Movement = {
  [key: string]: boolean
}

const moveFieldByKey = (key: string | number) => eventKey[key]
const eventKey: EventKey = {
  KeyW: 'forward',
  KeyS: 'backward',
  KeyA: 'left',
  KeyD: 'right'
}

export default function usePlayerControls(api: WorkerApi): Movement {
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false
  })

  useEffect(() => {
    const handleKeyDown = (event: { code: string | number }) => {
      setMovement(movements => ({
        ...movements,
        [moveFieldByKey(event.code)]: true
      }))
      api.applyForce([0.5, 0.5, 0.5], [0, 0, 0])
    }

    const handleKeyUp = (event: { code: string | number }) => {
      setMovement(movements => ({
        ...movements,
        [moveFieldByKey(event.code)]: false
      }))
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [api])

  return movement
}
