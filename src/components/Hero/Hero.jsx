import React, { useEffect, useState } from 'react'
import { ReactTyped } from 'react-typed'
import { useLanguage } from '../Util/LanguageContext';

export const Hero = () => {
  const { language } = useLanguage();
  const [hero, setHero] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const jsonData = await import(`../../data/${language}/hero.json`);
      setHero(jsonData);
    };

    fetchData();
  }, [language]);

  return (
    <section className='flex flex-col justify-center w-full h-screen mb-0 px-4'>
      <div className='object-contain mx-auto max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mt-24 mb-12'>
        <img 
          className='heroImage rounded-full shadow-2xl'
          src={hero.image}
          alt="hero image"
        />
      </div>
      {
        hero.text && (
          <>
            <div className='mx-auto bg-white shadow-2xl rounded-3xl px-2 text-center font-semibold text-xl mb-16 lg:text-2xl'>
                <ReactTyped
                startWhenVisible
                style={{color: 'var(--color-text)'}}
                strings={hero.text}
                typeSpeed={15}/>
            </div>
          </>
        )
      }
    </section>
  )
}
