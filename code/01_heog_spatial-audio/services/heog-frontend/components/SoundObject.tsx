import { useLoader, useThree } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import type { RefObject } from 'react'
import { AudioListener, AudioLoader, PositionalAudio } from 'three'
import { PositionalAudioHelper } from 'three/examples/jsm/helpers/PositionalAudioHelper.js'

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
      const helper = new PositionalAudioHelper(sound.current as PositionalAudio)
      sound.current?.add(helper)
      if (props.innerAngle !== 0) {
        sound.current?.setDirectionalCone(
          props.innerAngle,
          props.outerAngle,
          props.coneOuterGain
        )
      }
      sound.current?.setLoop(true)
      camera.add(listener)
      console.log('SoundObject[' + props.id + '] Initializing...')
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
    console.log(
      'SoundObject[' + props.id + '] Volume adjusted to:' + props.volume
    )
  }, [props.volume, props.url, props.id])

  useEffect(() => {
    sound.current?.play()
  }, [sound])

  return <positionalAudio ref={sound} args={[listener]} />
}
