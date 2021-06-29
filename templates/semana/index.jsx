import Image from 'next/image'

const Semana = () => {
  return (
    <>
      <h1 className="logo">
        <Image src="/logo.png" width="430" height="200" layout="responsive" />
      </h1>
    </>
  )
}

export default Semana