import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'

export default function Home({ isConnected }) {
  return (
    <div className='container'>
      <Head>
        <title>Convite</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { client, db } = await connectToDatabase()

  const isConnected = await client.isConnected()
  const users = await db.collection('convites')
  console.log(users)

  return {
    props: { isConnected },
  }
}
