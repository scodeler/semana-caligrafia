import Image from 'next/image'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <h3 className='logo-tipocali'>
          <Image src='/tipocali-logo.svg' width={135} height={95} />
        </h3>
        <p className='footer-thanks'>
          Obrigado e ótimas letras
          <br />
          #AlmaCalma
        </p>
        <p className='copyright'>
          &copy; 2020 Maquinário Webdesign LTDA. Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}

export default Footer
