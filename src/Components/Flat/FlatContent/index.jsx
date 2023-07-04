import React from 'react'
import './style.css'
import Button from './../../../Mock/Button';

const FlatContent = () => {
  return (
    <div className='flatContent'>
      <p>Come join us for a lunch this weekend and enjoy</p>
      <p>FLAT 10% OFF</p>
      <Button btn='Book Table'/>
    </div>
  )
}

export default FlatContent
