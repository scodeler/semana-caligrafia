import Image from 'next/image'

const Professor = () => {
  return (
    <section className='professor'>
      <div className='container'>
        <figure className='professor-picture'>
          <Image src='/thiago-reginato.jpg' width='595' height='625' />
        </figure>
        <div className='professor-content'>
          <h3 className='professor-title'>Serei seu guia nesta jornada</h3>
          <div className='professor-text'>
            <p>
              Me chamo Thiago Reginato, conhecido como TIPOCALI no meio
              artístico. Tenho mais de 10 anos de experiência com as letras e
              vários projetos premiados.
            </p>
            <p>
              Sou fundador da Escola de Caligrafia com uma comunidade de
              apaixonados por letras!
            </p>
            <p>
              Acredito que a Caligrafia pode transformar a vida das pessoas, não
              só no campo profissional mas, principalmente, no campo pessoal.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Professor
