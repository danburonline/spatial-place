import { useSphere } from '@react-three/cannon'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { Vector3 } from 'three'

import usePlayerControls from '../hooks/usePlayerControls'

export default function Player({
  PlayerSpeed = 3.5,
  PlayerPhysicsBodyHeight = 1.25,
  PlayerPhysicsBodyRadius = 0.5
}) {
  const [ref, api] = useSphere(() => ({
    args: [PlayerPhysicsBodyRadius],
    mass: 1,
    type: 'Dynamic',
    position: [0, PlayerPhysicsBodyRadius, 0]
  }))

  const directionVector = new Vector3()
  const frontVector = new Vector3()
  const sideVector = new Vector3()

  const { forward, backward, left, right } = usePlayerControls(api)
  const { camera } = useThree()
  const velocity = useRef([0, 0, 0])
  // const vector = new Vector3()

  useEffect(
    () => api.velocity.subscribe((subscribedVelocity) => (velocity.current = subscribedVelocity)),
    [api.velocity]
  )
  useFrame(() => {
    // TODO Use this to detect if spheres are on the relative left, centre or right side of the player
    // console.log(vector.project(camera))

    // vector.project(camera)
    // vector.x = ((vector.x + 1) * window.innerWidth) / 2
    // vector.y = (-(vector.y - 1) * window.innerHeight) / 2
    // vector.z = 0
    // console.log(vector)

    ref.current && (ref.current.getWorldPosition(camera.position).y += PlayerPhysicsBodyHeight)
    frontVector.set(0, 0, Number(backward) - Number(forward))
    sideVector.set(Number(left) - Number(right), 0, 0)
    directionVector
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(PlayerSpeed)
      .applyEuler(camera.rotation)
    api.velocity.set(directionVector.x, velocity.current[1], directionVector.z)
  })

  return <mesh ref={ref} />
}
