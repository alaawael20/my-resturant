import React from 'react'
import './style.css'
import Title from './../../../../Mock/Title';
import ReviewCard from '../../../../Mock/ReviewCard';
import Ellipse1 from '../../../../assets/Ellipse1.png'
import Ellipse2 from '../../../../assets/Ellipse2.png'

const Reviews = () => {
  return (
    <div className='reviews'> 
        <Title title='Reviews' subTitle='words from our food lovers'/>
        <div className='ReviewCards'>
            <ReviewCard personImage={Ellipse1} personName='Alex andrina' personReview='“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “'/>
            <ReviewCard personImage={Ellipse1} personName='Alex andrina' personReview='“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “'/>
            <ReviewCard personImage={Ellipse2} personName='Alex andrina' personReview='“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “'/>
        </div>
    </div>
  )
}

export default Reviews
