const Subjects = () => {
  return (
    <section className='subjects'>
      <div className='container'>
        <h3 className='subjects-title'>O que você vai aprender:</h3>
        <div className='subjects-topics'>
          <ul className='subjects-list'>
            <li className='subjects-item subject'>
              <div className='subject-calendar'>
                <div className='subject-month'>Nov</div>
                <div className='subject-day'>29</div>
              </div>
              <div className='subject-content'>
                <h3 className='subject-title'>
                  Um novo olhar para suas letras
                </h3>
                <div className='subject-text'>
                  <p>
                    Entenda como a caligrafia pode ser uma excelente{' '}
                    <strong>oportunidade</strong> para você ter um{' '}
                    <strong>momento de paz</strong>, praticando uma atividade
                    repleta de <strong>propósito e significado</strong>, podendo
                    até gerar uma renda extra.
                  </p>
                </div>
              </div>
            </li>
            <li className='subjects-item subject'>
              <div className='subject-calendar'>
                <div className='subject-month'>Dez</div>
                <div className='subject-day'>01</div>
              </div>
              <div className='subject-content'>
                <h3 className='subject-title'>Transformando letras em arte</h3>
                <div className='subject-text'>
                  <p>
                    Você vai aprender os{' '}
                    <strong>5 fundamentos da caligrafia</strong>, que vão fazer
                    com que você seja{' '}
                    <strong>capaz de criar sua primeira obra de arte</strong>{' '}
                    utilizando apenas as suas letras.
                  </p>
                </div>
              </div>
            </li>
            <li className='subjects-item subject'>
              <div className='subject-calendar'>
                <div className='subject-month'>Dez</div>
                <div className='subject-day'>03</div>
              </div>
              <div className='subject-content'>
                <h3 className='subject-title'>Vencendo últimos obstáculos</h3>
                <div className='subject-text'>
                  <p>
                    Vou te mostrar o que te <strong>impede de alcançar</strong>{' '}
                    seus objetivos com a caligrafia e como não deixar que essas
                    barreiras <strong>distanciem da sua realização</strong>{' '}
                    pessoal e/ou profissional .
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Subjects
