import React from 'react'

const CarVideoSection = () => {
  return (
    <div className='mt-20'>
      <h1 className='text-5xl font-bold my-10 text-center'> India's most ambition car</h1>
      <div>
        <video autoPlay controls loop style={{ width:'100%', height:"100%"}} src='https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ola-car-video.mp4'></video>
      </div>
    </div>
  )
}

export default CarVideoSection