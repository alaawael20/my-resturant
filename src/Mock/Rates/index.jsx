import React from 'react'
import './style.css'

const Rate = ({rateImage, rateNumber, rateName}) => {
  return (
    <div className='rate'>
      <img src={rateImage} alt='Rate'/>
      <div>
        <h2>{rateNumber}</h2>
        <h5>{rateName}</h5>
      </div>
    </div>
  )
}

export default Rate
