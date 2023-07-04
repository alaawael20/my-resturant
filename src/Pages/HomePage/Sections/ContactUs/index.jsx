import React from 'react'
import './style.css'
import Links from './../../../../Components/ContactUs/Links/index';
import OtherLinks from './../../../../Components/ContactUs/OtherLinks/index';
import Contact from './../../../../Components/ContactUs/Contact/index';

const ContactUs = () => {
  return (
    <div className='ContactUs'>
      <Links />
      <OtherLinks />
      <Contact />
    </div>
  )
}

export default ContactUs
