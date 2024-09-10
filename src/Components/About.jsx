import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import Img from '../Assets/web-development.jpg'

const About = () => {
  return (
    <div id='about' className='text-white md:flex overflow-hidden items-center md:flex-wrap bg-[#0000005d] shadow-xl mx-auto md:mx-10 md:mb-10 mt-16 md:py-20 bg-opacity-30 rounded-lg p-5 md:justify-center'>
      <div className='flex flex-col gap-5 justify-center items-center'>
        <div className='mx-auto w-fit my-5'>
            <h1 className='text-3xl md:text-5xl font-bold tracking-wider mx-auto'>About</h1>
            <div className='w-[95%] h-1 bg-green-400 rounded-full'></div>
        </div>
        <div className='md:flex max-md:w-72 flex-wrap flex-col gap-10 md:flex-row justify-center items-center md:mt-10'>
            <img className='md:h-80 rounded-lg' src={Img} alt="" />
            <ul className='flex flex-col gap-6'>
                <div className='flex gap-3 py-4'>
                    <IoArrowForward size={30} className='mt-1' />
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Front-End Developer</h1>
                        <p className='text-sm md:text-md leading-tight'>I’m proficient in HTML, CSS, JavaScript, React, Redux, and Tailwind, with hands-on experience in building various projects. My work showcases a solid understanding of modern web development techniques and best practices.</p>
                    </span>
                </div>
                <div className='flex gap-3 py-4'>
                    <IoArrowForward size={30} className='mt-1' />
                    <span className='w-96'>
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Back-End Developer</h1>
                        <p className='text-sm md:text-md leading-tight'>I’m experienced in backend development using Node.js, Express, and MongoDB. I’ve implemented CRUD operations in various projects, demonstrating a strong grasp of building and managing server-side applications.</p>
                    </span>
                </div>
                
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About;
