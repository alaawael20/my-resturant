import React from 'react'
import logo from '../../../assets/logo.png'
import search from '../../../assets/search.png'
import './style.css'

const NavBar = () => {
    return (
        <header className='NavHome'>
            <div className='logo'>
                <img src={logo} alt='Logo' />
            </div>
            <div className='navs' id='navs'>
                <ul>
                    <li><a href='#Home'>Home</a></li>
                    <li><a href='#About'>About</a></li>
                    <li><a href='#Special'>Special</a></li>
                    <li><a href='#Menu'>Menu</a></li>
                    <li><a href='#Blogs'>Blogs</a></li>
                    <li><img src={search} alt='Search Icon' /></li>
                </ul>
            </div>
            <div className='icon'>
                <i class="fa fa-bars"></i>
            </div>
            <div className='btn'>
                <button><span></span>Book Now<span></span></button>
            </div>
        </header>
    )
}

export default NavBar
