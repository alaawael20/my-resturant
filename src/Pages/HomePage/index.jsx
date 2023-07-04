import React from 'react'
import Landing from './Sections/Landing'
import About from './Sections/About'
import Special from './Sections/Special'
import Menu from './Sections/Menu'
import Cooking from './Sections/Cooking'
import Rates from './Sections/Rates'
import Reviews from './Sections/Reviews'
import Blogs from './Sections/Blogs'
import ContactUs from './Sections/ContactUs'
import DownToUp from '../../Mock/ScrollToTop'
import Subscribe from './Sections/Subscribe'
import Footer from './Sections/Footer'
import Flat from './Sections/Flat/index';

const HomePage = () => {
  return (
    <div>
        <Landing />
        <About />
        <Special />
        <Menu />
        <Flat />
        <Cooking />
        <Rates />
        <Reviews />
        <Blogs />
        <ContactUs />
        <Subscribe />
        <Footer />
        <DownToUp />
    </div>
  )
}

export default HomePage
