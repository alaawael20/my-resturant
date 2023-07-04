import React from 'react'

const Button = ({btn}) => {
    const myStyle = {
        width: '215px',
        height: '55px',
        fontSize: '18px',
        fontWeight: '700',
        outline: 'none',
        backgroundColor: 'transparent',
        color: '#FFFFFF',
        border: '2px #FFFCCC solid',
        cursor: 'pointer',
    }
  return (
    <div>
        <button style={myStyle}>{btn}</button>
    </div>
  )
}

export default Button
