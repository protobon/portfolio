import React from 'react'
import { FaHtml5, FaPython, FaReact, FaGitAlt, 
    FaGithub, FaDocker, FaLinux, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandGolang } from "react-icons/tb";
import { DiMongodb, DiRedis } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { SiApachekafka, SiGraphql, SiTailwindcss,
SiTraefikproxy, SiFastapi, SiSocketdotio, SiAtlassian,
SiPostgresql, SiKubernetes, SiPrometheus, SiTensorflow } from "react-icons/si";
export const Technologies = () => {
  return (
    <div className='w-full mx-auto my-8 grid place-items-center xl:grid-cols-12 lg:grid-cols-9 sm:grid-cols-6 grid-cols-3 font-semibold text-sm'>
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
        <SiTensorflow size={50} style={{color: 'var(--color-icon)'}} className='m-auto'/>
        <p className='my-1'>Tensorflow</p>
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
  )
}
