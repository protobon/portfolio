import React, { useState, useEffect } from 'react'
import { useLanguage } from '../Util/LanguageContext';
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { LanguageDropdown } from '../Util/LanguageDropdown';

export const Navbar = () => {
  const { language } = useLanguage();
  const [navbar, setNavbar] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const jsonData = await import(`../../data/${language}/navbar.json`);
      setNavbar(jsonData);
    };

    fetchData();
  }, [language]);

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
  <nav className='flex justify-between items-center h-20 mx-auto px-4 bg-gradient-to-tr from-white via-slate-100 to-slate-300'>
    <a href="/" className='text-2xl'><h1>Ayrton C.</h1></a>
    <LanguageDropdown/>
    <div className='hidden md:flex font-semibold'>
      <a href="#about" className='cursor-pointer p-3 rounded-lg mx-1 hover:bg-slate-300/50 transition duration-200'><h2>{navbar.about}</h2></a>
      <a href="#experience" className='cursor-pointer p-3 rounded-lg mx-1 hover:bg-slate-300/50 transition duration-200'><h2>{navbar.experience}</h2></a>
      <a href="#projects" className='cursor-pointer p-3 rounded-lg mx-1 hover:bg-slate-300/50 transition duration-200'><h2>{navbar.projects}</h2></a>
      <a href="#contact" className='cursor-pointer p-3 rounded-lg mx-1 hover:bg-slate-300/50 transition duration-200'><h2>{navbar.contact}</h2></a>
    </div>
    <button onClick={handleNavMenu} type="button" className='md:hidden'>
      {navMenu ? <IoMdClose size={30}/> : <IoMdMenu size={30}/>}
    </button>
    <div className={`md:hidden font-semibold ${navMenu ? 'fixed right-0 top-20 w-full bg-gradient-to-t from-slate-300 via-slate-100 to-white rounded-lg transition duration-300' : "fixed right-[-200px]"}`} onClick={handleNavMenu}>
      <a href="#about" className='flex flex-col cursor-pointer p-3 rounded-lg mx-1 hover:bg-slate-300/50 transition duration-200'><h2>{navbar.about}</h2></a>
      <a href="#experience" className='flex flex-col cursor-pointer p-3 rounded-lg mx-1 hover:bg-slate-300/50 transition duration-200'><h2>{navbar.experience}</h2></a>
      <a href="#projects" className='flex flex-col cursor-pointer p-3 rounded-lg mx-1 hover:bg-slate-300/50 transition duration-200'><h2>{navbar.projects}</h2></a>
      <a href="#contact" className='flex flex-col cursor-pointer p-3 rounded-lg mx-1 hover:bg-slate-300/50 transition duration-200'><h2>{navbar.contact}</h2></a>
    </div>
  </nav>
  )
}
