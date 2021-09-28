export default function Player(): JSX.Element {
  return (
    <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
      <sphereGeometry attach='geometry' args={[0.5, 32, 200]} />
      <meshStandardMaterial color='lightgreen' />
    </mesh>
  )
}
