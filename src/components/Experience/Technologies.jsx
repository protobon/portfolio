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
  const technologies = [
    {name: "Python", icon: <FaPython size={70} style={{color: 'var(--color-icon)'}} className='m-auto'/>},
    {name: "JavaScript", icon: <IoLogoJavascript size={70} style={{color: 'var(--color-icon)'}} className='m-auto'/>},
    {name: "Go", icon: <TbBrandGolang size={70} style={{color: 'var(--color-icon)'}} className='m-auto'/>},
    {name: "HTML5", icon: <FaHtml5 size={70} style={{color: 'var(--color-icon)'}} className='m-auto'/>},
    {name: "CSS", icon: <FaCss3 size={70} style={{color: 'var(--color-icon)'}} className='m-auto'/>},
    {name: "Git", icon: <FaGitAlt size={70} style={{color: 'var(--color-icon)'}} className='m-auto'/>},
    {name: "GitHub", icon: <FaGithub size={70} style={{color: 'var(--color-icon)'}} className='m-auto'/>},
    {name: "MongoDB", icon: <DiMongodb size={70} style={{color: 'var(--color-icon)'}} className='m-auto'/>},
    {name: "PostgreSQL", icon: <SiPostgresql size={70} style={{color: 'var(--color-icon)'}} className='m-auto'/>},
    {name: "Redis", icon: <DiRedis size={70} style={{color: 'var(--color-icon)'}} className='m-auto'/>},
    {name: "Firebase", icon: <IoLogoFirebase size={70} style={{color: 'var(--color-icon)'}} className='m-auto'/>},
    {name: "React", icon: <FaReact size={70} style={{color: 'var(--color-icon)'}} className='m-auto'/>},
    {name: "Tailwind", icon: <SiTailwindcss size={70} style={{color: 'var(--color-icon)'}} className='m-auto'/>},
    {name: "FastAPI", icon: <SiFastapi  size={70} style={{color: 'var(--color-icon)'}} className='m-auto'/>},
    {name: "Socket IO", icon: <SiSocketdotio  size={70} style={{color: 'var(--color-icon)'}} className='m-auto'/>},
    {name: "GraphQL", icon: <SiGraphql size={70} style={{color: 'var(--color-icon)'}} className='m-auto'/>},
    {name: "Kafka", icon: <SiApachekafka size={70} style={{color: 'var(--color-icon)'}} className='m-auto'/>},
    {name: "Linux", icon: <FaLinux size={70} style={{color: 'var(--color-icon)'}} className='m-auto'/>},
    {name: "Tensorflow", icon: <SiTensorflow size={70} style={{color: 'var(--color-icon)'}} className='m-auto'/>},
    {name: "Docker", icon: <FaDocker size={70} style={{color: 'var(--color-icon)'}} className='m-auto'/>},
    {name: "Kubernetes", icon: <SiKubernetes size={70} style={{color: 'var(--color-icon)'}} className='m-auto'/>},
    {name: "Prometheus", icon: <SiPrometheus size={70} style={{color: 'var(--color-icon)'}} className='m-auto'/>},
    {name: "Traefik", icon: <SiTraefikproxy  size={70} style={{color: 'var(--color-icon)'}} className='m-auto'/>},
    {name: "Atlassian", icon: <SiAtlassian  size={70} style={{color: 'var(--color-icon)'}} className='m-auto'/>},
  ]

  const doubleSlides = [...technologies, ...technologies]
  return (
    <div className='slide-track text-center'>
      {/* Duplicate the content to create seamless loop */}
      <div className={`flex flex-row`}>
        {doubleSlides.map((tech) => (
          <div key={tech.name} className='my-2 mx-6'>
            {tech.icon}
            <p className='my-1'>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
