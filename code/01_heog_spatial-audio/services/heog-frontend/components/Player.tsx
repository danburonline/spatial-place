import { useSphere } from '@react-three/cannon'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

type keysType = {
  [key: string]: string
}

export default function Player() {
  const [ref, api] = useSphere(() => ({
    args: [0.5],
    mass: 1,
    type: 'Dynamic',
    position: [0, 0.5, 0]
  }))

  const keys: keysType = {
    KeyW: 'forward',
    KeyS: 'backward',
    KeyA: 'left',
    KeyD: 'right',
    Space: 'jump'
  }
  const moveFieldByKey = (key: string) => keys[key]
  const direction = new THREE.Vector3()
  const frontVector = new THREE.Vector3()
  const sideVector = new THREE.Vector3()
  const SPEED = 2.5

  const usePlayerControls = () => {
    const [movement, setMovement] = useState({
      forward: false,
      backward: false,
      left: false,
      right: false
    })

    useEffect(() => {
      const handleKeyDown = (event: { code: string }) => {
        setMovement(m => ({ ...m, [moveFieldByKey(event.code)]: true }))
        // console.log(moveFieldByKey(event.code))
        api.applyForce([0.5, 0.5, 0.5], [0, 0, 0])
      }

      const handleKeyUp = (event: { code: string }) => {
        setMovement(m => ({ ...m, [moveFieldByKey(event.code)]: false }))
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
    // @ts-ignore
    console.log('Ref position:', ref.current.position)
    // @ts-ignore
    camera.position.copy(ref.current.position).y += 0.875
    frontVector.set(0, 0, Number(backward) - Number(forward))
    sideVector.set(Number(left) - Number(right), 0, 0)
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation)
    api.velocity.set(direction.x, velocity.current[1], direction.z)
  })

  return <mesh ref={ref} />
}
