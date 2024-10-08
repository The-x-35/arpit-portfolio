"use client";
import { motion } from 'framer-motion';
import React from 'react';
import ComputersCanvas from './ComputerCanvas';

const First: React.FC = () => {
  return (
    <section id="first" className={`w-full h-screen mx-auto overflow-hidden`}>
      <div className='flex flex-col justify-center items-center'>
        <div
          className="absolute inset-0 lg:top-[120px] lg:left-10 max-w-7xl mx-auto px-6 flex flex-row items-start gap-5 sm:left-0 top-[50px] "
        >
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <div className='flex flex-col'>
            <h1 className="font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white">
              Hi, I'm <span className='text-[#915EFF]'>Arpit</span>
            </h1>
            <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[20px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">
              I am a Cyber Security Enthusiast, <br className='sm:block hidden' />
              Web and Software Developer.
            </p>
          </div>
        </div>
        <div className='relative h-screen w-screen lg:-mt-20 lg:left-36 -left-3'>
          <ComputersCanvas />
        </div>
        <div className='absolute xs:bottom-10 bottom-5 right-1 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-white mb-1'
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default First;
