import React from 'react'
import { ReactTyped } from 'react-typed'

const greetings = ["Bienvenido", "Welcome", "Willkommen", "Bienvenue", "Bem-vindo", "Benvenuto"]


export const Hero = () => {
  return (
    <section className='text-teal-50'>
        <div className='h-screen w-full mx-auto text-center flex flex-col justify-center'>
            <div className='md:text-7xl sm:text-6xl text-4xl h-1/4'>
                <ReactTyped
                strings={greetings}
                typeSpeed={120}
                backSpeed={80}
                loop/>
            </div>
            <p className='md:text-5xl sm:text-4xl text-2xl font-bold'> </p>
        </div>
    </section>
  )
}
