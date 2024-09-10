import React, { useState } from 'react'
import { RiCloseLine, RiMenu2Line } from '@remixicon/react'

const Navbar = () => {

    const [menu, openMenu] = useState(false);
    const [showmenu, setShowMenu] = useState(true);

  return (
    
    <nav className='flex flex-wrap justify-between md:items-center text-white px-10 py-3 md:px-20 sticky top-0 bg-[#171d32] z-10 shadow-lg shadow-[#2b2c44]'>
      <span className='text-2xl lg:text-4xl font-bold tracking-wide'>My Portfolio</span>
      <ul className= {` ${menu ? "block" : "hidden"}     mx-24 py-2 mt-4 font-semibold md:my-3 bg-black px-10 md:px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
        <a href="#about"><li className='text-md underline transition-all duration-300 p-1 md:p-0'><button className='underline' onClick={ ()=>{openMenu(!menu); setShowMenu(!showmenu);} } >About</button></li></a>
        <a href="#skills"><li className='text-md underline transition-all duration-300 p-1 md:p-0'><button className='underline' onClick={ ()=>{openMenu(!menu); setShowMenu(!showmenu);} } >Skills</button></li></a>
        <a href="#projects"><li className='text-md underline transition-all duration-300 p-1 md:p-0'><button className='underline' onClick={ ()=>{openMenu(!menu); setShowMenu(!showmenu);} } >Projects</button></li></a>
        <a href="#contact"><li className='text-md underline transition-all duration-300 p-1 md:p-0'><button className='underline' onClick={ ()=>{openMenu(!menu); setShowMenu(!showmenu);} } >Contact</button></li></a>
      </ul>
      {
        showmenu ? (
            <RiMenu2Line size={30} className='md:hidden absolute right-10 top-2 transition-all duration-300' onClick={ ()=>{openMenu(!menu); setShowMenu(!showmenu);} } />
        ):
        (
            <RiCloseLine size={30} className='md:hidden absolute right-10 top-2 transition-all duration-300' onClick={ ()=>{openMenu(!menu); setShowMenu(!showmenu);} } />
        )
      }
    </nav>

  )
}

export default Navbar;