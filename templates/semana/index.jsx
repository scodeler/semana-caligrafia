import Image from 'next/image'
import Head from 'next/head'
import TextInput from '../../components/TextInput'
import {
  FiCalendar,
  FiPenTool,
  FiUsers,
  FiWifi,
  FiLock,
  FiAlertCircle,
} from 'react-icons/fi'
import { HiCheckCircle } from 'react-icons/hi'

const Semana = () => {
  return (
    <>
      <Head>
        <title>Semana da Caligrafia</title>
      </Head>
      <section className='hero'>
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
        <div className='hero-form subscribeForm'>
          <figure className='subscribeForm-image'>
            <Image src='/reginato.jpg' width='550' height='295' />
          </figure>
          <div className='subscribeForm-content'>
            <h3 className='subscribeForm-title'>Inscrição Gratuita</h3>
            <TextInput
              label='Nome'
              name='userName'
              placeholder='Como quer ser chamada(o)?'
            />
            <TextInput
              label='Email'
              name='userEmail'
              placeholder='Qual o seu melhor email?'
              type='email'
            />
            <span className='subscribeForm-disclaimer'>
              <HiCheckCircle className='subscribeForm-alert' />
              Ao enviar este formulário você concorda em receber nossas
              comunicações
            </span>
            <button type='submit' className='submitBtn green'>
              Garantir minha vaga
            </button>
            <div className='subscribeForm-safety'>
              <div className='subscribeForm-safetyItem'>
                <FiLock className='subscribeForm-safetyIcon' />
                Suas informações estão seguras!
              </div>
              <div className='subscribeForm-safetyItem'>
                <FiAlertCircle className='subscribeForm-safetyIcon' />
                Somos contra todo tipo de spam
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Semana
