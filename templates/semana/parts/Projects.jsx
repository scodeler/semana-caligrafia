import Image from 'next/image'

const images = [
  { id: 0, file: 'italicas-rosa.jpg' },
  { id: 1, file: 'italicas-parallel.jpg' },
  { id: 2, file: 'floreios-envelopes.jpg' },
  { id: 3, file: 'copperplate-rosa.jpg' },
  { id: 4, file: 'carta-calixonados.jpg' },
  { id: 5, file: 'floreios-passaro.jpg' },
  { id: 6, file: 'guadalupe-floreios.jpg' },
  { id: 7, file: 'pentel-color-brush.jpg' },
]

const Projects = () => {
  return (
    <section className='projects'>
      <div className='container'>
        <div className='projects-wrapper'>
          <ul className='projects-list'>
            {images.map(img => (
              <li className='projects-image' key={img.id}>
                <Image src={`/projects/${img.file}`} width={350} height={350} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects
