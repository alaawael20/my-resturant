import React from 'react'
import './style.css'

const Contact = () => {
  return (
    <div className='contact'>
      <h3>Contact Us</h3>
      <div className='contactAddress'>
        <div className='iconsAddress'>
          <i class="far fa-envelope"></i>
          <p>Gogreendineservice@gmail.com</p>
        </div>
        <div className='iconsAddress'>
          <i class="fas fa-map-marker-alt"></i>
          <p>AZ complex bylane3 Mandari Rd Mumbai 1100867 </p>
        </div>
        <div className='iconsAddress'>
          <i class="fas fa-phone-alt"></i>
          <p>+1800 287 256</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
