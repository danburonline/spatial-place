import { PublicApi } from '@react-three/cannon'
import { useEffect, useState } from 'react'

const moveFieldByKey = (key: string | number) => keys[key]
const keys = {
  KeyW: 'forward',
  KeyS: 'backward',
  KeyA: 'left',
  KeyD: 'right'
}

export type Movement = {
  forward: boolean
  backward: boolean
  left: boolean
  right: boolean
}

const usePlayerControls = (api: PublicApi): Movement => {
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false
  })

  useEffect(() => {
    // TODO Handle button press down
    const handleKeyDown = (event: { code: string | number }) => {
      setMovement(movements => ({
        ...movements,
        [moveFieldByKey(event.code)]: true
      }))
      api.applyForce([0.5, 0.5, 0.5], [0, 0, 0])
    }

    // TODO Handle button press up
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

export default usePlayerControls
