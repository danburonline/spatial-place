import { useEffect } from 'react'
import useSound from 'use-sound'

import useStore, { GameStateEnum } from '../../src/store/useStore'

export default function Audio(): JSX.Element {
  const [play, { stop }] = useSound('music/game-music.mp3')
  const { gameState } = useStore()

  useEffect(() => {
    if (gameState === GameStateEnum.RUNNING) {
      play()
    }
    stop()
  }, [gameState, play, stop])

  return null
}
