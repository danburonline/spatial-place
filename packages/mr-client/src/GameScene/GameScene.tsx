import { Loader, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

import Labyrinth from '../Labyrinth/Labyrinth'
import Lighting from '../Lighting/Lighting'
import Player from '../Player/Player'

export default function GameScene(): JSX.Element {
  return (
    <>
      <Canvas>
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
