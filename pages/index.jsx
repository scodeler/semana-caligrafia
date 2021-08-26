import { useRouter } from 'next/router'
import { useEffect } from 'react'

const HomeRedirect = () => {
  const router = useRouter()
  useEffect(() => {
    router.push(`/inscricao`)
  }, [])

  return <>...</>
}

export default HomeRedirect
