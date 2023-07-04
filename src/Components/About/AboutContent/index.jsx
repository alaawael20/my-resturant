import React from 'react'
import './style.css'
import Button from '../../../Mock/Button'

const AboutContent = ({ title, subTitle, content }) => {
  return (
      <div className='AboutContent'>
        <h2>{title}</h2>
        <p>{subTitle}</p>
        <p>{content}</p>
        <Button btn='Read More' />
      </div>
  )
}

export default AboutContent
