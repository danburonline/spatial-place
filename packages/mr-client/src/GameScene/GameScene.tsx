import { Physics } from '@react-three/cannon'
import { Loader, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

import Floor from '../Floor/Floor'
import Labyrinth from '../Labyrinth/Labyrinth'
import Lighting from '../Lighting/Lighting'
import Player from '../Player/Player'

export default function GameScene(): JSX.Element {
  return (
    <>
      <Canvas camera={{ position: [0, 5, 5] }}>
        <Physics>
          <Floor />
        </Physics>
        <Suspense fallback={null}>
          <Labyrinth />
        </Suspense>
        <Player />
        <Lighting />
        <OrbitControls />
      </Canvas>
      <Loader />
    </>
  )
}
