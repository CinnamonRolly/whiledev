import React from 'react'
import About from './components/About'
import Masthead from './components/masthead'
import Footer from './components/Footer'
import Contract from './components/Contract'
import Work from './components/Work'
import Bio from './components/Bio'

const App = () => {
  return (
    <>
      <Masthead/>
      <About/>
      <Bio/>
      <Work/>
      <Contract/>
      <Footer/>
    </>
  )
}

export default App
