import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { IoMdClose} from "react-icons/io";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [openMenu,setOpenMenu]=useState(false);
   
    const toggleOpenMenu=()=>{
        setOpenMenu(!openMenu);
    }
  return (
    <div className={`flex bg-gradient-to-r w-full from-[#a059d6] via-[#8f81f4] to-[#5b73c8] justify-between py-7 px-20 lg:px-28  fixed z-10`}>
        <h1 className='font-mono font-bold text-2xl  font-body text-purple-950'>Impact</h1>
        <ul className={`flex cursor-pointer text-white text-lg  gap-8 font-semibold  md:flex md:flex-row md:mt-0  ${openMenu ?'flex-col mt-16 gap-9 -ml-48 text-white':'hidden'}`}>
         <a href='#home'>   <li>Home</li></a>     
          <a href='#services'> <li>Services</li></a>
         <a href='#aboutus'><li>About us</li></a>
         <a href='#contact'><li>Contact </li></a>
         <Link to="/signup"><li>Signup</li></Link>

        </ul>
        {!openMenu ?  <MdMenu color='white' onClick={toggleOpenMenu} size={22} className='cursor-pointer flex md:hidden' />:
        <IoMdClose color='white' size={22} onClick={toggleOpenMenu} className='cursor-pointer flex md:hidden' />}
    </div>
  )
}

export default Navbar