import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div id='contact' className='bg-[#0000005d] mt-10 flex max-lg:flex-col items-center gap-10 justify-between md:px-16 md:py-16 text-slate-200'>
      <div className='mx-auto'>
        <h1 className='font-bold text-6xl max-lg:text-4xl w-fit mx-auto'>Contact</h1>
        <h4 className='font-semibold text-2xl w-fit mx-auto'>Feel Free to reach out!</h4>
      </div>
      <div className='flex flex-col gap-y-3 justify-center items-center md:items-start'>
        <div className='flex gap-2 items-center'>
            <FiMail size={30} />
            <a href="mailto:anubhav.22211@knit.ac.in" className='underline underline-offset-2' target='_blank'>anubhav.22211@knit.ac.in</a>
        </div>
        <div className='flex gap-2 items-center'>
            <FaGithub size={30} className='bg-white text-black rounded-full'/>
            <a href="https://github.com/anubhav-0004" className='underline underline-offset-2' target='_blank'>https://github.com/anubhav</a>
        </div>
        <div className='flex gap-2 items-center text-lg max-lg:pb-6'>
            <FaLinkedin size={30} className='text-blue-700 bg-white p-[0.3%]' />
            <a href="https://www.linkedin.com/in/anubhav-04-mishra" className='underline underline-offset-2' target='_blank'>https://www.linkedin.com/in/anubhav</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;