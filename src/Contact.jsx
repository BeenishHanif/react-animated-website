 import React from 'react'
import { PiPaperPlaneTiltBold } from "react-icons/pi";
 import { GrCloudComputer } from "react-icons/gr";
 import { CgWebsite } from "react-icons/cg";
 import { TbBrandPython } from "react-icons/tb";
 import {motion} from "framer-motion";



const Contact = () => {
  return (
    <div className='flex flex-col gap-14 lg:gap-0 lg:flex-row items-center lg:pl-28 lg:pr-16 xl:pr-16  xl:pl-32 mt-28 '>
        <motion.div initial={{translateX:-500}} whileInView={{translateX:0}} transition={{duration:0.6,type:'tween'}} className='grid justify-center px-4 pr-4 xl:px-24 items-center gap-x-5 gap-y-7  lg:w-[70%] grid-rows-4 md:grid-cols-2 md:grid-rows-2  '>
            <div className='rounded-lg h-60 w-64 text-black shadow-xl shadow-slate-700  flex justify-center items-center gap-8  flex-col'>
            <PiPaperPlaneTiltBold className='text-6xl font-semibold' />
            <h1 className='text-xl text-center'>Branding and Digital Strategies</h1>
            </div>
            <div className='rounded-lg h-60 w-64 text-black shadow-xl shadow-slate-700  flex justify-center items-center gap-8  flex-col'>
            <GrCloudComputer className='text-6xl' />
            <h1 className='text-xl text-center'>Web and Mobile Design</h1>
            </div>
            <div className='rounded-lg h-60 w-64 text-black shadow-xl shadow-slate-700  flex justify-center items-center gap-8  flex-col'>
            <CgWebsite className='text-6xl' />
            <h1 className='text-xl text-center'>Result Driven Digital Marketing</h1>
            </div>
            <div className='rounded-lg h-60 w-64 text-black shadow-xl shadow-slate-700  flex justify-center items-center gap-8  flex-col'>
            <TbBrandPython className='text-6xl' />
            <h1 className='text-xl text-center'>Software Development</h1>
            </div>
        </motion.div>
        <motion.div initial={{translateX:50}} whileInView={{translateX:0}} transition={{duration:0.6,type:'tween'}}   className='flex flex-col lg:w-[30%] w-full order-first pt-20 lg:pt-0 lg:order-last font-body justify-center items-center lg:items-start lg:justify-start lg:pl-3 '>
        <div className="text-xl font-extrabold md:text-3xl lg:text-4xl xl:text-5xl flex-row lg:gap-8 flex lg:flex-col ">
        <span>
          Let's Level Up 
        </span>
          <span className='pl-2 lg:pl-0'> Business with </span>
          <span className="text-purple-500 font-black pl-2 lg:pl-0">   Digital Media</span>
      </div>
          <p className='text-md pt-5 flex justify-center items-center px-5 md:px-0'>Integrating Brand Strategy with Digital Initiatives to improve Customer Experience Online and Offline </p>
          <button className='text-white  mt-5 font-body text-md md:text-lg font-bold w-36 h-10 rounded-3xl bg-gradient-to-br from-[#a059d6] via-[#8f81f4] to-[#5b73c8] hover:bg-gradient-to-br hover:from-[#5b73c8] hover:via-[#8f81f4] hover:to-[#a059d6]'>Learn More</button>
          </motion.div>
        </div>
  )
}

export default Contact;