import { useLoader, useThree } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import type { RefObject } from 'react'
import { AudioListener, AudioLoader, PositionalAudio } from 'three'

type SoundObjectProps = {
  refs: RefObject<PositionalAudio>
  url: string
  volume: number
  rolloffFactor: number
  coneOuterGain: number
  innerAngle: number
  outerAngle: number
  id: any
}

export default function SoundObject(props: SoundObjectProps): JSX.Element {
  const sound = props.refs
  const { camera } = useThree()
  const [listener] = useState(() => new AudioListener())
  const buffer = useLoader(AudioLoader, props.url)
  const [isInit, setInit] = useState(false)

  useEffect(() => {
    if (!isInit) {
      sound.current?.setBuffer(buffer)
      sound.current?.setRefDistance(1)
      sound.current?.setRolloffFactor(props.rolloffFactor)
      if (props.innerAngle !== 0) {
        sound.current?.setDirectionalCone(
          props.innerAngle,
          props.outerAngle,
          props.coneOuterGain
        )
      }
      sound.current?.setLoop(true)
      camera.add(listener)
      setInit(true)
    }
    sound.current?.setVolume(props.volume)
  }, [
    isInit,
    sound,
    props.volume,
    props.rolloffFactor,
    props.innerAngle,
    props.id,
    props.outerAngle,
    props.coneOuterGain,
    buffer,
    camera,
    listener
  ])

  useEffect(() => {
    sound.current?.play()
  }, [sound])

  return <positionalAudio ref={sound} args={[listener]} />
}
