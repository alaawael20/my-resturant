import React from 'react'
import './style.css'
import Title from '../../../../Mock/Title'
import SpecialCard from '../../../../Mock/SpecialCard'
import card1 from '../../../../assets/card1.png'
import card2 from '../../../../assets/card2.png'
import card3 from '../../../../assets/card3.png'

const Special = () => {
  return (
    <div className='special' id='Special'>
      <Title title= 'Special' subTitle= 'What makes us special'/>
      <div className='SpecialCards'>
        <SpecialCard cardImage={card1} cardTitle= 'Fresh food' cardDicription= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '/>
        <SpecialCard cardImage={card2} cardTitle= 'skilled Chef' cardDicription= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '/>
        <SpecialCard cardImage={card3} cardTitle= 'Exotic dishes' cardDicription= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '/>
      </div>
    </div>
  )
}

export default Special
