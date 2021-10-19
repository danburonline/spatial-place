/* eslint-disable no-unused-vars */
import { STATEMENT_OR_BLOCK_KEYS } from '@babel/types'
import create from 'zustand'

export enum GameStateEnum {
  PAUSED = 'PAUSED',
  RUNNING = 'RUNNING',
  FINISHED = 'FINISHED'
}

interface GameState {
  gameState: GameStateEnum
  neededTime: number
  setGameStartState: () => void
  setGameFinishedState: () => void
  setGamePauseState: () => void
  setFinalNeededTime: (timeNeeded: number) => void
}

const useStore = create<GameState>(set => ({
  gameState: GameStateEnum.PAUSED,
  neededTime: 0,
  setGameStartState: () => set({ gameState: GameStateEnum.RUNNING }),
  setGameFinishedState: () => set({ gameState: GameStateEnum.FINISHED }),
  setGamePauseState: () => set({ gameState: GameStateEnum.PAUSED }),
  setFinalNeededTime: (timeNeeded: number) => set({ neededTime: timeNeeded })
}))

export default useStore
