import React, { useEffect, useState } from 'react';
import { useLanguage } from '../Util/LanguageContext';
import { Carousel } from '../Util/Carousel';

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
    <section className="mx-auto px-4 flex flex-col w-full min-h-full" id="projects">
      {projects.title && (
        <>
          <h1 className="py-6 text-center md:text-4xl sm:text-3xl text-2xl">{projects.title}</h1>
          <p className="text-center shadow-2xl bg-white mx-auto mb-6 p-4 lg:text-lg md:text-md text-[1rem] rounded-lg">
            {projects.description}
          </p>
          <Carousel items={projects.list} name="projects"/>
        </>
      )}
    </section>
  );
};
