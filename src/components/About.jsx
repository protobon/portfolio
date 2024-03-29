import React from 'react'
import profileImage from '../assets/profileImage.jpg'

export const About = () => {
  return (
    <section className='w-full bg-white py-16' id="about" >
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className="mx-auto my-6 rounded-full max-w-80" src={profileImage} alt="cruzado de brazos, sonriendo" />
            <div className='flex flex-col mx-auto justify-top text-center md:justify-center'>
                <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl py-2'>Full-stack developer</h1>
                <p className='md:text-lg sm:text-md text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </section>
  )
}
