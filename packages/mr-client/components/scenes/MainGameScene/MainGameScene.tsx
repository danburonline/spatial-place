import { Loader, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

import Labyrinth from '../../models/Labyrinth/Labyrinth'
import Lighting from './components/Lighting'

export default function GameScene(): JSX.Element {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Labyrinth />
        </Suspense>
        <Lighting />
        <OrbitControls />
      </Canvas>
      <Loader />
    </>
  )
}
