import { useRouter } from 'next/router'
import { useEffect } from 'react'
import whatsappLink from '../whatsapp'
import { ImWhatsapp } from 'react-icons/im'

const WhatsappRedirect = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push(whatsappLink)
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
