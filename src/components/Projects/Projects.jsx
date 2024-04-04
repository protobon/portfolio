import React from 'react'

import { ProjectCard } from "./ProjectCard"
import projects from "../../data/projects.json"


export const Projects = () => {
  return (
    <section className='flex flex-col w-full min-h-full py-6 px-4 my-8' id="projects">
        <h1 className='py-6 text-center md:text-4xl sm:text-3xl text-2xl text-white'>Projects</h1>
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
