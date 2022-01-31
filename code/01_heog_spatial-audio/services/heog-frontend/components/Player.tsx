import { useSphere } from '@react-three/cannon'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { Vector3 } from 'three'

import usePlayerControls from '../hooks/usePlayerControls'

export type PlayerProps = {
  color?: string
  speed?: number
}

export default function Player({ speed = 3 }: PlayerProps): JSX.Element {
  const [ref, api] = useSphere(() => ({
    args: [0.5],
    mass: 1,
    type: 'Dynamic',
    position: [0, 0.5, 0]
  }))

  const direction = new Vector3()
  const frontVector = new Vector3()
  const sideVector = new Vector3()

  const { forward, backward, left, right } = usePlayerControls(api)
  const { camera } = useThree()
  const velocity = useRef([0, 0, 0])

  useEffect(
    () => api.velocity.subscribe(v => (velocity.current = v)),
    [api.velocity]
  )
  useFrame(() => {
    console.log(api.velocity)
    camera.position.copy(ref.current.position)
    frontVector.set(0, 0, Number(backward) - Number(forward))
    sideVector.set(Number(left) - Number(right), 0, 0)
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(speed)
      .applyEuler(camera.rotation)
    api.velocity.set(direction.x, velocity.current[1], direction.z)
  })

  return <mesh ref={ref} />
}
