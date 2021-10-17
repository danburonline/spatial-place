import { Triplet, useBox } from '@react-three/cannon'
import { Box } from '@react-three/drei'

export type ColliderProps = {
  size?: [height: number, width: number, depth: number]
  position: [x: number, y: number, z: number]
  scale: [x: number, y: number, z: number]
  rotation: Triplet
  color?: string
  onCollide?: () => void
}

export default function Collider({
  size,
  position,
  scale,
  rotation,
  color,
  onCollide
}: ColliderProps): JSX.Element {
  const [ref] = useBox(() => ({
    position: position,
    rotation: rotation,
    args: size,
    onCollide: onCollide
  }))

  return (
    <Box ref={ref} args={size} position={position} scale={scale}>
      <meshBasicMaterial color={color} wireframe={true} visible={false} />
    </Box>
  )
}
