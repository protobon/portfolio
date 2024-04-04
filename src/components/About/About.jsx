import React from 'react'
import { getImageUrl } from "../../utils"

import about from "../../data/about.json"


export const About = () => {
  return (
    <section className='w-full min-h-full py-8 px-6 my-8 text-white' id="about" >
        <div className='max-w-[1920px] mx-auto grid justify-center md:grid-cols-3'>
            <div className="mx-auto my-6 px-6 flex flex-col justify-center" >
              <img
              className='rounded-full shadow-2xl max-h-96 border-4 border-white transition duration-500 hover:-translate-y-1 hover:scale-105'
              src={getImageUrl(about.imagePath)}
              alt="cruzado de brazos, sonriendo" />
            </div>
            <div className='flex flex-col mx-auto px-6 pb-6 rounded-lg justify-top text-center md:justify-center md:col-span-2 bg-black/50'>
                <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl my-4'>{about.title}</h1>
                <p className='lg:text-lg md:text-md text-[15px]'>{about.description}</p>
            </div>
        </div>
    </section>
  )
}
