import React from 'react'
import './style.css'

const MenuCard = ({menuImage, menuName, menuDescription, menuPrice}) => {
    return (
        <div className='menuCard'>
            <img src={menuImage} alt='MenuImage'/>
            <div className='show'>
                <p>{menuName}</p>
                <p>{menuDescription}</p>
            </div>
            <span></span>
            <p className='menuPrice'>{menuPrice}</p>
        </div>
    )
}

export default MenuCard
