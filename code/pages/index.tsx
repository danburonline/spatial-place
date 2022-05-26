import { PlayIcon } from '@heroicons/react/solid'
import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <main className="flex content-center justify-center w-screen h-screen">
      <Link href="/demo">
        <a className="flex items-center px-4 py-3 m-auto text-white bg-gray-800 rounded hover:bg-gray-700">
          <PlayIcon className="w-5 h-5 mr-2" />
          Pointerlock Demo
        </a>
      </Link>
    </main>
  )
}

export default Home
