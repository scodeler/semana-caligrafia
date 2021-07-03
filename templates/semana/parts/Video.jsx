const VideoEmbed = () => {
  return (
    <section className='video'>
      <div className='container'>
        <div className='video-container'>
          <div className='videoWrapper'>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/3ju5dF10kE0'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoEmbed
