import React from 'react'

import pythonCodeImg from "../assets/pythonCode.jpg"
import jsCodeImg from "../assets/jsCode.jpg"


export const Projects = () => {
  return (
    <section className='flex flex-col w-full min-h-full py-8 px-4' id="projects">
        <h1 className='font-bold py-6 text-center md:text-4xl sm:text-3xl text-2xl text-teal-50'>Projects</h1>
        <div className='max-w-[1920px] grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className="max-w-sm mx-auto my-6 rounded overflow-hidden shadow-lg bg-white">
                <img className="w-full" src={pythonCodeImg} alt="python code" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Python Project</div>
                    <p className="text-gray-700 text-base">
                    Project description *short*
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </div>
            <div className="max-w-sm mx-auto my-6 rounded overflow-hidden shadow-lg bg-white">
                <img className="w-full" src={jsCodeImg} alt="python code" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">React Project</div>
                    <p className="text-gray-700 text-base">
                    Project description *short*
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </div>
        </div>
    </section>
  )
}
