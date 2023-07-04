import React from 'react'
import flat from '../../../assets/flat.png'
import './style.css'

const FlatImage = () => {
  return (
    <div className='flatImage'>
      <img src={flat} alt='FlatImage'/>
    </div>
  )
}

export default FlatImage
