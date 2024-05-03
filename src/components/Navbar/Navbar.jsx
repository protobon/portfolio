import React, { useState, useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useLanguage } from '../Util/LanguageContext'


export const Navbar = () => {
  const { language } = useLanguage();
  const [navbar, setNavbar] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      const navbarData = await import(`../../data/${language}/navbar.json`);
      setNavbar(navbarData);
    };

    fetchData();
  }, [language]);
  
  const navigation = [
      { name: navbar.about, href: '#about'},
      { name: navbar.experience, href: '#experience'},
      { name: navbar.projects, href: '#projects'},
      { name: navbar.contact, href: '#contact'},
    ]

  return (
    <Disclosure as="nav" className="bg-gradient-to-b from-[var(--color-nav-grad)] to-transparent">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[1920px] px-2 md:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-[var(--color-icon)] hover:bg-gray-300/50">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <IoMdClose className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <IoMdMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-center text-3xl">
                    <a href="/portfolio"><h1>Ayrton C.</h1></a>
                </div>
                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-2 lg:space-x-4">
                    {navigation.map((item, idx) => (
                      <a key={idx} href={item.href} className='text-[var(--color-icon)] hover:text-[var(--color-span)] rounded-md hover:before:bg-[var(--color-icon)] relative overflow-hidden p-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[var(--color-icon)] before:transition-all before:duration-500 hover:shadow-[var(--color-icon)] hover:before:left-0 hover:before:w-full'>
                        <div className='font-medium relative z-10'>{item.name}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden absolute z-10 w-full bg-gradient-to-t from-[var(--color-nav-grad)] to-transparent border-b-2 border-[var(--color-icon)]">
            <div className="flex flex-col space-y-1 px-2 pb-3 pt-2 shadow-lg">
              {navigation.map((item, idx) => (
                <Disclosure.Button
                  key={idx}
                  as="a"
                  href={item.href}
                  className='text-[var(--color-icon)] hover:text-[var(--color-span)] rounded-md hover:before:bg-[var(--color-icon)] relative align-middle overflow-hidden p-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[var(--color-icon)] before:transition-all before:duration-500 hover:shadow-[var(--color-icon)] hover:before:left-0 hover:before:w-full'
                >
                  <div className='font-medium relative z-10'>{item.name}</div>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}