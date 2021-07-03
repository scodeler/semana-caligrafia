import Head from 'next/head'
import Hero from './parts/Hero'
import Profile from './parts/Profile'
import Video from './parts/Video'
import Professor from './parts/Professor'
import Projects from './parts/Projects'
import FormBottom from './parts/FormBottom'
import Footer from './parts/Footer'

const Semana = props => {
  return (
    <>
      <Head>
        <title>Semana da Caligrafia</title>
      </Head>
      <Hero mediaPrefix={props.mediaPrefix} />
      <Profile />
      <Video />
      <Professor />
      <Projects />
      <FormBottom mediaPrefix={props.mediaPrefix} />
      <Footer />
    </>
  )
}

export default Semana
