import { Physics } from '@react-three/cannon'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

import Floor from '../Floor/Floor'
import Labyrinth from '../Labyrinth/Labyrinth'
import LabyrinthColliders from '../Labyrinth/components/Colliders'
import Lighting from '../Lighting/Lighting'
import Player from '../Player/Player'
import EndCollider from './components/EndCollider'

export default function GameScene(): JSX.Element {
  return (
    <Canvas frameloop='demand' camera={{ position: [0, 20, 0] }}>
      <Suspense fallback={null}>
        <Physics
          gravity={[0, -20, 0]}
          size={30}
          broadphase={'SAP'}
          iterations={10}
        >
          <Player />
          <Labyrinth />
          <LabyrinthColliders />
          <EndCollider />
          <Floor />
        </Physics>
      </Suspense>
      <Lighting />
    </Canvas>
  )
}
