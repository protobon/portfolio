import React, { useState, useEffect, useRef, memo } from 'react'
import { Carousel } from '../Util/Carousel';
import { useLanguage } from '../Util/LanguageContext';

export const Projects = ({ files }) => {
  const { language } = useLanguage();
  const [projects, setProjects] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const projectsData = await import(`../../data/${language}/projects.json`);
      setProjects(projectsData);
    };

    fetchData();
  }, [language]);

  return (
    <section className="mx-auto pb-12 flex flex-col w-full min-h-full" id="projects">
      <div className='wave-shape-divider'>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
      {projects.title && (
        <>
          <h1 className="pb-6 text-center md:text-5xl sm:text-4xl text-3xl">{projects.title}</h1>
          <p className="text-center font-semibold mx-auto mb-6 p-4 lg:text-lg md:text-md text-[1rem] max-w-[1200px]">
            {projects.description}
          </p>
          {projects.list && projects.list.map((project, idx) => {
            project["image"] = files[idx]
            project["imageAlt"] = "project image"
          })
          }
          <Carousel items={projects.list} name="projects"/>
        </>
      )}
    </section>
  );
};
