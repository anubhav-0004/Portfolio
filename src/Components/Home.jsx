import React from 'react';
import Image from '../Assets/ANUBHAV.jpeg';
import Text from './Text';

const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20 flex-col-reverse md:flex-row'>
      <div className='md:w-1/2 md:pt-10 mx-auto'>
        <h1 className='text-3xl text-[#f3f3a7] md:text-6xl font-bold flex leading-normal tracking-tighter py-4'><Text/> |</h1>
        <p className='text-sm md:text-xl tracking-tight opacity-80'>I'm an undergraduate Computer Science & Engineering student at Kamla Nehru Institute of Technology, Sultanpur. I have skills in C, C++, HTML, CSS, Tailwind, ReactJS, JavaScript, ReduxJS, Node.js, Express.js, and MongoDB. I’ve worked on projects to enhance my frontend development skills and am currently seeking internships or remote work opportunities, specializing in ReactJS. </p>
        <a href="#contact"><button className='mt-5 md:mt-10 max-lg:w-80 text-[#0d1741] text-xl py-2 px-3 md:px-4 hover:opacity-85 duration-300 font-semibold hover:scale-105 brightness-150 rounded-3xl bg-[#e1f6b8]'>Contact Me</button></a>
      </div>
      <div className='md:w-4/12 h-auto mx-auto my-auto scale-90 bg-red-200 rounded-[50%] w-7/12'>
        <img src={Image} alt="" className='rounded-[50%] md:p-2 p-0.5 grayscale-[20%]'/>
      </div>
    </div>
  )
}

export default Home;
