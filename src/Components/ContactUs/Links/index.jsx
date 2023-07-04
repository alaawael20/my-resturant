import React from 'react'
import './style.css'
import logo from '../../../assets/logo.png'

const Links = () => {
  return (
    <div className='Links'>
      <div className='title'>
        <img src={logo} alt='Logo'/>
        <h3>Golden View Dine </h3>
      </div>
      <div className='description'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin </p>
      </div>
      <div className='socialLinks'>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-youtube"></i>
      </div>
    </div>
  )
}

export default Links
