import { useRouter } from 'next/router'
import { FiLock, FiPenTool } from 'react-icons/fi'
import { AiFillPlayCircle } from 'react-icons/ai'
import { IoLogoFacebook } from 'react-icons/io'
import { ImWhatsapp } from 'react-icons/im'
import classes from '../../classes'

const Classes = props => {
  const router = useRouter()
  const { videoIndex } = router.query
  return (
    <section className='classes'>
      <div id='fb-root'></div>
      <script
        async
        defer
        crossOrigin='anonymous'
        src='https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v11.0&appId=118451698259367&autoLogAppEvents=1'
        nonce='tkACXMq6'
      ></script>
      <div className='videos'>
        <div className='classes-video'>
          <div className='classes-embed'>
            <iframe
              width='560'
              height='315'
              src={`https://www.youtube.com/embed/${props.id}`}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </div>
        </div>
        <nav className='classesMenu'>
          <ul className='classesMenu-list'>
            {classes.map(video => (
              <li
                className={`classesMenu-item ${
                  video.locked ? 'locked' : 'unlocked'
                } ${video.videoId === props.id ? 'active' : ''}`}
                key={video.index}
                onClick={() => {
                  !video.locked && router.push(`/aulas/${video.index}`)
                }}
              >
                <div className='classItem-text'>
                  <span className='classesMenu-label'>{video.label}</span>
                  <h3 className='classesMenu-title'>{video.title}</h3>
                </div>
                <div className='classItem-meta'>
                  {video.locked && (
                    <span className='classItem-status'>
                      <FiLock />
                    </span>
                  )}
                  <span className='classItem-cta'>
                    {!video.locked &&
                      (video.videoId === props.id ? (
                        <span className='classItem-watching'>
                          <AiFillPlayCircle />
                        </span>
                      ) : (
                        <span className='classItem-watch'>
                          <AiFillPlayCircle />
                        </span>
                      ))}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </nav>
        <div className='classes-bottom'>
          <a
            className='facebook-button'
            href='https://www.facebook.com/groups/semanadacaligrafia'
            target='_blank'
            rel='noopener noreferrer'
          >
            <IoLogoFacebook />
            Comunidade no Facebook
          </a>
          {/* <a
            href='https://bit.ly/semana-da-caligrafia-wa'
            className='link-zap'
            target='_blank'
            rel='noopener noreferrer'
          >
            <ImWhatsapp />
            Convidar amigos
          </a> */}
          <a href='/historias' className='link-testimonials'>
            <FiPenTool />
            Histórias de alunos
          </a>
        </div>
        <div className='fbComments'>
          <div
            className='fb-comments'
            data-href={`https://semanadacaligrafia.com.br/aulas/${videoIndex}`}
            data-width='100%'
            data-numposts='20'
          ></div>
        </div>
      </div>
    </section>
  )
}

export default Classes
