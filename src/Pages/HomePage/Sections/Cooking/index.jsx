import React from 'react'
import './style.css'
import AboutContent from './../../../../Components/About/AboutContent/index';
import AboutImage from './../../../../Components/About/AboutImage/index';
import cooking from '../../../../assets/cooking.png'

const Cooking = () => {
  return (
    <div className='cooking'>
        <AboutContent title= 'Cooking ingredients' subTitle= 'What goes in' content= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit.'/>
        <AboutImage image= {cooking}/>
    </div>
  )
}

export default Cooking
