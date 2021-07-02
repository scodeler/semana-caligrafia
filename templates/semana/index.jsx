import Head from 'next/head'
import Hero from './parts/Hero'
import Profile from './parts/Profile'
import Video from './parts/Video'
import Professor from './parts/Professor'
import Projects from './parts/Projects'
import FormBottom from './parts/FormBottom'
import Footer from './parts/Footer'

const Semana = () => {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TCG654J');`,
          }}
        />
        <title>Semana da Caligrafia</title>
      </Head>
      <body>
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-TCG654J'
            height='0'
            width='0'
            style='display:none;visibility:hidden'
          ></iframe>
        </noscript>
        <Hero />
        <Profile />
        <Video />
        <Professor />
        <Projects />
        <FormBottom />
        <Footer />
      </body>
    </>
  )
}

export default Semana
