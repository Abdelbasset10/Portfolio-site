import React from 'react'
import { useSelector } from 'react-redux'


import NavBar from './components/navbar/NavBar'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Works from './components/works/Works'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
const App = () => {
  const dark = useSelector((state)=>state.darkMode)
  return (
    <div className={  dark? 'bg-black':'bg-white'} >
      <NavBar />
      <Hero />      
      <Services />
      <Works />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
