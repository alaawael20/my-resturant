import React from 'react'
import './style.css'
import FlatImage from '../../../../Components/Flat/FlatImage'
import FlatContent from '../../../../Components/Flat/FlatContent'

const Flat = () => {
  return (
    <div className='flat'>
      <FlatImage />
      <FlatContent />
      <FlatImage />
    </div>
  )
}

export default Flat
