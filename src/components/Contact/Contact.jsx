import React, { useEffect, useState } from 'react'
import { useLanguage } from '../Util/LanguageContext';
import {
  FaLinkedin,
  FaGithubSquare,
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
    <section className='w-full mb-8 pb-2 px-6' id="contact">
      <div>
        <h1 className='w-full text-3xl'>{contact.title}</h1>
        <p className='py-4'>{contact.description}</p>
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
            <a href={contact.githubUrl} target="_blank">
                <FaGithubSquare size={30} className='mx-3'/>
            </a>
        </div>
      </div>

    </section>
  );
}