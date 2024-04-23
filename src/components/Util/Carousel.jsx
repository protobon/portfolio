import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import { ProjectCard } from '../Projects/ProjectCard';
import { getFile } from '../../utils'


export const Carousel = ({ items, name }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === items.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const currentItem = items[currentIndex];
  
    return (
      <div className="mx-auto relative flex justify-center items-center overflow-hidden rounded-lg border-4 border-white shadow-2xl">
        <div className="w-full">
          {name === "projects" && (<ProjectCard project={currentItem}/>)}
          {name === "photos" && (currentItem.includes(".pdf") ? <iframe src={getFile(currentItem)} className='w-screen h-[40vh] sm:h-[50vh] md:w-full'/> : <img src={getFile(currentItem)} />)}
          <div className="flex justify-between">
              <button
                className={`absolute ${name === "projects" ? 'top-[30%]' : 'top-[50%]'} left-3 z-10 cursor-pointer text-white hover:text-slate-400 focus:outline-none`}
                onClick={prevSlide}
              >
                <IoIosArrowBack size={30}/>
              </button>
              <button
                className={`absolute ${name === "projects" ? 'top-[30%]' : 'top-[50%]'} right-3 z-10 cursor-pointer text-white hover:text-slate-400 focus:outline-none`}
                onClick={nextSlide}
              >
                <IoIosArrowForward size={30}/>
              </button>
            </div>
        </div>
      </div>
    );
  };