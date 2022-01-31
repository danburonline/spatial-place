import { Loader } from '@react-three/drei'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('../components/scene'))

const IndexPage: NextPage = () => {
  return (
    <main className='w-screen h-screen'>
      <Scene />
      <Loader />
    </main>
  )
}

export default IndexPage
