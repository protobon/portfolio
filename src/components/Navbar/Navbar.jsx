import React, { useState, useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
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

    const navigation = [
        { name: navbar.about, href: '#about'},
        { name: navbar.experience, href: '#experience'},
        { name: navbar.projects, href: '#projects'},
        { name: navbar.contact, href: '#contact'},
      ]

  return (
    <Disclosure as="nav" className="bg-gradient-to-tr from-white via-slate-100 to-slate-300">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                <div className="flex flex-shrink-0 items-center">
                    <a href="/" className='text-2xl'><h1>Ayrton C.</h1></a>
                </div>
                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-2 lg:space-x-4">
                    {navigation.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className='rounded-md px-2 py-2 font-medium hover:bg-slate-300/60 transition duration-100'
                      >
                      <h2>{item.name}</h2>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                <LanguageDropdown/>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden absolute z-10 w-full bg-gradient-to-b from-white via-slate-100 to-slate-300">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, idx) => (
                <Disclosure.Button
                  key={idx}
                  as="a"
                  href={item.href}
                  className='block align-middle rounded-md px-3 py-2 font-medium hover:bg-slate-300/60 transition duration-100'
                >
                <h2>{item.name}</h2>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}