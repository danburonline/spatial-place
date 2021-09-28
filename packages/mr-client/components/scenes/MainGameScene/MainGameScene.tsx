import { Loader, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

import Labyrinth from '../../models/Labyrinth/Labyrinth'
import Player from '../../models/Player/Player'
import Lighting from './components/Lighting'

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
