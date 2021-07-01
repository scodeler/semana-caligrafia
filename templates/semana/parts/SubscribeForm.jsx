import TextInput from '../../../components/TextInput'
import { FiLock, FiAlertCircle } from 'react-icons/fi'
import { HiCheckCircle } from 'react-icons/hi'
import { useState } from 'react'
import * as yup from 'yup'

const SubscribeForm = () => {
  const [error, setError] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const schema = yup.object().shape({
    name: yup.string(3).required(),
    email: yup.string().email().required(),
  })

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    const formIsValid = await schema.isValid({ name, email })
    if (formIsValid) {
      console.log('sucess')
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <form className='subscribeForm' onSubmit={handleFormSubmit}>
      <h3 className='subscribeForm-title'>Inscrição Gratuita</h3>
      <TextInput
        label='Nome'
        name='userName'
        onChange={handleName}
        value={name}
        placeholder='Como quer ser chamada(o)?'
      />
      <TextInput
        label='Email'
        name='userEmail'
        value={email}
        onChange={handleEmail}
        placeholder='Qual o seu melhor email?'
        type='email'
      />
      <span className='subscribeForm-disclaimer'>
        <HiCheckCircle className='subscribeForm-alert' />
        Ao enviar este formulário você concorda em receber nossas comunicações
      </span>
      {error && (
        <p className='subscribeForm-error'>Preencha os dados corretamente</p>
      )}
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
