import { useRouter } from 'next/router'

import useStore, { GameStateEnum } from '../store/useStore'

export default function RestartButton(): JSX.Element {
  const router = useRouter()
  const { gameState } = useStore()

  return (
    <button
      onClick={() => router.reload()}
      className={
        gameState === GameStateEnum.RUNNING
          ? 'absolute z-10 top-4 left-4 px-4 py-2 text-white bg-black rounded-full'
          : 'px-4 py-2 text-white bg-black rounded-full'
      }
    >
      Restart the game
    </button>
  )
}
