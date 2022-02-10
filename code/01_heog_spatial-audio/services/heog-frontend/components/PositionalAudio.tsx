import { useState } from 'react'

import AmbientPositionalSound from './AmbientPositionalSound'

export default function PositionalAudio() {
  const [audioState, setAudioState] = useState(false)

  const peopleSoundObjects = [
    {
      id: 1,
      x: 5,
      y: 0.3,
      z: 15,
      position: [0, 0, 0],
      filePath: '/audio/person-1-talking.mp3',
      name: 'Person 1',
      rotation: 0,
      coneOuterGain: 0,
      innerAngle: 0,
      outerAngle: 0,
      rolloffFactor: 1,
      volume: 0.6
    },
    {
      id: 2,
      x: 2.5,
      y: 0.4,
      z: -5.5,
      position: [0, 0, 0],
      filePath: '/audio/person-1-talking.mp3',
      name: 'Person 2',
      rotation: 0,
      coneOuterGain: 0,
      innerAngle: 0,
      outerAngle: 0,
      rolloffFactor: 1,
      volume: 0.6
    }
  ]
  return (
    <AmbientPositionalSound
      state={audioState}
      soundObjects={peopleSoundObjects}
    />
  )
}
