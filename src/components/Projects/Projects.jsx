import React from 'react'

import { ProjectCard } from "./ProjectCard"
import projects from "../../data/projects.json"
import project from "../../data/project.json"


export const Projects = () => {
  return (
    <section className='max-w-[1600px] mx-auto flex flex-col w-full min-h-full py-6 px-4 my-8' id="projects">
        <h1 className='py-6 text-center md:text-4xl sm:text-3xl text-2xl text-white'>{project.title}</h1>
        <p className='max-w-[1920px] my-4 lg:text-lg md:text-md text-[1rem] p-4 rounded-lg shadow-2xl text-black bg-white'>
          {project.description}
        </p>
        <div className='max-w-[1920px] grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
              projects.map((project, idx) => {
                return <ProjectCard key={idx} project={project}/>
              })
            }
        </div>
    </section>
  )
}
