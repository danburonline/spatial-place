export default function Lighting(): JSX.Element {
  const lights: Array<{ x: number; y: number; z: number }> = [
    {
      x: -6.654,
      y: 11.314,
      z: 5.148
    },
    {
      x: 17.422,
      y: 7.845,
      z: -20.355
    }
  ]

  return (
    <>
      {lights.map(light => (
        <pointLight
          castShadow
          intensity={0.5}
          key={Math.random()}
          position={[light.x, light.y, light.z]}
        />
      ))}
    </>
  )
}
