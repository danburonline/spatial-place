import Collider from '../../Collider/Collider'

export default function EndCollider(): JSX.Element {
  return (
    <Collider
      key={Math.random()}
      size={[1.7, 2.0, 0.7]}
      position={[10.605, 1.0, -19.884]}
      scale={[1, 1, 1]}
      rotation={[0, 0, 0]}
      color={'#0f0'}
      onCollide={() => console.log('EndCollider collision')}
    ></Collider>
  )
}
