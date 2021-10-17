import { useGLTF } from '@react-three/drei'
import { Mesh } from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type LabyrinthGLTF = GLTF & {
  nodes: {
    labyrinth_walls: Mesh
  }
}

export type LabyrinthProps = {
  color?: string
}

export default function Labyrinth({
  color = 'white'
}: LabyrinthProps): JSX.Element {
  const { nodes } = useGLTF('/models/labyrinth-compressed.glb') as LabyrinthGLTF
  return (
    <mesh castShadow receiveShadow geometry={nodes.labyrinth_walls.geometry}>
      <meshStandardMaterial color={color} />
    </mesh>
  )
}
