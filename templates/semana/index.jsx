import Head from 'next/head'
import Hero from './parts/Hero'
import Profile from './parts/Profile'
import Professor from './parts/Professor'
import Projects from './parts/Projects'
import FormBottom from './parts/FormBottom'
import Footer from './parts/Footer'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Semana = props => {
  const router = useRouter()
  useEffect(() => {
    router.push('http://escoladecaligrafia.com')
  }, [])
  return (
    <>
      <Head>
        <title>Semana da Caligrafia</title>
      </Head>
      <Hero mediaPrefix={props.mediaPrefix} />
      <Profile />
      <Professor />
      <Projects />
      <FormBottom mediaPrefix={props.mediaPrefix} />
      <Footer />
    </>
  )
}

export default Semana
