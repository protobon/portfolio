import React, { useState, useEffect } from 'react'
import { ReactTyped } from 'react-typed'

export const Hero = ({ files, language }) => {
  const [hero, setHero] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      const heroData = await import(`../../data/${language}/hero.json`);
      setHero(heroData);
    };

    fetchData();
  }, [language]);

  return (
    <section id='hero' className='mx-auto flex flex-col md:flex-row md:justify-between w-full h-screen max-h-[2000px]'>
      <div className='appearFromLeft gradient-mask-r-70-d h-[45%] md:h-auto md:w-full'>
        <img 
          className='object-cover w-full h-full gradient-mask-t-80-d'
          src={files[0]}
          alt="Programming at a Cafe"
        />
      </div>
      <div className='appearFromRight flex flex-col items-center justify-center md:my-auto'>
        <div className='font-jost mx-6 mt-12 md:my-auto p-1 text-center leading-normal'>
          <p className='text-[1.5rem] md:text-[2rem] xl:[3rem]'>{hero.text}</p>
          <ReactTyped
          startWhenVisible
          className='mx-6 font-semibold text-[2.5rem] md:text-[3rem] xl:[4rem]'
          strings={[
            "backend",
            "frontend",
            "devOps"
          ]}
          typeSpeed={60}
          backSpeed={10}
          style={{color: 'var(--color-icon)'}}
          loop
          />
        </div>
        <a href="#about" className='text-white'>
          <button className='max-w-fit md:hidden mt-10 p-4 rounded-xl shadow-xl bg-[var(--color-icon)] text-sm hover:text-[var(--color-span)] transition-transform duration-300 hover:translate-y-[-5px]'>
            {hero.button}
          </button>
        </a>
      </div>
    </section>
  )
}
