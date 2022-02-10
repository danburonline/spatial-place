// @ts-nocheck
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
  state: boolean
  innerAngle: number
  outerAngle: number
}

export default function SoundObject(props: SoundObjectProps): JSX.Element {
  const sound = props.refs
  const { camera } = useThree()
  const [listener] = useState(() => new AudioListener())
  const buffer = useLoader(AudioLoader, props.url)

  useEffect(() => {
    sound.current.setBuffer(buffer)
    sound.current.setRefDistance(1)
    sound.current.setRolloffFactor(props.rolloffFactor)
    if (props.innerAngle !== 0) {
      sound.current.setDirectionalCone(
        props.innerAngle,
        props.outerAngle,
        props.coneOuterGain
      )
    }
    sound.current.setLoop(true)
    sound.current.setVolume(props.volume)
    camera.add(listener)
    return () => camera.remove(listener)
  }, [
    buffer,
    camera,
    listener,
    sound,
    props.volume,
    props.rolloffFactor,
    props.coneOuterGain,
    props.innerAngle,
    props.outerAngle
  ])

  if (props.state) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      sound.current.play()
    }, [props.state, sound])
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      sound.current.pause()
    }, [props.state, sound])
  }
  return <positionalAudio ref={sound} args={[listener]} />
}
