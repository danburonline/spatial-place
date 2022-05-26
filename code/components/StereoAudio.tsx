import ReactAudioPlayer from 'react-audio-player'

export default function StereoAudio({ volume = 0.25 }) {
  return <ReactAudioPlayer src="/audio/crowd-talking-sound.mp3" volume={volume} autoPlay loop />
}
