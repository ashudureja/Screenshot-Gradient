import React from 'react'
import Hero1 from './Heropartials/Hero1'
import ColorfulUIGrid from './Heropartials/Hero2'
import Navbar from './Heropartials/Navbar'

const Hero = () => {
  return (
    <div className='relative min-h-screen w-full'>
        <Navbar/>
        <Hero1/>
        <ColorfulUIGrid/>
    </div>
  )
}

export default Hero