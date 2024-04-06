import React from 'react'

import { getImageUrl } from "../../utils"


export const ProjectCard = ({ project: {title, imagePath, description, repo, technologies} }) => {
  return (
    <div className="max-w-sm mx-auto my-6 rounded overflow-hidden shadow-lg bg-white border-4 border-white transition duration-500 hover:-translate-y-1 hover:scale-105">
        <img className="w-full" src={getImageUrl(imagePath)} alt="python code" />
        <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">{title}</h2>
            <p className="text-gray-700 text-base">
            {description}
            </p>
            <a href={repo} className='underline'>code</a>
        </div>
        <div className="px-6 pt-4 pb-2">
          {technologies.map((tech, idx) => {
            return <span key={idx} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tech}</span>

          })
          }
        </div>
    </div>
  )
}
