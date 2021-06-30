import Head from 'next/head'
import Hero from './parts/Hero'
import Profile from './parts/Profile'
import Video from './parts/Video'
import Professor from './parts/Professor'

const Semana = () => {
  return (
    <>
      <Head>
        <title>Semana da Caligrafia</title>
      </Head>
      <Hero />
      <Profile />
      <Video />
      <Professor />
    </>
  )
}

export default Semana
