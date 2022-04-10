import { Key, Suspense, createRef, useMemo, useState } from 'react'
import type { PositionalAudio } from 'three'

import PositionalSoundObject from './PositionalSoundObject'

export type SoundObjectType = {
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
  soundObjects: SoundObjectType[]
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
    (soundObject: SoundObjectType, index: string | number) => {
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
