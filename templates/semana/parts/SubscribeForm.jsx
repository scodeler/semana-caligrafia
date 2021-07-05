import TextInput from '../../../components/TextInput'
import { FiLock, FiAlertCircle } from 'react-icons/fi'
import { HiCheckCircle } from 'react-icons/hi'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import * as yup from 'yup'
import axios from 'axios'

const SubscribeForm = props => {
  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [valid, setValid] = useState(false)
  const [loading, setLoading] = useState(false)
  const [hasError, setError] = useState(false)

  const schema = yup.object().shape({
    name: yup.string(3).required(),
    email: yup.string().email().required(),
  })

  useEffect(() => {
    async function triggerValid() {
      const formIsValid = await schema.isValid({ name, email })
      setValid(formIsValid)
    }
    triggerValid()
  })
  const handleName = event => {
    setName(event.target.value)
  }

  const handleEmail = async event => {
    setEmail(event.target.value)
  }

  const handleFormSubmit = async event => {
    event.preventDefault()
    setLoading(true)
    const url = 'https://auth.tipocali.com.br/signup'
    try {
      const response = await axios.post(url, {
        name: name,
        email: email,
        tag: 'PL L3',
      })
      if (response.status === 200) {
        localStorage.setItem('SemanaCaligrafia_L3', response.data.email)
      }
      if (props.mediaPrefix) {
        router.push(`/sucesso-${props.mediaPrefix}`)
      } else {
        router.push(`/sucesso`)
      }
    } catch (error) {
      setError(true)
      setLoading(false)
      console.log(error)
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
      {hasError && (
        <div className='subscribeForm-error'>
          Ocorreu um erro. Tente usar outro email
        </div>
      )}
      <button
        disabled={!valid}
        type='submit'
        className={`submitBtn green ${loading && 'loading'}`}
      >
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
