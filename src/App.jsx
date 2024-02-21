import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Nav'
import Hero from './components/HeroSec'
import About from './components/About/About'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Blog from './components/Blog/Blog'



function App() {


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

export default App
