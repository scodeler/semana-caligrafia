import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Classes from '../../templates/semana/Classes'
import classes from '../../classes'
import Footer from '../../templates/semana/parts/Footer'

const Aula = () => {
  const router = useRouter()
  const { id, src } = router.query

  const currentClass = classes.filter(item => item.index === parseFloat(id))

  return (
    <>
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
      </section>
      <Footer />
    </>
  )
}

export default Aula
