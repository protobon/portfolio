import React from 'react'

import { FaHtml5, FaPython, FaReact, FaGitAlt, FaDocker, FaLinux, FaCss3 } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { TbFileTypeSql } from "react-icons/tb";
import { DiMongodb, DiRedis } from "react-icons/di";
import { LuFileJson2 } from "react-icons/lu";
import { SiApachekafka, SiGraphql, SiKubernetes, SiDatadog, SiTailwindcss } from "react-icons/si";


export const Experience = () => {
  return (
    <section id="experience" className='flex flex-col items-center w-full min-h-full py-6 px-4 text-white font-semibold'>
        <h1 className='font-bold py-6 md:text-4xl sm:text-3xl text-2xl'>Technologies</h1>
        <div className='max-w-[1920px] w-full mx-auto my-4 grid place-items-center md:grid-cols-9 sm:grid-cols-6 grid-cols-3'>
          <div className='text-center my-2'>
            <IoLogoJavascript size={50} color='white' className='m-auto'/>
            <p>JavaScript</p>
          </div>
          <div className='text-center my-2'>
            <FaHtml5 size={50} color='white' className='m-auto'/>
            <p>HTML5</p>
          </div>
          <div className='text-center my-2'>
            <FaCss3 size={50} color='white' className='m-auto'/>
            <p>CSS</p>
          </div>
          <div className='text-center my-2'>
            <FaReact size={50} color='white' className='m-auto'/>
            <p>React</p>
          </div>
          <div className='text-center my-2'>
            <SiTailwindcss size={50} color='white' className='m-auto'/>
            <p>Tailwind</p>
          </div>
          <div className='text-center my-2'>
            <SiGraphql size={50} color='white' className='m-auto'/>
            <p>GraphQL</p>
          </div>
          <div className='text-center my-2'>
            <LuFileJson2 size={50} color='white' className='m-auto'/>
            <p>JSON</p>
          </div>
          <div className='text-center my-2'>
            <FaPython size={50} color='white' className='m-auto'/>
            <p>Python</p>
          </div>
          <div className='text-center my-2'>
            <FaGolang size={50} color='white' className='m-auto'/>
            <p>Go</p>
          </div>
          <div className='text-center my-2'>
            <FaGitAlt size={50} color='white' className='m-auto'/>
            <p>Git</p>
          </div>
          <div className='text-center my-2'>
            <DiMongodb size={50} color='white' className='m-auto'/>
            <p>MongoDB</p>
          </div>
          <div className='text-center my-2'>
            <DiRedis size={50} color='white' className='m-auto'/>
            <p>Redis</p>
          </div>
          <div className='text-center my-2'>
            <TbFileTypeSql size={50} color='white' className='m-auto'/>
            <p>SQL</p>
          </div>
          <div className='text-center my-2'>
            <FaDocker size={50} color='white' className='m-auto'/>
            <p>Docker</p>
          </div>
          <div className='text-center my-2'>
            <SiApachekafka size={50} color='white' className='m-auto'/>
            <p>Kafka</p>
          </div>
          <div className='text-center my-2'>
            <FaLinux size={50} color='white' className='m-auto'/>
            <p>Linux</p>
          </div>
          <div className='text-center my-2'>
            <SiKubernetes size={50} color='white' className='m-auto'/>
            <p>Kubernetes</p>
          </div>
          <div className='text-center my-2'>
            <SiDatadog size={50} color='white' className='m-auto'/>
            <p>DataDog</p>
          </div>
        </div>
    </section>
  )
}
