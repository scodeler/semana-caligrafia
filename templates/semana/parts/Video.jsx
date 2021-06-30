const VideoEmbed = () => {
  return (
    <section className='video'>
      <div className='video-container'>
        <div className='videoWrapper'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/YVQqEoSXV8Q'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default VideoEmbed
