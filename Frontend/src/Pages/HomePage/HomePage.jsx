import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Header from '../../Components/Header/Header'
import AboutUs from '../../Components/AboutUs/AboutUs'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'

const HomePage = () => {
  return (
    <div className='homepage-container'>
      <NavBar/>
      <Header/>
      <AboutUs/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default HomePage