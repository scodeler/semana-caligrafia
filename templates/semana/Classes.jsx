import { useRouter } from 'next/router'
import { FiLock } from 'react-icons/fi'
import { ImWhatsapp } from 'react-icons/im'
import { AiFillPlayCircle } from 'react-icons/ai'
import classes from '../../classes'
import { useEffect } from 'react'

const Classes = props => {
  const router = useRouter()
  useEffect(() => {
    router.push('/inscricao')
  }, [])
  return (
    <section className='classes'>
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
            className='link-whatsapp'
            href='/whatsapp-vip'
            target='_blank'
            rel='noopener noreferrer'
          >
            <ImWhatsapp />
            Entrar no Grupo VIP
          </a>
        </div>
      </div>
    </section>
  )
}

export default Classes
