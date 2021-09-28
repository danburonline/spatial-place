import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type LabyrinthGLTF = GLTF & {
  nodes: {
    labyrinth_walls: THREE.Mesh
  }
}

export default function Labyrinth(): JSX.Element {
  const { nodes } = useGLTF('/models/labyrinth-compressed.glb') as LabyrinthGLTF
  return (
    <mesh castShadow receiveShadow geometry={nodes.labyrinth_walls.geometry}>
      <meshStandardMaterial color='white' />
    </mesh>
  )
}
