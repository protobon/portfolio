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
    <section className='flex flex-col sm:flex-row sm:justify-between w-full h-screen px-4'>
      <div className='object-contain mx-auto mt-24 mb-12 sm:my-auto'>
        <img 
          className='heroImage rounded-full shadow-2xl'
          src={getImage(hero.imagePath)}
          alt=""
        />
      </div>
      {
        hero.text && (
          <>
            <div className='max-w-[95%] mx-auto mb-16 sm:my-auto px-6 text-center font-semibold lg:col-span-2 text-md md:text-lg lg:text-xl xl:text-2xl'>
                <ReactTyped
                startWhenVisible
                style={{color: 'black'}}
                strings={hero.text}
                typeSpeed={30}/>
            </div>
          </>
        )
      }
    </section>
  )
}
