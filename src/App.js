import React from 'react'
import ScrolltoTop from './components/ScrolltoTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Recommended from './components/Recommended'
import Testomonials from './components/Testomonials'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <ScrolltoTop />
      <Navbar />
      <Hero />
      <Services/>
      <Recommended />
      <Testomonials />
      <Footer />

    </>



  )
}
