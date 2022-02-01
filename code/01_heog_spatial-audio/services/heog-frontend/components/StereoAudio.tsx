import ReactAudioPlayer from 'react-audio-player'

export default function StereoAudio({ volume = 1.0 }) {
  return (
    <ReactAudioPlayer
      src='/audio/crowd-talking-sound.mp3'
      volume={volume}
      autoPlay
      loop
    />
  )
}
