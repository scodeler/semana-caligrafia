import Image from 'next/image'
import { FiCalendar, FiPenTool, FiUsers, FiWifi } from 'react-icons/fi'
import SubscribeForm from './SubscribeForm'

const Hero = props => {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='hero-left'>
          <h1 className='logo'>
            <Image
              src='/logo.png'
              width='430'
              height='200'
              layout='responsive'
            />
          </h1>
          <h2 className='hero-title'>
            Você vai transformar sua letra em arte em apenas 7 dias
          </h2>
          <div className='hero-text'>
            <p>
              Vou te contar o passo a passo, letra por letra, o caminho para
              você deixar de ser só um espectador e entrar no mundo mágico das
              letras de uma vez, mesmo que não tenha conhecimento do assunto ou
              se sinta seguro.
            </p>
          </div>
          <ul className='hero-topics'>
            <li className='hero-topic'>
              <FiCalendar className='hero-topicIcon' />
              19 a 24 de julho
            </li>
            <li className='hero-topic'>
              <FiPenTool className='hero-topicIcon' />
              Conteúdo Prático
            </li>
            <li className='hero-topic'>
              <FiWifi className='hero-topicIcon' />
              Online e gratuito
            </li>
            <li className='hero-topic'>
              <FiUsers className='hero-topicIcon' />
              Comunidade Exclusiva
            </li>
          </ul>
        </div>
        <div className='hero-form'>
          <figure className='hero-AuthorImage'>
            <Image src='/reginato.jpg' width='550' height='295' />
          </figure>
          <div className='hero-formContent'>
            <SubscribeForm mediaPrefix={props.mediaPrefix} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
