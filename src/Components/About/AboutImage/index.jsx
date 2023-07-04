import React from 'react'
import './style.css'

const AboutImage = ({image}) => {
  return (
    <div className='AboutImage'> 
      <img src= {image} alt='salad'/>
    </div>
  )
}

export default AboutImage
