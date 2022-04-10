import { useIntersect } from '@react-three/drei'
import {
  Dispatch,
  Key,
  SetStateAction,
  Suspense,
  createRef,
  useMemo,
  useState
} from 'react'
import type { PositionalAudio } from 'three'

import SoundObject from './SoundObject'

export type SoundObject = {
  id: Key
  x: number
  y: number
  z: number
  filePath: string
  name: string
  rotation: number
  rolloffFactor: number
  coneOuterGain: number
  innerAngle: number
  outerAngle: number
  volume: number
}

export type AmbientPositionalSoundProps = {
  soundObjects: SoundObject[]
}

export default function AmbientPositionalSound(
  props: AmbientPositionalSoundProps
) {
  const [hoverItem, setHoverItem] = useState<Key>(0)
  const audioRefs = useMemo(
    () =>
      Array(props.soundObjects.length)
        .fill(0)
        .map(() => createRef<PositionalAudio>()),
    [props.soundObjects.length]
  )

  const PositionalSoundObjects = props.soundObjects.map(
    (soundObject: SoundObject, index: string | number) => {
      return (
        <PositionalSoundObject
          soundObject={soundObject}
          audioRefs={audioRefs}
          index={index}
          key={soundObject.id}
          setHoverItem={setHoverItem}
          hoverItem={hoverItem}
        />
      )
    }
  )
  return <Suspense fallback={null}>{PositionalSoundObjects}</Suspense>
}

function PositionalSoundObject(props: {
  soundObject: SoundObject
  audioRefs: any
  index: string | number
  setHoverItem: Dispatch<SetStateAction<Key>>
  hoverItem: string | number
}) {
  // TODO Combine this with three cameras somehow to get their relative positions to the player
  const ref = useIntersect(visible => {
    // Get a overview of the visible sound objects
    console.log(`${props.soundObject.id} is visible: ${visible}`)
  })

  function handleItemHover(id: string | number | ((prevState: Key) => Key)) {
    props.setHoverItem(id)
  }

  function handleItemExit() {
    props.setHoverItem(0)
  }

  return (
    <mesh
      onPointerEnter={_ => {
        handleItemHover(props.soundObject.id)
      }}
      onPointerLeave={_ => {
        handleItemExit()
      }}
      ref={ref}
      key={props.soundObject.id}
      position={[props.soundObject.x, props.soundObject.y, props.soundObject.z]}
      rotation={[0, props.soundObject.rotation, 0]}
    >
      <sphereGeometry args={[0.5, 30, 30]} />
      <meshStandardMaterial
        color={props.hoverItem === props.soundObject.id ? 'green' : 'red'}
      />
      <SoundObject
        refs={props.audioRefs[props.index as number]}
        volume={
          // If the soundObject is the one being hovered over, set the volume to 2.5 ...
          // ... all the other soundObjects will have a volume of 0.125
          props.hoverItem === 0
            ? 1
            : props.hoverItem === props.soundObject.id
            ? 2.5
            : 0.125
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
