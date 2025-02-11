import React from 'react'

function ImageComponent() {
  return (
    <div id='bg-img' data-aos="fade-down">
      <div className='image'>
        <img src="/images/me-bg.png" className='img-fluid' alt="photo_cv" width={400} height={500} />
      </div>
    </div>
  )
}

export default ImageComponent