import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ImWhatsapp } from 'react-icons/im'
import whatsappVipLink from '../whatsapp-vip'

const WhatsappRedirect = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push(whatsappVipLink)
    }, 1000)
  })
  return (
    <section className='whatsappRedirect'>
      <div className='container'>
        <ImWhatsapp className='whatsappIcon' />
        <h2 className='whatsappRedirect-title'>Carregando grupo</h2>
      </div>
    </section>
  )
}

export default WhatsappRedirect
