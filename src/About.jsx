import React from 'react'
import { SiSony } from "react-icons/si";
import { SiIbm } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { FaMixer } from "react-icons/fa6";
import { FaMicrosoft } from "react-icons/fa";
import { CiBitcoin } from "react-icons/ci";
import {motion} from "framer-motion"

const About = () => {
  return (
    <div className='flex mt-28 flex-col gap-14  xl:flex-row items-center xl:pl-20'>
         <motion.div initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:0.6}} className='flex flex-col xl:w-[30%] w-full order-first pt-20 lg:pt-0 px-5  font-body justify-center items-center xl:items-start lg:justify-start  '>
        <div  className="text-xl font-extrabold md:text-3xl xl:text-4xl flex-row  xl:gap-5 flex xl:flex-col ">
        <span>
        Create Superior 
        </span>
          
          <span className="text-purple-500 font-black pl-2 xl:pl-0">   Digital Experience</span>
      </div>
          <p className='text-md flex justify-center items-center px-5 md:px-0 xl:pr-8'>From Startup to fortune 500 We Partner with brands of all sizes. The more challenging the prospect te more excited we are! </p>
          <button className='text-white mt-5 font-body text-md md:text-lg font-bold w-36 h-10 rounded-3xl bg-gradient-to-br from-[#a059d6] via-[#8f81f4] to-[#5b73c8] hover:bg-gradient-to-br hover:from-[#5b73c8] hover:via-[#8f81f4] hover:to-[#a059d6]'>Get a Quote</button>
          </motion.div>
    <motion.div initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:0.9, type:'tween'}} className='grid lg:grid-cols-3 xl:pl-12 sm:grid-rows-3 sm:grid-cols-2 lg:grid-rows-2 gap-x-7 gap-y-5 lg:[w-70%]'>
 
            <div className='rounded-lg h-44 w-52 text-black shadow-xl shadow-slate-700  flex justify-center items-center flex-col'>
            <SiSony className='text-6xl ' color='green' />
            </div>
            <div className='rounded-lg h-44 w-52 text-black shadow-xl shadow-slate-700  flex justify-center items-center flex-col'>
            <SiIbm className='text-6xl ' color='green'  />
            </div>
            <div className='rounded-lg h-44 w-52 text-black shadow-xl shadow-slate-700  flex justify-center items-center flex-col'>
            <FcGoogle className='text-6xl ' />
            </div>
            <div className='rounded-lg h-44 w-52 text-black shadow-xl shadow-slate-700  flex justify-center items-center flex-col'>
            <FaMixer className='text-6xl ' />
            </div>
            <div className='rounded-lg h-44 w-52 text-black shadow-xl shadow-slate-700  flex justify-center items-center flex-col'>
            <FaMicrosoft className='text-6xl ' />
            </div>
            <div className='rounded-lg h-44 w-52 text-black shadow-xl shadow-slate-700  flex justify-center items-center flex-col'>
            <CiBitcoin className='text-6xl ' />
            </div>

        
    </motion.div>
    </div>

  )
}

export default About