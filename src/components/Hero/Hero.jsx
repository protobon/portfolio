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
    <section className='flex flex-col md:flex-row md:justify-between w-full h-screen px-4'>
      <div className='object-contain mx-auto mt-24 mb-12 md:my-auto'>
        <img 
          className='heroImage rounded-full shadow-2xl'
          src={getImage(hero.imagePath)}
          alt=""
        />
      </div>
      {
        hero.text && (
          <>
            <div className='max-w-[95%] mx-auto mb-16 md:my-auto px-6 text-center font-semibold lg:col-span-2 text-md md:text-lg lg:text-xl xl:text-2xl'>
                <ReactTyped
                startWhenVisible
                style={{color: 'var(--color-subtitle)'}}
                className='[text-shadow:_1px_1px_2px_rgb(5_5_5_/_30%)]'
                strings={hero.text}
                typeSpeed={20}/>
            </div>
          </>
        )
      }
    </section>
  )
}
