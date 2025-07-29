import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='fixed top-0 w-full z-[999] backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg'>
      <div className='max-w-8xl px-16 mx-auto h-16 flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center'>
          <h1 className='text-2xl font-bold text-white tracking-tight hover:text-blue-200 transition-colors duration-300 cursor-pointer'>
            Gradly
          </h1>
        </div>
        
        {/* Navigation Items */}
        <div className='flex items-center space-x-6'>
          {/* Try for free button */}
         <Link to="/editor" className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white px-5 py-2.5 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform duration-200">
              Try for free
            </Link >
          
          {/* Login button */}
          {/* <button className='px-6 py-2 text-sm font-medium text-white border border-white/30 rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:shadow-lg'>
            Login
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar