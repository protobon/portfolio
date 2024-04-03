import React, { useState, useEffect } from 'react'

import { IoMdMenu, IoMdClose } from "react-icons/io";

export const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false)

  const handleNavMenu = () => {
    setNavMenu(!navMenu)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (navMenu) {
        setNavMenu(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navMenu]);

  return (
  <nav className='flex justify-between items-center text-teal-50 h-24 max-w-screen-xl mx-auto px-4'>
    <a href="/" className='text-2xl'>Portfolio</a>
    <div className='hidden md:flex'>
      <a href="#about" className='cursor-pointer p-3 rounded-lg mx-1 hover:bg-teal-50 hover:text-black transition duration-300'>About</a>
      <a href="#experience" className='cursor-pointer p-3 rounded-lg mx-1 hover:bg-teal-50 hover:text-black transition duration-300'>Experience</a>
      <a href="#projects" className='cursor-pointer p-3 rounded-lg mx-1 hover:bg-teal-50 hover:text-black transition duration-300'>Projects</a>
      <a href="#contact" className='cursor-pointer p-3 rounded-lg mx-1 hover:bg-teal-50 hover:text-black transition duration-300'>Contact</a>
    </div>
    <button onClick={handleNavMenu} type="button" className='md:hidden'>
      {navMenu ? <IoMdClose size={25}/> : <IoMdMenu size={25}/>}
    </button>
    <div className={`md:hidden ${navMenu ? 'fixed right-0 top-24 w-[35%] max-w-[200px] bg-black/50 rounded-lg transition duration-300' : "hidden"}`} onClick={handleNavMenu}>
      <a href="#about" className='flex flex-col cursor-pointer p-3 rounded-lg mx-1 hover:bg-teal-50 hover:text-black transition duration-300'>About</a>
      <a href="#experience" className='flex flex-col cursor-pointer p-3 rounded-lg mx-1 hover:bg-teal-50 hover:text-black transition duration-300'>Experience</a>
      <a href="#projects" className='flex flex-col cursor-pointer p-3 rounded-lg mx-1 hover:bg-teal-50 hover:text-black transition duration-300'>Projects</a>
      <a href="#contact" className='flex flex-col cursor-pointer p-3 rounded-lg mx-1 hover:bg-teal-50 hover:text-black transition duration-300'>Contact</a>
    </div>
  </nav>
  )
}
