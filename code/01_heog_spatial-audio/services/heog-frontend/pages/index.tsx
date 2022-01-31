import { Loader } from '@react-three/drei'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

import PointerLock from '../components/PointerLock'

const Scene = dynamic(() => import('../components/Scene'))

const IndexPage: NextPage = () => {
  return (
    <main className='w-screen h-screen'>
      <Scene />
      <Loader />
      <PointerLock />
    </main>
  )
}

export default IndexPage
