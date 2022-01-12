import React, { useEffect, useState } from 'react'

const Countdown = ({ date, title }) => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const finalDate = new Date(date).getTime()
    const count = setInterval(() => {
      const currentTime = new Date().getTime()
      const remainingTime = finalDate - currentTime

      setTime({
        days: Math.floor(remainingTime / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((remainingTime % (1000 * 60)) / 1000),
      })

      if (remainingTime < 0) {
        clearInterval(count)
        setTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      }
    }, 1000)
  }, [date])
  const { days, hours, minutes, seconds } = time
  return (
    <section className='countdown'>
      <h3 className='countdown-title'>{title}</h3>
      <div className='countdown-node'>
        <div className='countdown-number'>{days}</div>
        <div className='countdown-label'>dias</div>
      </div>
      <div className='countdown-node'>
        <div className='countdown-number'>{hours}</div>
        <div className='countdown-label'>Horas</div>
      </div>
      <div className='countdown-node'>
        <div className='countdown-number'>{minutes}</div>
        <div className='countdown-label'>Minutos</div>
      </div>
      <div className='countdown-node'>
        <div className='countdown-number'>{seconds}</div>
        <div className='countdown-label'>Segundos</div>
      </div>
    </section>
  )
}

export default Countdown
