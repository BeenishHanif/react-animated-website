import React from 'react'
import Contact from './Contact'
import About from './About'
import Services from './Services'
import Footer from './Footer'
import Navbar from './Navbar'
import Slider from './Slider'

const Home = () => {
  return (
    <div id='home'>
    <Navbar/>
     <Slider/>
    <Contact/>
    <About/>
    <Services/>
    <Footer/>
    </div>
  )
}

export default Home