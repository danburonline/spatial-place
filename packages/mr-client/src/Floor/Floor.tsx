import { usePlane } from '@react-three/cannon'

export default function Floor(): JSX.Element {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }))

  return (
    <mesh receiveShadow ref={ref}>
      <planeBufferGeometry args={[1000, 1000, 100, 100]} />
      <meshStandardMaterial color='#333837' />
    </mesh>
  )
}
