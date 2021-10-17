import { Physics } from '@react-three/cannon'
import { Loader, Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

import Floor from '../Floor/Floor'
import Labyrinth from '../Labyrinth/Labyrinth'
import Lighting from '../Lighting/Lighting'
import Player from '../Player/Player'
import Colliders from './components/Colliders'

export default function GameScene(): JSX.Element {
  return (
    <>
      <Canvas frameloop='demand' camera={{ position: [0, 20, 0] }}>
        <Suspense fallback={null}>
          <Physics
            allowSleep={true}
            gravity={[0, -20, 0]}
            tolerance={0.0001}
            size={115}
            broadphase={'SAP'}
            iterations={10}
          >
            <Floor />
            <Labyrinth />
            <Player />
            <Colliders />
          </Physics>
        </Suspense>
        <Lighting />
      </Canvas>
      <Loader />
      <Stats />
    </>
  )
}
