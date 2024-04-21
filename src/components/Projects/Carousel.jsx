import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import { getImage } from '../../utils'

export const Carousel = ({ projects }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

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
      <div className="bg-white max-w-xl mx-auto my-10 relative flex justify-center items-center overflow-hidden rounded-lg border-4 border-white shadow-2xl">
        <div className="w-full">
          <img
            className="w-full object-fit"
            src={getImage(currentProject.image)}
            alt={currentProject.imageAlt}
          />
          <div className="py-2 h-72 px-4 flex flex-col">
            <a
              href={currentProject.repo}
              target="_blank"
              rel="noreferrer">
              <h2 className="text-xl font-bold my-3">{currentProject.title}</h2>
            </a>
            <p className="overflow-auto">{currentProject.description}</p>
            <div className="pt-2 mt-auto">
              {currentProject.technologies.map((tech, idx) => {
                return <span key={idx} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">{tech}</span>
              })
              }
            </div>
          </div>
          <div className="flex justify-between mt-2">
              <button
                className="absolute top-[40%] left-3 z-10 cursor-pointer text-white hover:text-slate-400 focus:outline-none"
                onClick={prevSlide}
              >
                <IoIosArrowBack size={30}/>
              </button>
              <button
                className="absolute top-[40%] right-3 z-10 cursor-pointer text-white hover:text-slate-400 focus:outline-none"
                onClick={nextSlide}
              >
                <IoIosArrowForward size={30}/>
              </button>
            </div>
        </div>
      </div>
    );
  };