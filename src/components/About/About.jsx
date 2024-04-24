import React, { useEffect, useState } from 'react'
import { useLanguage } from '../Util/LanguageContext';
import { Modal } from '../Util/Modal'


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
      <h1 className='md:text-4xl sm:text-3xl text-2xl text-center py-6'>{about.title}</h1>
      <div className='flex flex-col justify-center xl:flex-row'>
        <div className="max-w-xs mx-auto xl:my-auto xl:mx-8 my-6 rounded-lg overflow-hidden shadow-2xl transition duration-300 hover:-translate-y-1 hover:scale-105">
          <img
            className='w-full'
            src={about.image}
            alt={about.imageAlt} />
          {about.imageText && (<p className='lg:text-md xl:my-auto text-sm p-2'>{about.imageText}</p>)}
        </div>
        <div className='flex flex-col bg-white shadow-2xl text-start my-6 mx-10 text-[1rem] p-4 rounded-lg lg:text-lg xl:my-auto md:text-md'>
          {about.lines && (
            about.lines.map((line, idx) => {
              return <p key={idx} className='py-2'>{line}</p>
            }))
          }
          <Modal items={about.diplomas} name="files" legend={about.diplomasLegend}/>
        </div>
      </div>
    </section>
  )
}
