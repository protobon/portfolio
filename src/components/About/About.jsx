import React, { useEffect, useState } from 'react'
import { useLanguage } from '../Util/LanguageContext';
import { getImageUrl } from "../../utils"

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
    <section className='w-full min-h-full mt-10' id="about" >
      <h1 className='my-4 md:text-4xl sm:text-3xl text-2xl text-center'>{about.title}</h1>
      <div className='block xl:grid xl:grid-cols-3'>
        <img
          className='my-16 mx-auto rounded-full shadow-2xl max-h-96 transition duration-500 hover:-translate-y-1 hover:scale-105'
          src={getImageUrl(about.imagePath)}
          alt="" />
        <p className='mb-8 mx-10 lg:text-lg xl:col-span-2 xl:my-auto md:text-md text-[1rem] p-4 rounded-lg shadow-2xl'>{about.description}</p>
      </div>
    </section>
  )
}
