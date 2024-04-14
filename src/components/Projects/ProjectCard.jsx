import React, { useState } from 'react'

import { getImageUrl } from "../../utils"


export const ProjectCard = ({ project: {title, imagePath, imageAlt, description, repo, technologies} }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);
  
  return (
    <div className="max-w-xs mx-auto my-6 rounded-lg overflow-hidden shadow-xl border-4 border-white transition duration-300 hover:-translate-y-1 hover:scale-105">
        <a href={repo} target='_blank'><img className="w-full" src={getImageUrl(imagePath)} alt={imageAlt} /></a>
        <div className="px-4 py-2">
            <a href={repo} target='_blank'><h2 className="font-bold text-xl my-3">{title}</h2></a>
            <p className="text-base leading-relaxed">
            {isExpanded? description : description.slice(0, 100)}
            </p>
            {description.length > 100 && (
            <button
              type="button"
              onClick={toggleExpand}
              className={`text-blue-500 hover:text-blue-700`}
            >
              {isExpanded ? 'Hide' : 'Read More'}
            </button>
            )}
            <br />
        </div>
        <div className="px-4 py-2">
          {technologies.map((tech, idx) => {
            return <span key={idx} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">{tech}</span>

          })
          }
        </div>
    </div>
  )
}
