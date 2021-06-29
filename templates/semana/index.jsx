import Image from 'next/image'
import Head from 'next/head'

const Semana = () => {
  return (
    <>
      <Head>
        <title>Semana da Caligrafia</title>
      </Head>
      <h1 className="logo">
        <Image src="/logo.png" width="430" height="200" layout="responsive" />
      </h1>
    </>
  )
}

export default Semana