import React from 'react'
import './style.css'
import Title from '../../../../Mock/Title'
import MenuCard from '../../../../Mock/MenuCard'
import menu1 from '../../../../assets/menu1.png'
import menu2 from '../../../../assets/menu2.png'
import menu3 from '../../../../assets/menu3.png'

const Menu = () => {
  return (
    <div className='menu' id='Menu'>
        <Title title= 'Straight From Kitchen' subTitle= 'Our Menu'/>
        <div className='MenuCards'>
          <MenuCard menuImage={menu1} menuName= 'Lorem ipsum dolor sit amet' menuDescription= 'Lorem ipsum dolor sit amet' menuPrice= 'Rs 222'/>
          <MenuCard menuImage={menu2} menuName= 'Vivamus sodales augue vita' menuDescription= 'Lorem ipsum dolor sit amet' menuPrice= 'Rs 135'/>
          <MenuCard menuImage={menu3} menuName= 'Pellentesque semper semper' menuDescription= 'Lorem ipsum dolor sit amet' menuPrice= 'Rs 100'/>
          <MenuCard menuImage={menu1} menuName= 'Vestibulum est turpis' menuDescription= 'Lorem ipsum dolor sit amet' menuPrice= 'Rs 150'/>
          <MenuCard menuImage={menu2} menuName= 'Vivamus sodales augue vita' menuDescription= 'Lorem ipsum dolor sit amet' menuPrice= 'Rs 222'/>
          <MenuCard menuImage={menu3} menuName= 'Pellentesque semper semper' menuDescription= 'Lorem ipsum dolor sit amet' menuPrice= 'Rs 200'/>
          <MenuCard menuImage={menu1} menuName= 'Lorem ipsum dolor sit amet' menuDescription= 'Lorem ipsum dolor sit amet' menuPrice= 'Rs 250'/>
          <MenuCard menuImage={menu2} menuName= 'Vivamus sodales augue vita' menuDescription= 'Lorem ipsum dolor sit amet' menuPrice= 'Rs 350'/>
          <MenuCard menuImage={menu3} menuName= 'Pellentesque semper semper' menuDescription= 'Lorem ipsum dolor sit amet' menuPrice= 'Rs 210'/>
          <MenuCard menuImage={menu1} menuName= 'Nullam elementum magna' menuDescription= 'Lorem ipsum dolor sit amet' menuPrice= 'Rs 222'/>
          <MenuCard menuImage={menu2} menuName= 'Vivamus sodales augue vita' menuDescription= 'Lorem ipsum dolor sit amet' menuPrice= 'Rs 100'/>
          <MenuCard menuImage={menu3} menuName= 'Phasellus convallis maximus' menuDescription= 'Lorem ipsum dolor sit amet' menuPrice= 'Rs 150'/>
        </div>
    </div>
  )
}

export default Menu
