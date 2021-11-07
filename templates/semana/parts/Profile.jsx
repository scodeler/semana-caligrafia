const Profile = () => {
  return (
    <section className='profile'>
      <div className='container'>
        <div className='profile-box'>
          <h2 className='profile-title'>
            Quem está convidado para esta jornada?
          </h2>
          <ul className='profile-list'>
            <li className='profileTop'>
              <strong>Tempo de paz e relaxamento:</strong> Caso a sua rotina
              esteja puxada, ou mesmo sem graça, a Semana da Caligrafia irá
              trazer cor e luz para os seus dias
            </li>
            <li className='profileTop'>
              <strong>Começando do zero:</strong> Se você não sabe por onde
              começar na caligrafia ou está no início e deseja aprender uma nova
              atividade artística prazerosa e até lucrativa, essa semana é pra
              você
            </li>
            <li className='profileTop'>
              <strong>Apaixonados por arte:</strong> Você ama atividades
              manuais, adora escrever de maneira bonita mas se sente
              despreparada(o) ou insegura(o), essa semana é para você
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Profile
