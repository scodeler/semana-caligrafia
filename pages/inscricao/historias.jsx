import Image from 'next/image'
import Head from 'next/head'
import Footer from '../templates/semana/parts/Footer'
import testimonials from '../testimonials'

const Historias = () => {
  return (
    <>
      <Head>
        <title>Histórias Caligráficas</title>
      </Head>
      <section className='historias'>
        <h1 className='success-logo'>
          <Image src='/logo.png' width='430' height='200' layout='responsive' />
        </h1>
        <div className='container'>
          <h2 className='historias-title'>Histórias reais</h2>
          <div className='historias-wrapper'>
            <ul className='historias-list'>
              {testimonials.map(testimonial => (
                <li className='testimonial' key={testimonial.id}>
                  <div className='testimonial-embed'>
                    <iframe
                      width='560'
                      height='315'
                      src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                      title='YouTube video player'
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    />
                  </div>
                  <div className='testimonial-content'>
                    <h3 className='testimonial-title'>{testimonial.title}</h3>
                    <div className='testimonial-text'>
                      {testimonial.excerpt}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Historias
