import { Physics } from '@react-three/cannon'
import { PointerLockControls, Sky, Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import Ground from './Ground'
import Player from './Player'
import PositionalAudio from './PositionalAudio'

export default function Scene() {
  return (
    <>
      <Canvas
        camera={{
          fov: 85
        }}
      >
        <Stats />
        <Physics gravity={[0, -20, 0]}>
          <Ground />
          <Player />
        </Physics>
        <PointerLockControls selector='#pointerLockButton' />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        />
        <PositionalAudio />
      </Canvas>
    </>
  )
}
