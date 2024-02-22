import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import BlogDetails from './pages/BlogDetails'
import { Routes, Route, Link } from 'react-router-dom'


function App() {


  return (
    <>

     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/BlogDetails' element={<BlogDetails/>}/>
     </Routes>
  
    </>
  )
}

export default App
