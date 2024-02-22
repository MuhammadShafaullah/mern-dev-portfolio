import React from 'react'
import Skills from '../components/skills/Skills'
import Portfolio from '../components/Portfolio/Portfolio'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Blog from '../components/Blog/Blog'
import Navbar from '../components/Navbar/Nav'
import Hero from '../components/HeroSec'
import About from '../components/About/About'

function Home() {
  return (
    <>
    
    <Navbar/>
     <Hero/>
     <About/>
     {/* <Services/> */}
     <Blog/>
     <Skills/>
     <Portfolio/>
     <Contact/>
     <Footer/>

    </>
  )
}

export default Home