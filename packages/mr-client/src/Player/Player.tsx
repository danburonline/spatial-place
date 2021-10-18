import { useSphere } from '@react-three/cannon'
import { useThree, useFrame } from '@react-three/fiber'
import { useState, useRef, useEffect } from 'react'
import { Vector3 } from 'three'

export type PlayerProps = {
  color?: string
}

export default function Player({
  color = 'lightgreen'
}: PlayerProps): JSX.Element {
  const [ref, api] = useSphere(() => ({
    args: 0.5,
    mass: 1,
    type: 'Dynamic',
    position: [0, 0.5, 0]
  }))

  const moveFieldByKey = (key: string | number) => keys[key]
  const SPEED = 5
  const direction = new Vector3()
  const frontVector = new Vector3()
  const sideVector = new Vector3()
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
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
    api.velocity.set(direction.x, velocity.current[1], direction.z)
    ref.current.getWorldPosition(camera.position).y += 10
  })

  return (
    <mesh ref={ref} position={[0, 0.25, 0]} castShadow receiveShadow>
      <sphereGeometry attach='geometry' args={[0.5, 32, 200]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}