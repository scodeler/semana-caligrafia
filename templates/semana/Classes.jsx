import { useRouter } from 'next/router'
import { FiLock, FiRadio, FiUnlock, FiVideo } from 'react-icons/fi'
import { IoLogoFacebook } from 'react-icons/io'
import classes from '../../classes'

const Classes = props => {
  const router = useRouter()

  return (
    <section className='classes'>
      <div className='videos'>
        <div className='container'>
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
                <div className='classItem-icon'>
                  {video.type === 'class' ? <FiVideo /> : <FiRadio />}
                </div>
                <div className='classItem-text'>
                  <span className='classesMenu-label'>{video.label}</span>
                  <h3 className='classesMenu-title'>{video.title}</h3>
                </div>
                <div className='classItem-meta'>
                  {!video.locked && (
                    <span className='classItem-status'>
                      <FiUnlock />
                      Liberado
                    </span>
                  )}
                  {video.locked && (
                    <span className='classItem-status'>
                      <FiLock />
                      {video.date}
                    </span>
                  )}
                  <span className='classItem-cta'>
                    {video.videoId === props.id ? (
                      <span className='classItem-watching'>Assistindo</span>
                    ) : (
                      <span className='classItem-watch'>Assistir</span>
                    )}
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
            Acessar comunidade no Facebook
          </a>
        </div>
      </div>
    </section>
  )
}

export default Classes
