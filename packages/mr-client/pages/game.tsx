import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import dynamic from 'next/dynamic'
import Head from 'next/head'

import Audio from '../src/Audio/Audio'
import PlayerControls from '../src/Buttons/PlayerControls'
import RestartButton from '../src/Buttons/RestartButton'
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
    <>
      <Head>
        <title>Game – Mind Racing</title>
        <meta
          name='description'
          content='A proof of concept frontend for the Mind Racing BCI application.'
        />
      </Head>
      <main className='h-screen text-white bg-main'>
        {gameState === GameStateEnum.PREPARE && <CountDown />}

        {gameState === GameStateEnum.RUNNING && (
          <>
            <StopWatch />
            <RestartButton />
          </>
        )}

        {gameState === GameStateEnum.FINISHED && <EndScreen />}
        <PlayerControls />
        <Audio />
        <GameScene />
      </main>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired()
