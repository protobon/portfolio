import React from 'react'
import profileImage from '../assets/profileImage.jpg'

export const About = () => {
  return (
    <section className='w-full min-h-full py-8 text-white' id="about" >
        <div className='max-w-[1920px] mx-auto grid justify-center md:grid-cols-3'>
            <div className="mx-auto my-6 px-6 flex flex-col justify-center" >
              <img className='rounded-full shadow-2xl max-h-96' src={profileImage} alt="cruzado de brazos, sonriendo" />
            </div>
            <div className='flex flex-col mx-auto px-6 justify-top text-center md:justify-center md:col-span-2'>
                <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl my-4'>Full-stack developer</h1>
                <p className='lg:text-lg md:text-md text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta id facere, necessitatibus expedita nam esse neque excepturi quibusdam maxime. Similique, dignissimos, maxime dolor quisquam nemo reiciendis officiis vero tempore labore id, officia asperiores cum recusandae! Sed, ex placeat. Eum vitae aliquam velit qui maxime ut recusandae ducimus corporis maiores quisquam, blanditiis, voluptatum pariatur minima quibusdam harum. Consectetur doloribus recusandae saepe quo eius hic aperiam blanditiis neque culpa, omnis optio adipisci deleniti, error beatae. Commodi nostrum assumenda neque vero odio ad minus adipisci nam ut, sapiente architecto ipsum debitis incidunt reiciendis qui? Quod neque ipsum id, modi blanditiis ducimus eius aliquam!</p>
            </div>
        </div>
    </section>
  )
}
