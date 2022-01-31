import { OrbitControls, Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export default function Scene() {
  return (
    <Canvas>
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color='orange' />
      </mesh>
    </Canvas>
  )
}
