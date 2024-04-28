import React, { useState, useEffect, useRef, memo } from 'react'
import { Carousel } from '../Util/Carousel';

export const Projects = ({ files, language }) => {
  const [projects, setProjects] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const projectsData = await import(`../../data/${language}/projects.json`);
      setProjects(projectsData);
    };

    fetchData();
  }, [language]);

  return (
    <section className="mx-auto px-4 flex flex-col w-full min-h-full" id="projects">
      {projects.title && (
        <>
          <h1 className="py-6 text-center md:text-5xl sm:text-4xl text-3xl">{projects.title}</h1>
          <p className="text-center shadow-2xl bg-white mx-auto mb-6 p-4 lg:text-lg md:text-md text-[1rem] rounded-lg">
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
