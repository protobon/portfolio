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
    <section className='flex flex-col m-auto justify-center w-full h-screen'>
      {
        hero.text && (
          <>
            <div className='max-w-[95%] px-3 font-semibold lg:text-lg xl:text-xl'>
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
