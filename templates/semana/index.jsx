import Head from 'next/head'
import Hero from './parts/Hero'
import Profile from './parts/Profile'
import Professor from './parts/Professor'
import Projects from './parts/Projects'
import FormBottom from './parts/FormBottom'
import Footer from './parts/Footer'
import Subjects from './parts/Subjects'

const Semana = props => {
  return (
    <>
      <Head>
        <title>Semana da Caligrafia</title>
      </Head>
      <Hero mediaPrefix={props.mediaPrefix} />
      <Profile />
      <Professor />
      <Subjects />
      <Projects />
      <FormBottom mediaPrefix={props.mediaPrefix} />
      <Footer />
    </>
  )
}

export default Semana
