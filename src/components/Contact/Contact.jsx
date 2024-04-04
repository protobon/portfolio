import React from 'react';
import {
  FaLinkedin,
  FaGithubSquare,
  FaInstagram,
} from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";

import contact from "../../data/contact.json"


export const Contact = () => {
  return (
    <section className='w-full py-8 px-6 my-8 text-white' id="contact">
      <div>
        <h1 className='w-full text-3xl text-[#00df9a]'>{contact.title}</h1>
        <p className='py-4'>{contact.description}</p>
        <div className='flex justify-start my-6 mx-2'>
            <a href={contact.linkedInUrl} target="_blank">
                <FaLinkedin size={30} className='mx-3'/>
            </a>
            <a href={contact.instagramUrl} target="_blank">
                <FaInstagram size={30} className='mx-3'/>
            </a>
            <a href={contact.githubUrl} target="_blank">
                <FaGithubSquare size={30} className='mx-3'/>
            </a>
            <a href={`mailto:${contact.mail}`} target="_blank">
                <IoIosMail size={30} className='mx-3'/>
            </a>
        </div>
      </div>

    </section>
  );
}