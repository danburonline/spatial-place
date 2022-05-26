import { useEffect, useState } from 'react'

export default function PointerLockIndicator(): JSX.Element {
  const [_, setPointerLocked] = useState(false)

  useEffect(() => {
    document.addEventListener('pointerlockchange', () => {
      setPointerLocked(prevState => !prevState)
    })
  }, [])

  return (
    <div
      id={'pointerLockButton'}
      className={
        'absolute h-5 w-5 bg-gray-800 z-30 select-none cursor-crosshair transform -translate-x-1/2 -translate-y-1/2 rounded-full inset-1/2'
      }
    />
  )
}
