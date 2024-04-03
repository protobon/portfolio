import React, { useState } from 'react'

import { IoMdMenu, IoMdClose } from "react-icons/io";

export const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false)

  const handleNavMenu = () => {
    setNavMenu(!navMenu)
  }

  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
  <nav className='flex justify-between items-center text-teal-50 h-24 max-w-screen-xl mx-auto px-4'>
    <a href="/" className='text-2xl'>Portfolio</a>
    <div className='hidden md:flex'>
      <a onClick={() => smoothScrollTo("about")} className='cursor-pointer p-3 rounded-lg mx-1 hover:bg-teal-50 hover:text-black scroll-smooth'>About</a>
      <a onClick={() => smoothScrollTo("experience")} className='cursor-pointer p-3 rounded-lg mx-1 hover:bg-teal-50 hover:text-black scroll-smooth'>Experience</a>
      <a onClick={() => smoothScrollTo("projects")} className='cursor-pointer p-3 rounded-lg mx-1 hover:bg-teal-50 hover:text-black scroll-smooth'>Projects</a>
      <a onClick={() => smoothScrollTo("contact")} className='cursor-pointer p-3 rounded-lg mx-1 hover:bg-teal-50 hover:text-black scroll-smooth'>Contact</a>
    </div>
    <button onClick={handleNavMenu} type="button" className='md:hidden'>
      {navMenu ? <IoMdClose size={25}/> : <IoMdMenu size={25}/>}
    </button>
    <div className={`md:hidden ${navMenu ? 'fixed right-0 top-16 w-[35%] max-w-[200px] h-full ease-in-out duration-300' : "fixed right-[-100%]"}`} onClick={handleNavMenu}>
      <ul className='p-6 text-teal-50'>
        <li className='cursor-pointer p-3 rounded-lg mx-1 hover:bg-teal-50 hover:text-black scroll-smooth'><a onClick={() => smoothScrollTo("experience")}>About</a></li>
        <li className='cursor-pointer p-3 rounded-lg mx-1 hover:bg-teal-50 hover:text-black scroll-smooth'><a onClick={() => smoothScrollTo("experience")}>Experience</a></li>
        <li className='cursor-pointer p-3 rounded-lg mx-1 hover:bg-teal-50 hover:text-black scroll-smooth'><a onClick={() => smoothScrollTo("experience")}>Projects</a></li>
        <li className='cursor-pointer p-3 rounded-lg mx-1 hover:bg-teal-50 hover:text-black scroll-smooth'><a onClick={() => smoothScrollTo("experience")}>Contact</a></li>
      </ul>
    </div>
  </nav>
  )
}
