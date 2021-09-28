export default function Player(): JSX.Element {
  return (
    <mesh castShadow receiveShadow>
      <sphereGeometry attach='geometry' args={[0.5, 32, 200]} />
      <meshStandardMaterial color='red' />
    </mesh>
  )
}
