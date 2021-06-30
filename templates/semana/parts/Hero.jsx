import Image from 'next/image'
import { FiCalendar, FiPenTool, FiUsers, FiWifi } from 'react-icons/fi'
import SubscribeForm from './SubscribeForm'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-left'>
        <h1 className='logo'>
          <Image src='/logo.png' width='430' height='200' layout='responsive' />
        </h1>
        <h2 className='hero-title'>
          Você vai transformar sua letra em arte em apenas 7 dias
        </h2>
        <div className='hero-text'>
          <p>
            Vou te mostrar tudo o que eu fiz e que me ajudou a chegar onde eu
            cheguei, para você deixar se ser só um espectador e{' '}
            <strong className='red'>entrar no mundo mágico das letras</strong>{' '}
            de uma vez.
          </p>
        </div>
        <ul className='hero-topics'>
          <li className='hero-topic'>
            <FiCalendar className='hero-topicIcon' />
            19 a 24 de julho
          </li>
          <li className='hero-topic'>
            <FiPenTool />
            Conteúdo Prático
          </li>
          <li className='hero-topic'>
            <FiWifi />
            Online e gratuito
          </li>
          <li className='hero-topic'>
            <FiUsers />
            Comunidade Exclusiva
          </li>
        </ul>
      </div>
      <div className='hero-form'>
        <figure className='hero-AuthorImage'>
          <Image src='/reginato.jpg' width='550' height='295' />
        </figure>
        <div className='hero-formContent'>
          <SubscribeForm />
        </div>
      </div>
    </section>
  )
}

export default Hero
