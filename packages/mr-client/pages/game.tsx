import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import dynamic from 'next/dynamic'

import Audio from '../src/Audio/Audio'
import CancelButton from '../src/Buttons/CancelButton'
import PlayerControls from '../src/Buttons/PlayerControls'
import EndScreen from '../src/EndScreen/EndScreen'
import CountDown from '../src/Timers/CountDown'
import StopWatch from '../src/Timers/StopWatch'
import useStore, { GameStateEnum } from '../src/store/useStore'

const GameScene = dynamic(() => import('../src/GameScene/GameScene'), {
  ssr: false
})

export default function Game(): JSX.Element {
  const { gameState } = useStore()

  return (
    <main className='h-screen text-white bg-main'>
      {gameState === GameStateEnum.PREPARE && <CountDown />}

      {gameState === GameStateEnum.RUNNING && (
        <>
          <StopWatch />
          <CancelButton />
        </>
      )}

      {gameState === GameStateEnum.FINISHED && <EndScreen />}
      <PlayerControls />
      <Audio />
      <GameScene />
    </main>
  )
}

export const getServerSideProps = withPageAuthRequired()
