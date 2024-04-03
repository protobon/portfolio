import React from 'react'
import { ReactTyped } from 'react-typed'

const greetings = ["Hola", "Hello", "Salut", "привет", "안녕", "Ciao", "Guten Tag", "您好", "こんにちは"]


export const Hero = () => {
  return (
    <section className='text-teal-50'>
        <div className='h-screen w-full mx-auto text-center flex flex-col justify-center'>
            <div className='md:text-7xl sm:text-6xl text-4xl font-bold h-1/4'>
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
