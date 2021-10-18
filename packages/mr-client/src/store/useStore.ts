/* eslint-disable no-unused-vars */
import create from 'zustand'

export enum GameStateEnum {
  PAUSED = 'PAUSED',
  RUNNING = 'RUNNING',
  STOPPED = 'STOPPED'
}

interface GameState {
  gameState: GameStateEnum
  setGameStartState: () => void
  setGameEndState: () => void
  setGamePauseState: () => void
}

const useStore = create<GameState>(set => ({
  gameState: GameStateEnum.PAUSED,
  setGameStartState: () => set({ gameState: GameStateEnum.RUNNING }),
  setGameEndState: () => set({ gameState: GameStateEnum.STOPPED }),
  setGamePauseState: () => set({ gameState: GameStateEnum.PAUSED })
}))

export default useStore
