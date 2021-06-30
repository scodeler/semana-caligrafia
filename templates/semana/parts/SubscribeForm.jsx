import TextInput from '../../../components/TextInput'
import { FiLock, FiAlertCircle } from 'react-icons/fi'
import { HiCheckCircle } from 'react-icons/hi'

const SubscribeForm = () => {
  return (
    <form className='subscribeForm'>
      <h3 className='subscribeForm-title'>Inscrição Gratuita</h3>
      <TextInput
        label='Nome'
        name='userName'
        placeholder='Como quer ser chamada(o)?'
      />
      <TextInput
        label='Email'
        name='userEmail'
        placeholder='Qual o seu melhor email?'
        type='email'
      />
      <span className='subscribeForm-disclaimer'>
        <HiCheckCircle className='subscribeForm-alert' />
        Ao enviar este formulário você concorda em receber nossas comunicações
      </span>
      <button type='submit' className='submitBtn green'>
        Garantir minha vaga
      </button>
      <div className='subscribeForm-safety'>
        <div className='subscribeForm-safetyItem'>
          <FiLock className='subscribeForm-safetyIcon' />
          Suas informações estão seguras!
        </div>
        <div className='subscribeForm-safetyItem'>
          <FiAlertCircle className='subscribeForm-safetyIcon' />
          Somos contra todo tipo de spam
        </div>
      </div>
    </form>
  )
}

export default SubscribeForm
