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
    <section className='grid grid-cols-1 lg:grid-cols-3 px-4 justify-center w-full h-screen'>
      <img 
        className='heroImage m-auto rounded-full shadow-2xl max-h-96'
        src={getImage(hero.imagePath)}
        alt="" 
      />
      {
        hero.text && (
          <>
            <div className='max-w-[95%] px-6 text-center font-semibold lg:col-span-2 sm:text-sm md:text-md lg:text-lg lg:my-auto xl:text-xl'>
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
