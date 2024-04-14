import React, { useEffect, useState } from 'react'
import { useLanguage } from '../Util/LanguageContext';

import { ProjectCard } from "./ProjectCard"


export const Projects = () => {
  const { language } = useLanguage();
  const [projects, setProjects] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const jsonData = await import(`../../data/${language}/projects.json`);
      setProjects(jsonData);
    };

    fetchData();
  }, [language]);

  return (
    <section className='max-w-[1600px] mx-auto flex flex-col w-full min-h-full py-6 px-4 my-8' id="projects">
      {projects.title && (
        <>
          <h1 className='py-6 text-center md:text-4xl sm:text-3xl text-2xl'>{projects.title}</h1>
          <p className='max-w-[1920px] my-4 lg:text-lg md:text-md text-[1rem] p-4 rounded-lg shadow-2xl'>
            {projects.description}
          </p>
          <div className='max-w-[1920px] grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {projects.projects.map((p, idx) => (
              <ProjectCard key={idx} project={p} />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
