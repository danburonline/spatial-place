import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Page404() {
  const router = useRouter()

  useEffect(() => {
    // Redirect users to the homepage when they visit 404
    router.push('/')
  }, [router])

  return null
}
