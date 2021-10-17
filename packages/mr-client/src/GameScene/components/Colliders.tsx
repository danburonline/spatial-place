import Collider from '../../Collider/Collider'
import gameSceneCollidersArray from '../utils/gameSceneColliders'

export default function Colliders(): JSX.Element {
  const gameSceneColliders = gameSceneCollidersArray.map(gameSceneCollider => (
    <Collider
      key={gameSceneCollider.id}
      size={gameSceneCollider.size}
      position={gameSceneCollider.position}
      scale={gameSceneCollider.scale}
      rotation={gameSceneCollider.rotation}
      color={gameSceneCollider.color}
    ></Collider>
  ))

  return <>{gameSceneColliders}</>
}
