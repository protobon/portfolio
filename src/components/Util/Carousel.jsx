import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import { ProjectCard } from '../Projects/ProjectCard';


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
      <div className="m-auto relative flex justify-center items-center overflow-hidden rounded-lg border-4 border-white shadow-2xl">
        <div className="w-full">
          {name === "projects" && (<ProjectCard project={currentItem}/>)}
          {name === "files" && (currentItem.includes(".pdf") ? <iframe src={currentItem} className='w-screen h-[40vh] sm:h-[50vh] md:w-full'/> : <img src={currentItem} />)}
        </div>
        <div className="flex justify-between">
          <button
            className={`absolute ${name === "projects" ? 'top-[25%]' : 'top-[50%]'} p-1 left-3 z-10 cursor-pointer bg-white/50 rounded-full text-[var(--color-icon)] hover:text-[var(--color-span)] hover:translate-x-[-3px] transition ease-linear duration-200 focus:outline-none`}
            onClick={prevSlide}
          >
            <IoIosArrowBack size={35}/>
          </button>
          <button
            className={`absolute ${name === "projects" ? 'top-[25%]' : 'top-[50%]'} p-1 right-3 z-10 cursor-pointer bg-white/50 rounded-full text-[var(--color-icon)] hover:text-[var(--color-span)] hover:translate-x-[3px] transition ease-linear duration-200 focus:outline-none`}
            onClick={nextSlide}
          >
            <IoIosArrowForward size={35}/>
          </button>
        </div>
        <div className='absolute top-1 left-1 text-[var(--color-icon)] bg-white/50 rounded-full p-1 font-medium'>{`${currentIndex + 1}/${items.length}`}</div>
      </div>
    );
  };