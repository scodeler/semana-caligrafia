import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Classes from '../../templates/semana/Classes'
import classes from '../../classes'
import Footer from '../../templates/semana/parts/Footer'
import { useEffect } from 'react'

const Aula = () => {
  const router = useRouter()
  const { id, src } = router.query

  const currentClass = classes.filter(item => item.index === parseFloat(id))

  useEffect(() => {
    router.push('http://escoladecaligrafia.com')
  }, [])

  return (
    <>
      <div id='fb-root'></div>
      <script
        async
        defer
        crossOrigin='anonymous'
        src='https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v9.0&appId=118451698259367&autoLogAppEvents=1'
        nonce='3tpY9zI7'
      ></script>
      <section className='classesPage'>
        <div className='container'>
          <h1 className='logo'>
            <Image
              src='/logo.png'
              width='430'
              height='200'
              layout='responsive'
            />
          </h1>
          {currentClass &&
            currentClass.map(
              item =>
                !item.locked && (
                  <>
                    <Classes id={currentClass[0].videoId} />
                    <Head>
                      <title>
                        {currentClass[0].title} {src && `[${src}]`} - Semana da
                        Caligrafia
                      </title>
                    </Head>
                  </>
                )
            )}
        </div>
        <div className='fbComments'>
          <div
            className='fb-comments'
            data-href={`https://semanadacaligrafia.com.br/aulas/${id}`}
            data-width='100%'
            data-numposts='20'
            data-order-by='reverse_time'
          ></div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Aula
