import React, { useEffect, useState } from 'react'
import { useLanguage } from '../Util/LanguageContext';
import {
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import { MdAlternateEmail } from "react-icons/md";


export const Contact = () => {
  const { language } = useLanguage();
  const [contact, setContact] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const jsonData = await import(`../../data/${language}/contact.json`);
      setContact(jsonData);
    };

    fetchData();
  }, [language]);

  return (
    <section className='bg-gradient-to-t from-white via-white to-transparent mx-auto flex flex-col justify-start p-4 mb-0' id="contact">
        <h1 className='text-xl md:text-2xl lg:text-3xl'>{contact.title}</h1>
        {contact.description && (
          <p className='text-start mr-auto py-2 lg:text-lg md:text-md text-[1rem]'>{contact.description}</p>
        )}
        <div className='flex justify-start my-6 mx-2'>
            <a href={contact.linkedInUrl} target="_blank">
                <FaLinkedin size={30} className='mx-3'/>
            </a>
            <a href={contact.instagramUrl} target="_blank">
                <FaInstagram size={30} className='mx-3'/>
            </a>
            <a href={`mailto:${contact.mail}`} target="_blank">
                <MdAlternateEmail size={30} className='mx-3'/>
            </a>
        </div>
    </section>
  );
}