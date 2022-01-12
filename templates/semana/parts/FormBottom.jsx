import Image from 'next/image'
import SubscribeForm from './SubscribeForm'

const FormBottom = () => {
  return (
    <section className='formBottom'>
      <div className='formBottom-top'>
        <h1 className='success-logo'>
          <Image
            src='/Logo-LetrasComAlma-negativo.png'
            width={482 * 0.8}
            height={255 * 0.8}
            layout='responsive'
          />
        </h1>
        <div className='formBottom-date'>
          <p>de 31/jan a 06/fev</p>
        </div>
      </div>
      <div className='container'>
        <div className='formBottom-box'>
          <div className='formBottom-form'>
            <SubscribeForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormBottom
