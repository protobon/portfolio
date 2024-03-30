import React from 'react'

import { FaHtml5, FaPython, FaReact, FaGitAlt, FaDocker, FaLinux } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { TbFileTypeSql } from "react-icons/tb";
import { DiMongodb, DiRedis } from "react-icons/di";
import { SiApachekafka, SiGraphql, SiKubernetes } from "react-icons/si";


export const Experience = () => {
  return (
    <section id="experience" className='flex last:w-ful py-6 px-4'>
        <div className='max-w-[1240px] mx-auto grid place-items-center md:grid-cols-12 sm:grid-cols-6 grid-cols-3'>
          <IoLogoJavascript size={50} color='white' className='m-auto p-1'/>
          <FaHtml5 size={50} color='white' className=''/>
          <FaPython size={50} color='white'/>
          <FaGolang size={50} color='white'/>
          <FaReact  size={50} color='white'/>
          <FaGitAlt  size={50} color='white'/>
          <TbFileTypeSql  size={50} color='white'/>
          <DiMongodb  size={50} color='white'/>
          <DiRedis  size={50} color='white'/>
          <FaDocker  size={50} color='white'/>
          <SiApachekafka  size={50} color='white'/>
          <FaLinux  size={50} color='white'/>
          <SiKubernetes  size={50} color='white'/>
          <SiGraphql  size={50} color='white'/>
        </div>
    </section>
  )
}
