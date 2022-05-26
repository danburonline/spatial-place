import { Loader } from '@react-three/drei'
import dynamic from 'next/dynamic'

import PointerLockIndicator from '../components/PointerLockIndicator'
import SectionsOverlay from '../components/SectionsOverlay'
import StereoAudio from '../components/StereoAudio'

const Scene = dynamic(() => import('../components/Scene'))

export default function DemoPage() {
  return (
    <main className="w-screen h-screen">
      <SectionsOverlay />
      <Scene />
      <Loader />
      <PointerLockIndicator />
      <StereoAudio />
    </main>
  )
}
