import React from 'react'
import './style.css'
import AboutContent from '../../../../Components/About/AboutContent'
import AboutImage from './../../../../Components/About/AboutImage/index';
import Salad from '../../../../assets/Salad.png'

const About = () => {
  return (
    <div className='about' id='About'>
        <AboutContent title= 'About Us' subTitle= 'Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine' content= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque.'/>
        <AboutImage image={Salad} />
    </div>
  )
}

export default About
