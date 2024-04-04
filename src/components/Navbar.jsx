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
  <nav className='flex justify-between items-center text-white h-24 mx-auto px-4'>
    <a href="/" className='text-2xl'><h1>Ayrton C.</h1></a>
    <div className='hidden md:flex font-semibold'>
      <a href="#about" className='cursor-pointer p-3 rounded-lg mx-1 hover:bg-teal-50 hover:text-black transition duration-300'>About</a>
      <a href="#experience" className='cursor-pointer p-3 rounded-lg mx-1 hover:bg-teal-50 hover:text-black transition duration-300'>Experience</a>
      <a href="#projects" className='cursor-pointer p-3 rounded-lg mx-1 hover:bg-teal-50 hover:text-black transition duration-300'>Projects</a>
      <a href="#contact" className='cursor-pointer p-3 rounded-lg mx-1 hover:bg-teal-50 hover:text-black transition duration-300'>Contact</a>
    </div>
    <button onClick={handleNavMenu} type="button" className='md:hidden'>
      {navMenu ? <IoMdClose size={30}/> : <IoMdMenu size={30}/>}
    </button>
    <div className={`md:hidden font-semibold ${navMenu ? 'fixed right-0 top-24 w-[35%] max-w-[200px] bg-black/30 rounded-lg transition duration-300' : "fixed right-[-200px]"}`} onClick={handleNavMenu}>
      <a href="#about" className='flex flex-col cursor-pointer p-3 rounded-lg mx-1 hover:bg-teal-50 hover:text-black transition duration-300'>About</a>
      <a href="#experience" className='flex flex-col cursor-pointer p-3 rounded-lg mx-1 hover:bg-teal-50 hover:text-black transition duration-300'>Experience</a>
      <a href="#projects" className='flex flex-col cursor-pointer p-3 rounded-lg mx-1 hover:bg-teal-50 hover:text-black transition duration-300'>Projects</a>
      <a href="#contact" className='flex flex-col cursor-pointer p-3 rounded-lg mx-1 hover:bg-teal-50 hover:text-black transition duration-300'>Contact</a>
    </div>
  </nav>
  )
}
