import React from 'react'
import Nav from '../components/Nav'
import Section from '../components/Section'
import Quotes from '../components/Quotes'
import Box from '../components/Box'
import Last from '../components/Last'

const App = () => {
  return (
    <div className='py-[1.5rem] px-[2rem] bg-gray-200'>
      <Nav />
      <Section />
      <Quotes />
      <Box />
      <Last />
    </div>
  )
}

export default App
