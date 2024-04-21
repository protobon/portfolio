import React, { useEffect, useState } from 'react'
import { useLanguage } from '../Util/LanguageContext';
import { getImage } from '../../utils'
import { FaHtml5, FaPython, FaReact, FaGitAlt, 
  FaGithub, FaDocker, FaLinux, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandGolang } from "react-icons/tb";
import { DiMongodb, DiRedis } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { SiApachekafka, SiGraphql, SiTailwindcss,
  SiTraefikproxy, SiFastapi, SiSocketdotio, SiAtlassian,
  SiPostgresql, SiKubernetes, SiPrometheus } from "react-icons/si";


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
    <section id="experience" className='max-w-[1600px] mx-auto px-4 flex flex-col items-center w-full min-h-full'>
        <h1 className='py-6 md:text-4xl sm:text-3xl text-2xl'>{experience.title}</h1>
        <div className='w-full mx-auto my-4 grid place-items-center xl:grid-cols-12 lg:grid-cols-9 sm:grid-cols-6 grid-cols-3 font-semibold text-sm'>
          <div className='text-center m-2'>
            <FaPython size={50} style={{color: 'var(--color-icon)'}} className='m-auto'/>
            <p className='my-1'>Python</p>
          </div>
          <div className='text-center m-2'>
            <IoLogoJavascript size={50} style={{color: 'var(--color-icon)'}} className='m-auto'/>
            <p className='my-1'>JavaScript</p>
          </div>
          <div className='text-center m-2'>
            <TbBrandGolang size={55} style={{color: 'var(--color-icon)'}} className='m-auto'/>
            <p className='mb-1'>Go</p>
          </div>
          <div className='text-center m-2'>
            <FaHtml5 size={50} style={{color: 'var(--color-icon)'}} className='m-auto'/>
            <p className='my-1'>HTML5</p>
          </div>
          <div className='text-center m-2'>
            <FaCss3 size={50} style={{color: 'var(--color-icon)'}} className='m-auto'/>
            <p className='my-1'>CSS</p>
          </div>
          <div className='text-center m-2'>
            <FaReact size={50} style={{color: 'var(--color-icon)'}} className='m-auto'/>
            <p className='my-1'>React</p>
          </div>
          <div className='text-center m-2'>
            <SiTailwindcss size={50} style={{color: 'var(--color-icon)'}} className='m-auto'/>
            <p className='my-1'>Tailwind</p>
          </div>
          <div className='text-center m-2'>
            <SiFastapi  size={50} style={{color: 'var(--color-icon)'}} className='m-auto'/>
            <p className='my-1'>FastAPI</p>
          </div>
          <div className='text-center m-2'>
            <SiSocketdotio  size={50} style={{color: 'var(--color-icon)'}} className='m-auto'/>
            <p className='my-1'>Socket IO</p>
          </div>
          <div className='text-center m-2'>
            <SiGraphql size={50} style={{color: 'var(--color-icon)'}} className='m-auto'/>
            <p className='my-1'>GraphQL</p>
          </div>
          <div className='text-center m-2'>
            <SiApachekafka size={50} style={{color: 'var(--color-icon)'}} className='m-auto'/>
            <p className='my-1'>Kafka</p>
          </div>
          <div className='text-center m-2'>
            <FaLinux size={50} style={{color: 'var(--color-icon)'}} className='m-auto'/>
            <p className='my-1'>Linux</p>
          </div>
          <div className='text-center m-2'>
            <FaGitAlt size={50} style={{color: 'var(--color-icon)'}} className='m-auto'/>
            <p className='my-1'>Git</p>
          </div>
          <div className='text-center m-2'>
            <FaGithub size={50} style={{color: 'var(--color-icon)'}} className='m-auto'/>
            <p className='my-1'>GitHub</p>
          </div>
          <div className='text-center m-2'>
            <DiMongodb size={50} style={{color: 'var(--color-icon)'}} className='m-auto'/>
            <p className='my-1'>MongoDB</p>
          </div>
          <div className='text-center m-2'>
            <SiPostgresql size={50} style={{color: 'var(--color-icon)'}} className='m-auto'/>
            <p className='my-1'>PostgreSQL</p>
          </div>
          <div className='text-center m-2'>
            <DiRedis size={50} style={{color: 'var(--color-icon)'}} className='m-auto'/>
            <p className='my-1'>Redis</p>
          </div>
          <div className='text-center m-2'>
            <IoLogoFirebase size={50} style={{color: 'var(--color-icon)'}} className='m-auto'/>
            <p className='my-1'>Firebase</p>
          </div>
          <div className='text-center m-2'>
            <FaDocker size={50} style={{color: 'var(--color-icon)'}} className='m-auto'/>
            <p className='my-1'>Docker</p>
          </div>
          <div className='text-center m-2'>
            <SiKubernetes size={50} style={{color: 'var(--color-icon)'}} className='m-auto'/>
            <p className='my-1'>Kubernetes</p>
          </div>
          <div className='text-center m-2'>
            <SiPrometheus size={50} style={{color: 'var(--color-icon)'}} className='m-auto'/>
            <p className='my-1'>Prometheus</p>
          </div>
          <div className='text-center m-2'>
            <SiTraefikproxy  size={50} style={{color: 'var(--color-icon)'}} className='m-auto'/>
            <p className='my-1'>Traefik</p>
          </div>
          <div className='text-center m-2'>
            <SiAtlassian  size={50} style={{color: 'var(--color-icon)'}} className='m-auto'/>
            <p className='my-1'>Atlassian</p>
          </div>
        </div>
        <div className='flex flex-col items-center mt-8 lg:flex-row lg:justify-start'>
          {experience.description && (
            <p className='text-start bg-white my-4 lg:text-lg md:text-md text-[1rem] p-4 rounded-lg shadow-2xl'>
            {experience.description}
            </p>
          )}
          <div className="max-w-xs mx-auto lg:my-auto lg:mx-8 my-6 rounded-lg overflow-hidden shadow-2xl transition duration-300 hover:-translate-y-1 hover:scale-105">
            <img
              className='w-full'
              src={getImage(experience.image)}
              alt={experience.imageAlt} />
          </div>
        </div>
    </section>
  )
}
