import React, { useEffect, useState } from 'react'
import { useLanguage } from '../Util/LanguageContext';

import { FaHtml5, FaPython, FaReact, FaGitAlt, FaDocker, FaLinux, FaCss3 } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { TbFileTypeSql } from "react-icons/tb";
import { DiMongodb, DiRedis } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { SiApachekafka, SiGraphql, SiDatadog, SiTailwindcss,
  SiTraefikproxy, SiFastapi, SiSocketdotio, SiAtlassian } from "react-icons/si";


export const Experience = () => {
  const { language } = useLanguage();
  const [experience, setExperience] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const jsonData = await import(`../../data/${language}/experience.json`);
      setExperience(jsonData);
    };

    fetchData();
  }, [language]);

  return (
    <section id="experience" className='max-w-[1600px] mx-auto flex flex-col items-center w-full min-h-full py-6 px-4 my-8'>
        <h1 className='py-6 md:text-4xl sm:text-3xl text-2xl'>{experience.title}</h1>
        <p className='my-4 lg:text-lg md:text-md text-[1rem] p-4 rounded-lg shadow-2xl'>
          {experience.description}
        </p>
        <div className='w-full mx-auto my-4 grid place-items-center lg:grid-cols-12 md:grid-cols-9 sm:grid-cols-6 grid-cols-3 font-semibold'>
          <div className='text-center my-2'>
            <IoLogoJavascript size={50} color='rgb(14, 48, 104)' className='m-auto'/>
            <p>JavaScript</p>
          </div>
          <div className='text-center my-2'>
            <FaPython size={50} color='rgb(14, 48, 104)' className='m-auto'/>
            <p>Python</p>
          </div>
          <div className='text-center my-2'>
            <FaGolang size={60} color='rgb(14, 48, 104)' className='m-auto'/>
            <p>Go</p>
          </div>
          <div className='text-center my-2'>
            <FaHtml5 size={50} color='rgb(14, 48, 104)' className='m-auto'/>
            <p>HTML5</p>
          </div>
          <div className='text-center my-2'>
            <FaCss3 size={50} color='rgb(14, 48, 104)' className='m-auto'/>
            <p>CSS</p>
          </div>
          <div className='text-center my-2'>
            <FaReact size={50} color='rgb(14, 48, 104)' className='m-auto'/>
            <p>React</p>
          </div>
          <div className='text-center my-2'>
            <SiTailwindcss size={50} color='rgb(14, 48, 104)' className='m-auto'/>
            <p>Tailwind</p>
          </div>
          <div className='text-center my-2'>
            <SiFastapi  size={50} color='rgb(14, 48, 104)' className='m-auto'/>
            <p>FastAPI</p>
          </div>
          <div className='text-center my-2'>
            <SiSocketdotio  size={50} color='rgb(14, 48, 104)' className='m-auto'/>
            <p>Socket IO</p>
          </div>
          <div className='text-center my-2'>
            <SiGraphql size={50} color='rgb(14, 48, 104)' className='m-auto'/>
            <p>GraphQL</p>
          </div>
          <div className='text-center my-2'>
            <IoLogoFirebase size={50} color='rgb(14, 48, 104)' className='m-auto'/>
            <p>Firebase</p>
          </div>
          <div className='text-center my-2'>
            <DiMongodb size={50} color='rgb(14, 48, 104)' className='m-auto'/>
            <p>MongoDB</p>
          </div>
          <div className='text-center my-2'>
            <DiRedis size={50} color='rgb(14, 48, 104)' className='m-auto'/>
            <p>Redis</p>
          </div>
          <div className='text-center my-2'>
            <TbFileTypeSql size={50} color='rgb(14, 48, 104)' className='m-auto'/>
            <p>SQL</p>
          </div>
          <div className='text-center my-2'>
            <FaLinux size={50} color='rgb(14, 48, 104)' className='m-auto'/>
            <p>Linux</p>
          </div>
          <div className='text-center my-2'>
            <FaGitAlt size={50} color='rgb(14, 48, 104)' className='m-auto'/>
            <p>Git</p>
          </div>
          <div className='text-center my-2'>
            <FaDocker size={50} color='rgb(14, 48, 104)' className='m-auto'/>
            <p>Docker</p>
          </div>
          <div className='text-center my-2'>
            <SiTraefikproxy  size={50} color='rgb(14, 48, 104)' className='m-auto'/>
            <p>Traefik</p>
          </div>
          <div className='text-center my-2'>
            <SiApachekafka size={50} color='rgb(14, 48, 104)' className='m-auto'/>
            <p>Kafka</p>
          </div>
          <div className='text-center my-2'>
            <SiDatadog size={50} color='rgb(14, 48, 104)' className='m-auto'/>
            <p>DataDog</p>
          </div>
          <div className='text-center my-2'>
            <SiAtlassian  size={50} color='rgb(14, 48, 104)' className='m-auto'/>
            <p>Atlassian</p>
          </div>
        </div>
    </section>
  )
}
