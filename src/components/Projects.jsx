import React from 'react'

import { AiFillAndroid, AiFillBank, AiFillEnvironment } from "react-icons/ai";

export const Projects = () => {
  return (
    <section className='w-full min-h-full py-8 px-4' id="projects">
        <div className='max-w-[1920px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full bg-white/80 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-95 duration-300'>
                <AiFillAndroid className='mx-auto m-top-[-3rem]' size={100}/>
                <h2 className='text-2xl font-bold text-center py-8'>
                    Hello Android
                </h2>
                <p className='text-md text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, nihil.</p>
            </div>
            <div className='w-full bg-white/80 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-95 duration-300'>
                <AiFillBank className='mx-auto m-top-[-3rem]' size={100}/>
                <h2 className='text-2xl font-bold text-center py-8'>
                    Hello Bank
                </h2>
                <p className='text-md text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, nihil.</p>
            </div>
            <div className='w-full bg-white/80 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-95 duration-300'>
                <AiFillEnvironment className='mx-auto m-top-[-3rem]' size={100}/>
                <h2 className='text-2xl font-bold text-center py-8'>
                    Hello Location
                </h2>
                <p className='text-md text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, nihil.</p>
            </div>
        </div>
    </section>
  )
}
