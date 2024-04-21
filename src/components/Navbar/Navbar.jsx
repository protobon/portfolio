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
    <Disclosure as="nav" className="bg-gradient-to-b from-[#c8ceda] to-transparent">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
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
                    <a href="/"><h1>Ayrton C.</h1></a>
                </div>
                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-2 lg:space-x-4">
                    {navigation.map((item, idx) => (
                      <a key={idx} href={item.href} className='rounded-md p-2 font-medium text-[var(--color-icon)] hover:text-[var(--color-span)] hover:bg-slate-500/10 transition duration-100'>
                        {item.name}
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

          <Disclosure.Panel className="md:hidden absolute z-10 w-full bg-gradient-to-t from-[#c8ceda] to-transparent">
            <div className="space-y-1 px-2 pb-3 pt-2 shadow-lg">
              {navigation.map((item, idx) => (
                <Disclosure.Button
                  key={idx}
                  as="a"
                  href={item.href}
                  className='block align-middle rounded-md p-2 font-medium text-[var(--color-icon)] hover:text-[var(--color-span)] hover:bg-slate-500/10 transition duration-100'
                >
                {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}