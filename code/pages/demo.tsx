import { A11yUserPreferences } from '@react-three/a11y'
import { Loader } from '@react-three/drei'
import dynamic from 'next/dynamic'

import PointerLock from '../components/PointerLock'
import StereoAudio from '../components/StereoAudio'

const Scene = dynamic(() => import('../components/Scene'))

export default function DemoPage() {
  return (
    <main className='w-screen h-screen'>
      <A11yUserPreferences>
        <Scene />
      </A11yUserPreferences>
      <Loader />
      <PointerLock />
      <StereoAudio />
    </main>
  )
}
