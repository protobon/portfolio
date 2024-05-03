import React, { useState, useEffect, useRef } from 'react'
import { Technologies } from './Technologies'
import { useLanguage } from '../Util/LanguageContext';


export const Experience = ({ files }) => {
  const { language } = useLanguage();
  const [experience, setExperience] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const experienceData = await import(`../../data/${language}/experience.json`);
      setExperience(experienceData);
    };

    fetchData();
  }, [language]);

  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        leftRef.current.classList.add('appearFromLeft');
        observer.unobserve(leftRef.current); // Unobserve after trigger
      }
    });
    observer.observe(leftRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        rightRef.current.classList.add('appearFromRight')
        observer.unobserve(rightRef.current);
      }
    });
    observer.observe(rightRef.current);
  }, []);

  return (
    <section id="experience" className='mx-auto flex flex-col w-full min-h-full bg-[var(--color-bg-experience)]'>
      <div className="curve-shape-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      <h1 className='text-center md:text-5xl sm:text-4xl text-3xl'>{experience.title}</h1>
      <div className='flex flex-col items-center my-12 lg:flex-row lg:justify-start'>
        <div ref={leftRef} className='flex flex-col m-3'>
          <div className='flex flex-row justify-between mx-2'>
          {experience.logTech && <h2 className='text-xl xl:text-2xl font-semibold my-4'>{experience.logTech.title}</h2>}
          {experience.logTech && <h2 className='text-lg text-[var(--color-span)] xl:text-xl font-semibold my-4'>{experience.logTech.years}</h2>}
          </div>
          {experience.logTech && <p className='bg-white rounded-lg p-2 shadow-lg'>{experience.logTech.description}</p>}
          {experience.logTech && (
            <p className='justify-start text-sm font-medium p-2 text-[var(--color-span)]'>{experience.logTech.technologies.join(", ")}</p>
          )}
        </div>
        <div ref={rightRef} className="max-w-xs mx-auto lg:my-auto lg:mx-8 my-6 rounded-lg overflow-hidden shadow-2xl transition duration-300 hover:-translate-y-1 hover:scale-105">
          <img
            className='w-full'
            src={files[0]}
            alt="My hands typing in my laptop, next to a cup of coffee and a carrot cake" />
        </div>
      </div>
      <h1 className='text-center py-6 md:text-5xl sm:text-4xl text-3xl'>{experience.subtitle}</h1>
      <div className='slider whitespace-nowrap gradient-mask-r-80-d py-10'>
        <Technologies/>
      </div>
    </section>
  )
}
