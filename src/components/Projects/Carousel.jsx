import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { getImage } from '../../utils'

export const Carousel = ({ projects }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === projects.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const currentProject = projects[currentIndex];
  
    return (
      <div className="max-w-xl mx-auto my-10 relative flex justify-center items-center overflow-hidden rounded-lg shadow-lg">
        <div className="w-full">
          <img
            className="w-full object-fit"
            src={getImage(currentProject.image)}
            alt={currentProject.imageAlt}
          />
          <div className="py-2 px-4 flex flex-col justify-between">
            <h2 className="text-xl font-bold my-3">{currentProject.title}</h2>
            <p className="h-52 overflow-auto">{currentProject.description}</p>
            <div className="text-sm flex justify-between items-center">
              <a
                href={currentProject.repo}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                Code
              </a>
              <div className="flex space-x-2">
                {currentProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-2 py-1 text-xs rounded-full bg-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-2">
              <button
                className="absolute top-[40%] left-3 z-10 cursor-pointer text-white hover:text-slate-400 focus:outline-none"
                onClick={prevSlide}
              >
                <FaArrowCircleLeft size={30}/>
              </button>
              <button
                className="absolute top-[40%] right-3 z-10 cursor-pointer text-white hover:text-slate-400 focus:outline-none"
                onClick={nextSlide}
              >
                <FaArrowCircleRight size={30}/>
              </button>
            </div>
        </div>
      </div>
    );
  };