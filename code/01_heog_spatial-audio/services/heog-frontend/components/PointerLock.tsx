import { useEffect } from 'react'
import { useState } from 'react'

export default function PointerLock(): JSX.Element {
  const [pointerLocked, setPointerLocked] = useState(false)
  const visibility = pointerLocked ? 'hidden' : 'visible'

  useEffect(() => {
    document.addEventListener('pointerlockchange', () => {
      setPointerLocked(prevState => !prevState)
    })
  }, [])

  return (
    <div
      style={{ visibility: visibility }}
      id={'pointerLockButton'}
      className={
        'absolute h-5 w-5 bg-red-500 z-30 select-none cursor-crosshair transform -translate-x-1/2 -translate-y-1/2 rounded-full inset-1/2'
      }
    />
  )
}
