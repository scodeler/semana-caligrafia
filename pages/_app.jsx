import Head from 'next/head'
import '../styles/style.scss'

const MyApp = ({ Component, pageProps }) => {
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
        <meta charSet='utf-8' />
        <meta
          property='og:url'
          content='http://www.semanadacaligrafia.com.br/'
        />
        <meta property='og:title' content='Inscreva-se: Semana da Caligrafia' />
        <meta
          property='og:description'
          content='Transforme suas letras em arte neste evento 100% online e gratuito'
        />
        <meta property='og:image' content='/sharing-image.png' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='627' />
        <meta property='og:type' content='website' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='stylesheet' href='https://use.typekit.net/fsm0zgf.css' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <noscript>
        <iframe
          src='https://www.googletagmanager.com/ns.html?id=GTM-TCG654J'
          height='0'
          width='0'
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
