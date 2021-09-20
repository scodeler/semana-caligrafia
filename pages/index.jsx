import { useRouter } from 'next/router'
import { useEffect } from 'react'

const HomeRedirect = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('http://escoladecaligrafia.com')
  }, [])

  return <>...</>
}

export default HomeRedirect
