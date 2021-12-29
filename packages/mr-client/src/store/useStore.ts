/* eslint-disable no-unused-vars */
import create from 'zustand'

export enum GameStateEnum {
  PREPARE = 'PREPARE',
  PAUSED = 'PAUSED',
  RUNNING = 'RUNNING',
  FINISHED = 'FINISHED'
}

export type GameState = {
  gameState: GameStateEnum
  neededTime: number
  setGameStartState: () => void
  setGameFinishedState: () => void
  setGamePauseState: () => void
  setFinalNeededTime: (timeNeeded: number) => void
}

const useStore = create<GameState>(set => ({
  gameState: GameStateEnum.PREPARE, // Default game state is `PREPARE`
  neededTime: 0,
  setGameStartState: () => set({ gameState: GameStateEnum.RUNNING }),
  setGameFinishedState: () => set({ gameState: GameStateEnum.FINISHED }),
  setGamePauseState: () => set({ gameState: GameStateEnum.PAUSED }),
  setFinalNeededTime: (timeNeeded: number) => set({ neededTime: timeNeeded })
}))

export default useStore
