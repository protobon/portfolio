import React, { useState, useEffect, useRef } from 'react'
import { Modal } from '../Util/Modal'


export const About = ({ files, language }) => {
  const [about, setAbout] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const aboutData = await import(`../../data/${language}/about.json`);
      setAbout(aboutData);
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
    <section className='mx-auto w-full pb-12 min-h-full bg-[var(--color-bg-about)]' id="about" >
      <h1 className='md:text-5xl sm:text-4xl text-3xl text-center py-6'>{about.title}</h1>
      <div className='flex flex-col justify-center xl:flex-row'>
        <div ref={leftRef} className="max-w-xs mx-auto xl:my-auto xl:mx-8 my-6 rounded-full overflow-hidden shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-105">
          <img
            className='w-full'
            src={files[0]}
            alt="Myself outside Hotel Argentino, Piriapolis"
          />
        </div>
        <div ref={rightRef} className='flex flex-col bg-white shadow-2xl text-start mx-8 my-6 p-2 text-[1rem] md:text-md lg:text-lg rounded-lg xl:my-auto'>
          {about.lines && (
            about.lines.map((line, idx) => {
              return <p key={idx} className='py-2'>{line}</p>
            }))
          }
          <Modal items={files.slice(1)} name="files" legend={about.diplomasLegend}/>
        </div>
      </div>
    </section>
  )
}
