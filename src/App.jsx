import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Philosophy from './components/Philosophy'
import Schedule from './components/Schedule'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Philosophy />
      <Schedule />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
