import AmbientPositionalSound from './AmbientPositionalSound'

export default function PositionalAudio() {
  const peopleSoundObjects = [
    {
      id: 1,
      x: 2.5,
      y: 1,
      z: 0,
      filePath: '/audio/person-1-talking.mp3',
      name: 'Cao',
      rotation: 0,
      coneOuterGain: 0,
      innerAngle: 0,
      outerAngle: 0,
      rolloffFactor: 1,
      volume: 1
    },
    {
      id: 2,
      x: -2.5,
      y: 1,
      z: 0,
      filePath: '/audio/person-2-talking.mp3',
      name: 'Katja',
      rotation: 0,
      coneOuterGain: 0,
      innerAngle: 0,
      outerAngle: 0,
      rolloffFactor: 1,
      volume: 1
    },
    {
      id: 3,
      x: 0,
      y: 1,
      z: 2.5,
      filePath: '/audio/person-3-talking.mp3',
      name: 'Mark',
      rotation: 0,
      coneOuterGain: 0,
      innerAngle: 0,
      outerAngle: 0,
      rolloffFactor: 1,
      volume: 1
    },
    {
      id: 4,
      x: 0,
      y: 1,
      z: -2.5,
      filePath: '/audio/person-4-talking.mp3',
      name: 'Sam',
      rotation: 0,
      coneOuterGain: 0,
      innerAngle: 0,
      outerAngle: 0,
      rolloffFactor: 1,
      volume: 1
    },
    {
      id: 5,
      x: 2.5,
      y: 1,
      z: -2.5,
      filePath: '/audio/person-5-talking.mp3',
      name: 'Elias',
      rotation: 0,
      coneOuterGain: 0,
      innerAngle: 0,
      outerAngle: 0,
      rolloffFactor: 1,
      volume: 1
    }
  ]

  return <AmbientPositionalSound soundObjects={peopleSoundObjects} />
}
