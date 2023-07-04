import React from 'react'
import './style.css'
import NavBar from '../../../../Components/Landing/NavBar'
import Content from '../../../../Components/Landing/Content'

const Landing = () => {
  return (
    <div className='landing' id='Home'>
      <NavBar/>
      <Content/>
    </div>
  )
}

export default Landing
