import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Page404(): void {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [router])

  return null
}
