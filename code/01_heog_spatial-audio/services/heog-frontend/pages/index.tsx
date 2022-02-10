import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const IndexPage: NextPage = () => {
  const router = useRouter()

  return (
    <main className='flex content-center justify-center w-screen h-screen'>
      <button
        name='startGame'
        className='px-4 py-2 m-auto text-white bg-gray-800 rounded hover:bg-gray-700'
        onClick={() => router.push('/demo')}
      >
        FPV Demo
      </button>
    </main>
  )
}

export default IndexPage
