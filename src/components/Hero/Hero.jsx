import React from 'react'
import { ReactTyped } from 'react-typed'


export const Hero = () => {
  const greetings = [
    "Bienvenido",
    "Bem-vindo",
    "Welcome",
    "Bienvenue",
    "Benvenuto",
    "Willkommen"
  ]
  return (
    <section className='text-white border-b-2 border-white'>
        <div className='w-full h-screen bg-[url("/assets/desk2.jpg")] bg-cover bg-center mx-auto text-center flex flex-col justify-center'>
            <div className='md:text-6xl text-5xl h-1/5'>
                <ReactTyped
                strings={greetings}
                typeSpeed={120}
                backSpeed={50}
                loop/>
            </div>
            <p className='text-2xl font-bold'>about</p>
        </div>
    </section>
  )
}
