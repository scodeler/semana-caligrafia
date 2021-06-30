import Head from 'next/head'
import Hero from './parts/Hero'
import Profile from './parts/Profile'
import Video from './parts/Video'
import Professor from './parts/Professor'
import Projects from './parts/Projects'

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
      <Projects />
    </>
  )
}

export default Semana
