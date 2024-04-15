import React, { useEffect, useState } from 'react'
import { useLanguage } from '../Util/LanguageContext';
import { getImage } from "../../utils"

export const About = () => {
  const { language } = useLanguage();
  const [about, setAbout] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const jsonData = await import(`../../data/${language}/about.json`);
      setAbout(jsonData);
    };

    fetchData();
  }, [language]);

  return (
    <section className='w-full min-h-full' id="about" >
      <h1 className='md:text-4xl sm:text-3xl text-2xl text-center'>{about.title}</h1>
      <div className='block xl:grid xl:grid-cols-3'>
        <p className='my-6 mx-10 lg:text-lg xl:col-span-2 xl:my-auto md:text-md text-[1rem] p-4 rounded-lg shadow-2xl'>{about.description}</p>
        <img
          className='my-10 mx-auto rounded-full shadow-2xl max-h-96 transition duration-500 hover:-translate-y-1 hover:scale-105'
          src={getImage(about.imagePath)}
          alt="" />
      </div>
    </section>
  )
}
