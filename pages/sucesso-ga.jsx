import Image from 'next/image'
import Head from 'next/head'
import { ImWhatsapp, ImFacebook2 } from 'react-icons/im'
import { RiInstagramLine } from 'react-icons/ri'
import { FaTelegram, FaYoutube } from 'react-icons/fa'
import Particles from 'react-tsparticles'
import Footer from '../templates/semana/parts/Footer'

const SuccessPageGA = () => {
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
              <p>
                É importante também que você me RESPONDA, dizendo o que você
                espera do evento para que eu possa trazer muita informação legal
                pra você!{' '}
              </p>
              <p>
                Certifique-se de que não foi para o Spam (pode ser que demore
                alguns minutos até chegar aí).
              </p>
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
              <a
                href='https://www.facebook.com/groups/semanadacaligrafia'
                target='_blank'
                className='step-button button-fb'
                rel='noreferrer'
              >
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
              <a
                href='https://www.instagram.com/tipocali/'
                target='_blank'
                className='step-button button-ig'
                rel='noreferrer'
              >
                <RiInstagramLine />
                Instagram
              </a>
              <a
                href='https://www.youtube.com/tipocali'
                target='_blank'
                className='step-button button-yt'
                rel='noreferrer'
              >
                <FaYoutube />
                Youtube
              </a>
              <a
                href='https://t.me/tipocali'
                target='_blank'
                className='step-button button-tg'
                rel='noreferrer'
              >
                <FaTelegram />
                Telegram
              </a>
            </div>
          </li>
        </ul>
        <Footer />
      </div>
      <Particles
        id='tsparticles'
        options={{
          background: {
            color: {
              value: '#1D2536',
            },
            position: '50% 50%',
            repeat: 'no-repeat',
            size: '20%',
          },
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'repulse',
              },
              onHover: {
                enable: true,
                mode: 'bubble',
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                opacity: 0,
                size: 0,
              },
              grab: {
                distance: 400,
              },
              repulse: {
                distance: 400,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: {
                value: '#ffffff',
              },
              distance: 150,
              opacity: 0.4,
            },
            move: {
              attract: {
                rotate: {
                  x: 600,
                  y: 600,
                },
              },
              enable: true,
              path: {},
              outModes: {
                bottom: 'out',
                left: 'out',
                right: 'out',
                top: 'out',
              },
              random: true,
              speed: 1,
            },
            number: {
              density: {
                enable: true,
              },
              value: 160,
            },
            opacity: {
              random: {
                enable: true,
              },
              value: {
                min: 0,
                max: 1,
              },
              animation: {
                enable: true,
                speed: 1,
              },
            },
            size: {
              random: {
                enable: true,
              },
              value: {
                min: 1,
                max: 3,
              },
              animation: {
                speed: 4,
                minimumValue: 0.3,
              },
            },
          },
        }}
      />
    </section>
  )
}

export default SuccessPageGA
