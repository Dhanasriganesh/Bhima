import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Menu from '../pages/Menu'
import Services from '../pages/Services'
import Gallery from '../pages/Gallery'
import Contact from '../pages/Contact'
import { Routes, Route } from 'react-router-dom'

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default Routers
