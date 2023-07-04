import React from 'react'
import './style.css'
import Rate from '../../../../Mock/Rates'
import rate1 from '../../../../assets/rate1.png'
import rate2 from '../../../../assets/rate2.png'
import rate3 from '../../../../assets/rate3.png'

const Rates = () => {
  return (
    <div className='rates'>
        <Rate rateImage={rate1} rateNumber='250+' rateName='Delicacy'/>
        <Rate rateImage={rate2} rateNumber='10+' rateName='renowed chefs'/>
        <Rate rateImage={rate3} rateNumber='30+' rateName='Members'/>
    </div>
  )
}

export default Rates
