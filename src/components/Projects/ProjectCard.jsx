import React from 'react'
import { getFile } from "../../utils"


export const ProjectCard = ({ project: {title, image, imageAlt, description, text, repo, technologies} }) => {  
  return (
    <div className='bg-white max-w-xl'>
      <img
        className="w-full object-fit"
        src={getFile(image)}
        alt={imageAlt}
      />
      <div className="py-2 h-80 px-4 flex flex-col">
        <a
          href={repo}
          target="_blank"
          rel="noreferrer">
          <h2 className="text-xl lg:text-2xl font-bold my-3">{title}</h2>
        </a>
        <p className="overflow-auto text-md lg:text-lg mb-4">{description}</p>
        {text && (
          <p className="overflow-auto bg-gray-200/50 p-2 rounded-xl text-sm lg:text-md">{text}</p>
        )}
        <div className="pt-2 mt-auto">
          {technologies.map((tech, idx) => {
            return <span key={idx} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">{tech}</span>
          })
          }
        </div>
      </div>
    </div>
  )
}
