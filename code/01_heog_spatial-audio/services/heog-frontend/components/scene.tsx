import { Physics } from '@react-three/cannon'
import { PointerLockControls, Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import Ground from '../components/Ground'
import Player from '../components/Player'

export default function Scene() {
  return (
    <Canvas>
      <Physics gravity={[0, -20, 0]}>
        <Player />
        <Ground />
      </Physics>

      <PointerLockControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
    </Canvas>
  )
}
