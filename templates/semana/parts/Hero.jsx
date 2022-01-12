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
              width='482'
              height='255'
              layout='responsive'
            />
          </h1>
          <h2 className='hero-title'>
            Sinta-se <span className='red'>realizada</span> através da
            caligrafia e tenha uma{' '}
            <span className='red'>válvula de escape</span> no seu dia a dia
          </h2>
          <div className='hero-text'>
            <p>
              Encontre na caligrafia uma atividade deliciosa, que vai mandar
              embora toda aquela angústia e o peso das tarefas do dia a dia,
              aprenda a criar coisas belas, e quem sabe até gerar uma renda
              extra no futuro.
            </p>
          </div>
          <ul className='hero-topics'>
            <li className='hero-topic'>
              <FiCalendar className='hero-topicIcon' />
              31/jan a 06/fev
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
