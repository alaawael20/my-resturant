import React from 'react'

const Title = ({title, subTitle}) => {
    const myStyle = {
        color: '#FFCE6D',
        textAlign: 'center',
        fontSize: '36px',
        fontFamily: 'Dancing Script',
        fontWeight: '700',
        lineHeight: '117.3%',
        letterSpacing: '3.6px',
    }
    const myStyle2 = {
        color: '#FFFFFC',
        textAlign: 'center',
        fontSize: '30px',
        fontFamily: 'Roboto',
        fontWeight: '700',
        lineHeight: '117.3%',
        textTransform: 'capitalize',
    }
  return (
    <div>
      <h3 style= {myStyle}>{title}</h3>
      <h4 style= {myStyle2}>{subTitle}</h4>
    </div>
  )
}

export default Title
