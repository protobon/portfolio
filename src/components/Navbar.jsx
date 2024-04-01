import React, { useState } from 'react'

import { IoMdMenu, IoMdClose } from "react-icons/io";

export const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false)

  const handleNavMenu = () => {
    setNavMenu(!navMenu)
  }

  return (
  <nav className='flex justify-between items-center text-teal-50 h-24 max-w-screen-xl mx-auto px-4'>
    <a href="/" className='text-2xl'>Portfolio</a>
    <div className='hidden md:flex'>
      <a href="#about" className='p-3 rounded-lg mx-1 hover:bg-teal-50/50 transition duration-500'>About</a>
      <a href="#experience" className='p-3 rounded-lg mx-1 hover:bg-teal-50/50 transition duration-500'>Experience</a>
      <a href="#projects" className='p-3 rounded-lg mx-1 hover:bg-teal-50/50 transition duration-500'>Projects</a>
      <a href="#contact" className='p-3 rounded-lg mx-1 hover:bg-teal-50/50 transition duration-500'>Contact</a>
    </div>
    <button onClick={handleNavMenu} type="button" className='md:hidden'>
      {navMenu ? <IoMdClose size={25}/> : <IoMdMenu size={25}/>}
    </button>
    <div className={`md:hidden ${navMenu ? 'fixed right-0 top-16 w-[35%] max-w-[200px] h-auto ease-in-out duration-300' : "fixed right-[-100%]"}`}>
      <ul className='p-6 text-teal-50'>
        <li className='p-3 rounded-lg mx-1 hover:bg-teal-50/50 transition duration-500'><a href="#about" onClick={handleNavMenu}>About</a></li>
        <li className='p-3 rounded-lg mx-1 hover:bg-teal-50/50 transition duration-500'><a href="#experience" onClick={handleNavMenu}>Experience</a></li>
        <li className='p-3 rounded-lg mx-1 hover:bg-teal-50/50 transition duration-500'><a href="#projects" onClick={handleNavMenu}>Projects</a></li>
        <li className='p-3 rounded-lg mx-1 hover:bg-teal-50/50 transition duration-500'><a href="#contact" onClick={handleNavMenu}>Contact</a></li>
      </ul>
    </div>
  </nav>
  )
}
