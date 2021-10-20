import { useSphere } from '@react-three/cannon'
import { useThree, useFrame } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import { Vector3 } from 'three'

import usePlayerControls from './hooks/usePlayerControls'

export type PlayerProps = {
  color?: string
}

export default function Player({
  color = '#34e5d3'
}: PlayerProps): JSX.Element {
  const [ref, api] = useSphere(() => ({
    args: 0.5,
    mass: 1,
    type: 'Dynamic',
    position: [0, 0.5, 0]
  }))

  const SPEED = 5
  const direction = new Vector3()
  const frontVector = new Vector3()
  const sideVector = new Vector3()

  const { forward, backward, left, right } = usePlayerControls(api)
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
