import { Triplet, useBox } from '@react-three/cannon'
import { Box } from '@react-three/drei'

export type ColliderProps = {
  size?: [height: number, width: number, depth: number]
  position: [x: number, y: number, z: number]
  scale: [x: number, y: number, z: number]
  rotation: Triplet
  color?: string
}

export default function Collider(props: ColliderProps): JSX.Element {
  const [ref] = useBox(() => ({
    position: props.position,
    rotation: props.rotation,
    args: props.size
  }))

  return (
    <Box
      ref={ref}
      args={props.size}
      position={props.position}
      scale={props.scale}
    >
      <meshBasicMaterial color={props.color} wireframe={true} visible={false} />
    </Box>
  )
}
