import React, { useState } from 'react'

import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

export const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false)

  const handleNavMenu = () => {
    setNavMenu(!navMenu)
  }

  return (
  <nav className='flex justify-between items-center h-24 max-w-screen-xl mx-auto px-4'>
    <a href="/" className='text-2xl text-teal-200'>Portfolio</a>
    <ul className='hidden md:flex text-teal-50'>
      <li className='p-3'><a href="#about">About</a></li>
      <li className='p-3'>Experience</li>
      <li className='p-3'>Projects</li>
      <li className='p-3'>Contact</li>
    </ul>
    <div onClick={handleNavMenu} className='text-teal-50 block md:hidden'>
      {navMenu ? <RiCloseLine size={20}/> : <RiMenu3Fill size={20}/>}
    </div>
    <div className={navMenu ? 'fixed left-0 top-0 w-[40%] h-full bg-blue-800 ease-in-out duration-300' : "fixed left-[-100%]"}>
      <ul className='p-6 uppercase text-teal-50'>
        <li className='p-3 border-b border-teal-200'>About</li>
        <li className='p-3 border-b border-teal-200'>Experience</li>
        <li className='p-3 border-b border-teal-200'>Projects</li>
        <li className='p-3 border-b border-teal-200'>Contact</li>
      </ul>
    </div>
  </nav>
  )
}
