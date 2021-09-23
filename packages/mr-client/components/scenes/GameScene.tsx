import { Loader, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export default function GameScene(): JSX.Element {
  return (
    <>
      <Canvas>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color={'blue'} />
        </mesh>
        <OrbitControls />
      </Canvas>
      <Loader />
    </>
  )
}
