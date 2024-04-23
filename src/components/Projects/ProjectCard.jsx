import React from 'react'
import { getFile } from "../../utils"


export const ProjectCard = ({ project: {title, image, imageAlt, description, text, repo, technologies} }) => {  
  return (
    <div className='bg-white max-w-xl'>
      <img
        className='rounded-lg w-full object-cover'
        src={getFile(image)}
        alt={imageAlt}
      />
      <div className="flex flex-col px-2 h-96">
        <a
          href={repo}
          target="_blank"
          rel="noreferrer">
          <h2 className="text-center text-lg xl:text-xl font-bold my-3">{title}</h2>
        </a>
        <p className="overflow-auto text-md xl:text-lg mb-2">{description}</p>
        {text && (
          <p className="overflow-auto bg-gray-200/50 p-1 mx-2 mb-4 rounded-xl text-sm xl:text-md">{text}</p>
        )}
        <div className="mt-auto">
          {technologies.map((tech, idx) => {
            return <span key={idx} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">{tech}</span>
          })
          }
        </div>
      </div>
    </div>
  )
}
