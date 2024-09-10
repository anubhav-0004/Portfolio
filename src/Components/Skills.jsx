import React from 'react';
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiRedux } from 'react-icons/si';
import { DiNodejs } from "react-icons/di";

const Skills = () => {
  return (
    <div id='skills' className='text-white md:flex md:flex-col overflow-hidden items-center md:flex-wrap md:bg-[#0000005d] shadow-xl mx-0 md:mx-10 bg-opacity-30 rounded-lg md:p-12 p-6 md:justify-center'>
      <div className='mx-auto w-fit my-5'>
        <h1 className='text-3xl md:text-5xl font-bold tracking-wider mx-auto'>Skills</h1>
        <div className='w-[95%] h-1 bg-green-400 rounded-full'></div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 md:mt-10 md:w-[85%] w-[99%]'>
        <div className='border-2 p-1 md:px-5 md:py-5 bg-[#3e3d3d5d] rounded-lg duration-500 hover:scale-105'>
            <FaHtml5 size={80} className='bg-[#f3971f] m-5 rounded-2xl p-1 mx-auto'/>
            <p>Proficient in HTML with hands-on experience through projects. Developed and styled web pages, focusing on clean, responsive design and best practices. Strong understanding of HTML5 elements, structure, and accessibility standards.</p>
        </div>
        <div className='border-2 p-1 md:px-5 md:py-5 bg-[#3e3d3d5d] rounded-lg hover:scale-105 duration-500'>
            <FaCss3 size={80} className='text-white bg-blue-500 m-5 p-1 rounded-2xl mx-auto'/>
            <p>Skilled in CSS with practical project experience. Crafted responsive, visually appealing web pages using advanced styling techniques, including Flexbox and Grid. Familiar with CSS3 features, animations, and cross-browser compatibility.</p>
        </div>
        <div className='border-2 p-1 md:px-5 md:py-5 bg-[#3e3d3d5d] rounded-lg hover:scale-105 duration-500'>
            <FaJs size={80} className='text-black bg-yellow-300 m-5 rounded-2xl p-1 mx-auto'/>
            <p>Learnt JavaScript with hands-on project experience. Implemented dynamic functionality, DOM manipulation, and event handling. Having understanding of ES6+ features, including promises and arrow functions, to create interactive and efficient web applications.</p>
        </div>
        <div className='border-2 p-1 md:px-5 md:py-5 bg-[#3e3d3d5d] rounded-lg hover:scale-105 duration-500'>
            <FaReact size={80} className='bg-black text-sky-400 m-5 rounded-2xl p-1 mx-auto'/>
            <p>Experienced in React with project-based learning. Built interactive user interfaces using components, state management, and React Hooks. Proficient in optimizing performance and implementing reusable code for scalable applications.</p>
        </div>
        <div className='border-2 p-1 md:px-5 md:py-5 bg-[#3e3d3d5d] rounded-lg hover:scale-105 duration-500'>
            <DiNodejs size={80} className='text-white bg-black m-5 rounded-2xl p-1 mx-auto'/>
            <p>Skilled in Node.js and Express with project-based learning. Developed server-side applications, managing APIs and databases. Proficient in asynchronous programming, creating RESTful services, and building scalable backend systems.</p>
        </div>
        <div className='border-2 p-1 md:px-5 md:py-5 bg-[#3e3d3d5d] rounded-lg hover:scale-105 duration-500'>
            <SiMongodb size={80} className='bg-white text-green-500 m-5 rounded-2xl p-1 mx-auto'/>
            <p>Familiar with MongoDB and Mongoose through project experience. Worked on data modeling, schema design, and efficient querying. Implemented CRUD operations and managed data relationships, focusing on performance and scalability in database management.</p>
        </div>
        <div className='border-2 p-1 md:px-5 md:py-5 bg-[#3e3d3d5d] rounded-lg hover:scale-105 duration-500'>
            <SiTailwindcss size={80} className='bg-white text-sky-400 m-5 rounded-2xl p-1 mx-auto'/>
            <p>Experienced with Tailwind CSS through project work. Utilized utility-first classes to build responsive, custom designs quickly. Streamlined development by integrating Tailwind with existing workflows, focusing on simplicity and consistency in UI styling.</p>
        </div>
        <div className='border-2 p-1 md:px-5 md:py-5 bg-[#3e3d3d5d] rounded-lg hover:scale-105 duration-500'>
            <SiRedux size={80} className='bg-white text-violet-600 m-5 rounded-2xl p-1 mx-auto'/>
            <p>Experienced with Tailwind CSS through project work. Utilized utility-first classes to build responsive, custom designs quickly. Streamlined development by integrating Tailwind with existing workflows, focusing on simplicity and consistency in UI styling.</p>
        </div>
      </div>

    </div>
  )
}

export default Skills;