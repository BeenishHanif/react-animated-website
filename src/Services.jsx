import React from 'react'
import image from "./images/manworking.avif"
import {motion} from "framer-motion"

const Services = () => {
  return (
    <div id='services' className='flex flex-col gap-14 lg:gap-0 lg:flex-row items-center lg:pl-28 lg:pr-16 xl:pr-16  xl:pl-32 mt-28 '>
        <motion.div initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:0.9, type:'tween'}} className='flex justify-center px-4 pr-4 xl:px-24 items-center  lg:w-[70%]  '>
           <img src={image}/>
        </motion.div>
        <motion.div initial={{translateX:40}} whileInView={{translateX:0}} transition={{duration:0.6,type:'tween'}}  className='flex flex-col lg:w-[30%] w-full order-first pt-20 lg:pt-0 lg:order-last font-body justify-center items-center lg:items-start lg:justify-start lg:pl-3 '>
        <div className="text-xl font-extrabold md:text-3xl lg:text-4xl xl:text-5xl flex-row lg:gap-8 flex lg:flex-col ">
        <span>
          Let's Level Up 
        </span>
          <span className='pl-2 lg:pl-0'> Business with </span>
          <span className="text-purple-500 font-black pl-2 lg:pl-0">   Digital Media</span>
      </div>
          <p className='text-md pt-5 flex justify-center items-center px-5 md:px-0'>Integrating Brand Strategy with Digital Initiatives to improve Customer Experience Online and Offline </p>
          <button className='text-white mt-5 font-body text-md md:text-lg font-bold w-36 h-10 rounded-3xl bg-gradient-to-br from-[#a059d6] via-[#8f81f4] to-[#5b73c8] hover:bg-gradient-to-br hover:from-[#5b73c8] hover:via-[#8f81f4] hover:to-[#a059d6]'>Learn More</button>
          </motion.div>
        </div>
  )
}

export default Services