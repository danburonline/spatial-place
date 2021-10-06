import { useSphere } from '@react-three/cannon'
import { useThree, useFrame } from '@react-three/fiber'
import { useState, useRef, useEffect } from 'react'
import { Vector3 } from 'three'

export default function Player(): JSX.Element {
  const [ref, api] = useSphere(() => ({
    args: 0.5,
    mass: 1,
    type: 'Dynamic',
    sleepSpeedLimit: 2.5,
    sleepTimeLimit: 0,
    allowSleep: true
  }))

  const moveFieldByKey = key => keys[key]
  const direction = new Vector3()
  const frontVector = new Vector3()
  const sideVector = new Vector3()
  const SPEED = 3
  const keys = {
    KeyW: 'forward',
    KeyS: 'backward',
    KeyA: 'left',
    KeyD: 'right'
  }

  const usePlayerControls = () => {
    const [movement, setMovement] = useState({
      forward: false,
      backward: false,
      left: false,
      right: false
    })

    useEffect(() => {
      const handleKeyDown = event => {
        setMovement(m => ({ ...m, [moveFieldByKey(event.code)]: true }))
        api.applyForce([0.5, 0.5, 0.5], [0, 0, 0])
      }

      const handleKeyUp = e => {
        setMovement(m => ({ ...m, [moveFieldByKey(e.code)]: false }))
      }

      document.addEventListener('keydown', handleKeyDown)
      document.addEventListener('keyup', handleKeyUp)
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        document.removeEventListener('keyup', handleKeyUp)
      }
    }, [])

    return movement
  }

  const { forward, backward, left, right } = usePlayerControls()
  const { camera } = useThree()
  const velocity = useRef([0, 0, 0])

  useEffect(
    () => void api.velocity.subscribe(v => (velocity.current = v)),
    [api.velocity]
  )
  useFrame(() => {
    frontVector.set(0, 0, Number(backward) - Number(forward))
    sideVector.set(Number(left) - Number(right), 0, 0)
    camera.lookAt(ref.current.position)
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
    api.velocity.set(direction.x, velocity.current[1], direction.z)
  })

  return (
    <mesh ref={ref} position={[0, 0.5, 0]} castShadow receiveShadow>
      <sphereGeometry attach='geometry' args={[0.5, 32, 200]} />
      <meshStandardMaterial color='lightgreen' />
    </mesh>
  )
}
