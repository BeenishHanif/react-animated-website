import React from 'react'

const Footer = () => {
  return (
    <div className=' mt-28 bg-gradient-to-r from-[#a059d6] via-[#8f81f4] to-[#5b73c8]  rounded-t-[100px] w-full'>
<div className=' grid grid-cols-1 gap-10 md:gap-0 pt-8 pb-14   px-32 md:p-12 md:grid-cols-2 lg:grid-cols-4 justify-between items-center font-body'>
<div className='flex flex-col cursor-pointer'>
    <h1 className='text-white font-semibold text-xl'>Services</h1>
    <ul className='mt-6 text-green-50 text-sm'>
        <li>Branding</li>
        <li>Digital Strategy</li>
        <li>Web & App Development</li>
        <li>Social Media Marketing</li>
        <li>Software Development</li>
    </ul>
</div>
<div className='flex flex-col cursor-pointer'>
    <h1 className='text-white font-semibold text-xl  '>Quick Links</h1>
    <ul className='mt-6 text-green-50 text-sm'>
        <li>Branding</li>
        <li>Digital Strategy</li>
        <li>Web & App Development</li>
        <li>Social Media Marketing</li>
        <li>Software Development</li>
    </ul>
</div>
<div className='flex flex-col cursor-pointer'>
    <h1 className='text-white font-semibold text-xl md:mt-5 lg:mt-0'>Solutions</h1>
    <ul className='mt-6 text-green-50 text-sm'>
        <li>Branding</li>
        <li>Digital Strategy</li>
        <li>Web & App Development</li>
        <li>Social Media Marketing</li>
        <li>Software Development</li>
    </ul>
</div>
<div className='flex flex-col cursor-pointer'>
    <h1 className=' text-xl text-purple-950 font-black md:mt-5 lg:mt-0'>Impact</h1>
    <p className='mt-6 text-green-50 text-sm '>
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus optio nobis voluptatibus quasi, distinctio. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.
    </p>
</div>
</div>
<span className='px-12'> &copy; 2024 impacto</span>
    </div>
  )
}

export default Footer