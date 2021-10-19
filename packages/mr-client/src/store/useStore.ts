/* eslint-disable no-unused-vars */
import create from 'zustand'

export enum GameStateEnum {
  PAUSED = 'PAUSED',
  RUNNING = 'RUNNING',
  FINISHED = 'FINISHED'
}

interface GameState {
  gameState: GameStateEnum
  setGameStartState: () => void
  setGameFinishedState: () => void
  setGamePauseState: () => void
}

const useStore = create<GameState>(set => ({
  gameState: GameStateEnum.PAUSED,
  setGameStartState: () => set({ gameState: GameStateEnum.RUNNING }),
  setGameFinishedState: () => set({ gameState: GameStateEnum.FINISHED }),
  setGamePauseState: () => set({ gameState: GameStateEnum.PAUSED })
}))

export default useStore
