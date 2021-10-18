import Collider from '../../Collider/Collider'
import useStore from '../../store/useStore'

export default function EndCollider(): JSX.Element {
  const { setGameEndState } = useStore()

  return (
    <Collider
      key={Math.random()}
      size={[1.7, 2.0, 0.7]}
      position={[10.605, 1.0, -19.884]}
      scale={[1, 1, 1]}
      rotation={[0, 0, 0]}
      color={'#0f0'}
      // TODO Create the finish screen functionality
      onCollide={() => {
        console.log('EndCollider collision')
        setGameEndState()
      }}
    ></Collider>
  )
}
