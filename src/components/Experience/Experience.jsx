import React, { useEffect, useState } from 'react'
import { useLanguage } from '../Util/LanguageContext';
import { Technologies } from './Technologies'


export const Experience = () => {
  const { language } = useLanguage();
  const [experience, setExperience] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const jsonData = await import(`../../data/${language}/experience.json`);
      setExperience(jsonData)
    };

    fetchData();
  }, [language]);

  return (
    <section id="experience" className='flex flex-col mx-auto px-0 w-full min-h-full'>
        <h1 className='text-center py-6 md:text-4xl sm:text-3xl text-2xl'>{experience.title}</h1>
        <div className='slider whitespace-nowrap py-10'>
          <Technologies/>
        </div>
        <div className='flex flex-col items-center mt-8 lg:flex-row lg:justify-start'>
          <div className='flex flex-col m-3'>
            <div className='flex flex-row justify-between mx-2'>
            {experience.logTech && <h2 className='text-xl xl:text-2xl font-semibold my-4'>{experience.logTech.title}</h2>}
            {experience.logTech && <h2 className='text-lg text-[var(--color-span)] xl:text-xl font-semibold my-4'>{experience.logTech.years}</h2>}
            </div>
            {experience.logTech && <p className='bg-white rounded-lg p-2 shadow-lg'>{experience.logTech.description}</p>}
            {experience.logTech && (
              <p className='justify-start text-sm font-medium p-2 text-[var(--color-span)]'>{experience.logTech.technologies.join(", ")}</p>
            )}
          </div>
          <div className="max-w-xs mx-auto lg:my-auto lg:mx-8 my-6 rounded-lg overflow-hidden shadow-2xl transition duration-300 hover:-translate-y-1 hover:scale-105">
            <img
              className='w-full'
              src={experience.image}
              alt={experience.imageAlt} />
          </div>
        </div>
    </section>
  )
}
