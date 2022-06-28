// import { useIntersect } from '@react-three/drei'
import { Dispatch, Key, SetStateAction } from 'react'

import { SoundObjectType } from './AmbientPositionalSound'
import SoundObject from './SoundObject'

export default function PositionalSoundObject(props: {
  soundObject: SoundObjectType
  audioRefs: any
  index: string | number
  setHoverItem: Dispatch<SetStateAction<Key>>
  hoverItem: string | number
}) {
  // TODO Combine this with cameras to get their relative player positions
  // const ref = useIntersect((visible) => {
  //   // Get a overview of the visible sound objects
  //   // console.log(`${props.soundObject.id} is visible: ${visible}`)
  //   // TODO This is the vector that I need to use to calculate the relative position of the sound object
  //   // console.log(ref.current.position)
  // })

  function handleItemHover(id: string | number) {
    props.setHoverItem(id)
  }

  function handleItemExit() {
    props.setHoverItem(0)
  }

  return (
    <mesh
      onPointerEnter={(_) => {
        handleItemHover(props.soundObject.id)
      }}
      onPointerLeave={(_) => {
        handleItemExit()
      }}
      // ref={ref}
      key={props.soundObject.id}
      position={[props.soundObject.x, props.soundObject.y, props.soundObject.z]}
      rotation={[0, props.soundObject.rotation, 0]}
    >
      <sphereGeometry args={[0.5, 30, 30]} />
      <meshStandardMaterial
        color={
          // If the soundObject is the one being hovered over, set the color to green
          // All the other soundObjects will have a color of red
          // By default, the soundObjects will be red
          props.hoverItem === 0
            ? '#d7a419'
            : props.hoverItem === props.soundObject.id
            ? '#57bddd'
            : '#fc443f'
        }
      />
      <SoundObject
        refs={props.audioRefs[props.index as number]}
        volume={
          // If the soundObject is the one being hovered over, set the volume to 2.5
          // All the other soundObjects will have a volume of 0.125
          // By default, the soundObjects will have a volume of 1
          props.hoverItem === 0 ? 1 : props.hoverItem === props.soundObject.id ? 2.5 : 0.125
        }
        rolloffFactor={props.soundObject.rolloffFactor}
        url={props.soundObject.filePath}
        key={props.soundObject.id}
        id={props.soundObject.id}
        coneOuterGain={props.soundObject.coneOuterGain}
        innerAngle={props.soundObject.innerAngle}
        outerAngle={props.soundObject.outerAngle}
      />
    </mesh>
  )
}
