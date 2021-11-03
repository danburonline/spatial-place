import Collider from '../../Collider/Collider'
import useStore from '../../store/useStore'

export default function EndCollider(): JSX.Element {
  const { setGameFinishedState } = useStore()

  return (
    <Collider
      size={[1.7, 2.0, 0.7]}
      position={[10.605, 1.0, -19.884]}
      scale={[1, 1, 1]}
      rotation={[0, 0, 0]}
      color={'#0f0'}
      onCollide={() => {
        setGameFinishedState()
      }}
    ></Collider>
  )
}
