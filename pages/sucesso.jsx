import Image from 'next/image'
import Head from 'next/head'
import { ImWhatsapp, ImFacebook2 } from 'react-icons/im'
import { RiInstagramLine } from 'react-icons/ri'
import { FaTelegram, FaYoutube } from 'react-icons/fa'

const SuccessPage = () => {
  return (
    <section className='success'>
      <Head>
        <title>Parabéns por se inscrever!</title>
      </Head>
      <div className='container'>
        <h1 className='success-logo'>
          <Image src='/logo.png' width='430' height='200' layout='responsive' />
        </h1>
        <div className='success-message'>
          <p>Parabéns pela iniciativa de se inscrever nesta jornada!</p>
        </div>
        <h2 className='hero-title'>Os próximos 5 passos</h2>
        <ul className='success-list steps'>
          <li className='success-item step'>
            <h3 className='step-title'>1. Confirme seu e-mail</h3>
            <div className='step-text'>
              Confirme se recebeu meu e-mail de boas vindas. Certifique-se de
              que não foi para o Spam (pode ser que demore alguns minutos até
              chegar aí)
            </div>
          </li>
          <li className='success-item step'>
            <h3 className='step-title'>2. Entre no grupo de Whatsapp</h3>
            <div className='step-text'>
              É por lá que a gente vai se comunicar com você. Mas não se
              preocupe, o grupo será silenciado e só eu e minha equipe vamos
              mandar mensagens.
            </div>
            <div className='step-buttons'>
              <a href='#' target='_blank' className='step-button button-zap'>
                <ImWhatsapp />
                Entrar no Grupo
              </a>
            </div>
          </li>
          <li className='success-item step'>
            <h3 className='step-title'>3. Entre na Comunidade do Facebook</h3>
            <div className='step-text'>
              Nesta comunidade vamos construir um ambiente de troca, em que
              vamos estar juntos nesta semana de tanto aprendizado. Lá vamos
              liberar as apostilas e tarefas para você tirar o maior proveito
              deste evento.
            </div>
            <div className='step-buttons'>
              <a href='#' target='_blank' className='step-button button-fb'>
                <ImFacebook2 />
                Entrar na Comunidade
              </a>
            </div>
          </li>
          <li className='success-item step'>
            <h3 className='step-title'>4. Me siga nas redes sociais</h3>
            <div className='step-text'>
              Todos os dias eu posto conteúdos que podem te ajudar, não só neste
              evento, mas em toda a sua rota de aprendizado na caligrafia. Me
              acompanhe no Instagram, Youtube e Telegram para estar por dentro
              sempre!
            </div>
            <div className='step-buttons'>
              <a href='#' target='_blank' className='step-button button-ig'>
                <RiInstagramLine />
                Instagram
              </a>
              <a href='#' target='_blank' className='step-button button-yt'>
                <FaYoutube />
                Youtube
              </a>
              <a href='#' target='_blank' className='step-button button-tg'>
                <FaTelegram />
                Telegram
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default SuccessPage
