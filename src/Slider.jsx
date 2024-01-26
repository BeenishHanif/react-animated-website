import React from "react";
 import image from "./images/banner-img.png"
 import { CiPlay1 } from "react-icons/ci";
 import {motion} from "framer-motion"

const Slider = () => {
  return (
    <div className="flex gap-20 px-20 lg:px-28 py-24 md:py-20 justify-between bg-gradient-to-r from-[#a059d6] via-[#8f81f4] to-[#5b73c8]">
      <motion.div initial={{translateX:-500}} whileInView={{translateX:0}} transition={{duration:0.6,type:'tween'}} className="w-[60%] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-body font-extrabold gap-2 md:gap-5 lg:gap-8 flex flex-col justify-center">
        <h1>
          Great Marketing
        </h1>
          <h2>Make The Customer Feel</h2>
          <h3 className="text-purple-950">Smart</h3>
          <div  className="rounded-full flex justify-center items-center hover:scale-75 hover:transition-transform hover:duration-150 hover:ease-in-out bg-purple-950 w-12 h-12 md:w-16 md:h-16 cursor-pointer">
            <CiPlay1 color="white" className="h-4 md:h-8 md:w-8 font-bold"/>
          </div>

      </motion.div>
      <motion.div initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{duration:0.9, type:'tween'}} className="w-[40%] mt-10">
        
          <img src={image}  className="w-full h-full"/>

      </motion.div>
      </div>
  );
};

export default Slider;
