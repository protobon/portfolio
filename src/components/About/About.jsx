import React from 'react'
import { getImageUrl } from "../../utils"

import about from "../../data/about.json"


export const About = () => {
  return (
    <section className='w-full min-h-full py-8 px-6 my-8 text-white' id="about" >
      <h1 className='my-4 md:text-4xl sm:text-3xl text-2xl text-center'>{about.title}</h1>
      <div className='block xl:grid xl:grid-cols-3'>
        <img
          className='my-16 mx-auto rounded-full shadow-2xl max-h-96 border-2 border-white transition duration-500 hover:-translate-y-1 hover:scale-105'
          src={getImageUrl(about.imagePath)}
          alt="cruzado de brazos, sonriendo" />
        <p className='my-6 lg:text-lg xl:col-span-2 xl:my-auto md:text-md text-[1rem] p-4 rounded-lg shadow-2xl text-black bg-white'>{about.description}</p>
      </div>
    </section>
  )
}
