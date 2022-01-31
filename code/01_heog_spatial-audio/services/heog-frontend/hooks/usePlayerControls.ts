import { PublicApi } from '@react-three/cannon'
import { useEffect, useState } from 'react'

type keysType = {
  [key: string]: string
}

const moveFieldByKey = (key: string) => keys[key]
const keys: keysType = {
  forward: 'forward',
  backward: 'backward',
  left: 'left',
  right: 'right'
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
    const handleKeyDown = (event: MouseEvent & { target: Element }) => {
      setMovement(movements => ({
        ...movements,
        [moveFieldByKey(event.target.getAttribute('data-element'))]: true
      }))
      api.applyForce([0.5, 0.5, 0.5], [0, 0, 0])
    }

    const handleKeyUp = (event: MouseEvent & { target: Element }) => {
      setMovement(movements => ({
        ...movements,
        [moveFieldByKey(event.target.getAttribute('data-element'))]: false
      }))
    }

    document.addEventListener('mousedown', handleKeyDown)
    document.addEventListener('mouseup', handleKeyUp)
    return () => {
      document.removeEventListener('mousedown', handleKeyDown)
      document.removeEventListener('mouseup', handleKeyUp)
    }
  }, [api])

  return movement
}

export default usePlayerControls
