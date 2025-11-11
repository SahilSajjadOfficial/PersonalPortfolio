import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-col md:flex-row justify-between items-center mb-8 gap-6 md:gap-0'>
      <h1 className='text-2xl font-bold text-purple-600'>
        Sahil's Portfolio
      </h1>
      <ul className='flex flex-wrap justify-center md:flex-nowrap gap-4 md:gap-6 font-medium text-gray-600 items-center'>
        <a href="#home" className='hover:text-purple-600'>Home</a>
        <a href="#about" className='hover:text-purple-600'>About</a>
        <a href="#projects" className='hover:text-purple-600'>Projects</a>
        <a href="#contact" className=' hover:text-purple-700 font-medium'>
          Contact
        </a>
      </ul>
    </nav>
  )
}

export default Navbar