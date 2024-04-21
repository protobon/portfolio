import React, { useEffect, useState } from 'react'
import { ReactTyped } from 'react-typed'
import { useLanguage } from '../Util/LanguageContext';
import { getImage } from "../../utils"

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
    <section className='bg-[url("/assets/oscillate.svg")] bg-cover bg-center flex flex-col justify-center w-full h-screen mb-0 px-4'>
      <div className='object-contain mx-auto max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%] mt-24 mb-12'>
        <img 
          className='heroImage rounded-full shadow-2xl'
          src={getImage(hero.image)}
          alt="hero image"
        />
      </div>
      {
        hero.text && (
          <>
            <div className='font-ubuntu mx-auto bg-white shadow-2xl rounded-3xl px-2 text-center font-semibold text-xl mb-16 lg:text-2xl'>
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
