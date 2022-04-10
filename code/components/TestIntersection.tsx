import { useIntersect } from '@react-three/drei'
import { useState } from 'react'

export default function TestIntersection() {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const ref = useIntersect(visible => {
    setIsVisible(visible)
    console.log('This is the visibility: ' + visible)
  })

  return (
    <mesh ref={ref} position={[0, 0, -3]}>
      <sphereGeometry args={[0.5, 30, 30]} />
      <meshStandardMaterial color={isVisible ? 'yellow' : 'purple'} />
    </mesh>
  )
}
