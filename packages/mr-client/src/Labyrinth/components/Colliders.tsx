import Collider from '../../Collider/Collider'
import labyrinthColliderArray from '../utils/labyrinthColliderArray'

export default function Colliders(): JSX.Element {
  const labyrinthColliders = labyrinthColliderArray.map(labyrinthCollider => (
    <Collider
      key={labyrinthCollider.id}
      size={labyrinthCollider.size}
      position={labyrinthCollider.position}
      scale={labyrinthCollider.scale}
      rotation={labyrinthCollider.rotation}
      color={labyrinthCollider.color}
    ></Collider>
  ))

  return <>{labyrinthColliders}</>
}
