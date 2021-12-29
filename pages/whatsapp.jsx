import { useRouter } from 'next/router'
import { useEffect } from 'react'
import whatsappLink from '../whatsapp'
import { ImWhatsapp } from 'react-icons/im'
import axios from 'axios'
import groups from '../groups'

const WhatsappRedirect = () => {
  const router = useRouter()
  const fetchGroup = async () => {
    const url = '/api/whatsapp'
    const response = await axios.get(url)
    return response.data
  }
  useEffect(() => {
    setTimeout(async () => {
      const whatsappData = await fetchGroup()
      const whatsappLink = groups[whatsappData.group]
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
