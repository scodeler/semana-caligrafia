import Image from 'next/image'
import Head from 'next/head'
import { ImWhatsapp, ImFacebook2 } from 'react-icons/im'
import { RiInstagramLine } from 'react-icons/ri'
import { FaTelegram, FaYoutube } from 'react-icons/fa'
import Particles from 'react-tsparticles'
import Footer from './parts/Footer'

const SuccessPageEM = () => {
  return (
    <section className='success'>
      <Head>
        <title>Parabéns por se inscrever!</title>
      </Head>
      <div className='container'>
        <h1 className='success-logo'>
          <Image
            src='/Logo-LetrasComAlma-negativo.png'
            width='482'
            height='255'
            layout='responsive'
          />
        </h1>
        <div className='success-message'>
          <p>Parabéns pela iniciativa de se inscrever nesta jornada!</p>
        </div>
        <h2 className='hero-title'>Os próximos passos</h2>
        <ul className='success-list steps'>
          <li className='success-item step'>
            <h3 className='step-title'>1. Confirme seu e-mail</h3>
            <div className='step-text'>
              <p>
                Te enviei o primeiro material que você vai precisar para a
                Semana da Caligrafia. Confere na sua caixa de entrada e leia com
                atenção as instruções.
              </p>
              <p>
                É importante que você me RESPONDA no e-mail qual é sua maior
                expectativa neste evento, pra eu poder trazer muita informação
                legal pra você.
              </p>
              <p>
                Ah, certifique-se de que não foi para o SPAM. Às vezes acontece.
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
              <a
                href='/whatsapp'
                target='_blank'
                className='step-button button-zap'
              >
                <ImWhatsapp />
                Entrar no Grupo
              </a>
            </div>
          </li>
          <li className='success-item step'>
            <h3 className='step-title'>3. Entre na Comunidade do Facebook</h3>
            <div className='step-text'>
              <p>
                Não temos sala de aula mas temos uma Comunidade! Eu acho
                fundamental essa troca entre eu e você, e entre você e a turma.
              </p>
              <p>
                Lá, eu também vou liberar os materiais e algumas tarefas,
                importantes para você tirar o maior proveito do workshop.
              </p>
            </div>
            <div className='step-buttons'>
              <a
                href='https://www.facebook.com/groups/semamadacaligrafia.letrascomalma/'
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

export default SuccessPageEM
