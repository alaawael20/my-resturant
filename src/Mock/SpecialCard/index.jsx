import React from 'react'
import './style.css'

const SpecialCard = ({cardImage, cardTitle, cardDicription}) => {
  return (
    <div className='SpecialCard'>
      <img src={cardImage} alt='Card'/>
      <h3>{cardTitle}</h3>
      <p>{cardDicription}</p>
    </div>
  )
}

export default SpecialCard
