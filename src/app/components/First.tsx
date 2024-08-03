import { motion } from 'framer-motion';
import React from 'react';
import ComputersCanvas from './ComputerCanvas';

const First: React.FC = () => {
  return (
    <section className={`w-full h-screen mx-auto`}>
      <div className='flex flex-col justify-center items-center'>
        <div
          className="absolute inset-0 top-[120px] left-10 max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-start gap-5"
        >
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <div className='flex flex-col'>
            <h1 className="font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white">
              Hi, I'm <span className='text-[#915EFF]'>Arpit</span>
            </h1>
            <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">
              I am a Cyber Security Enthusiast, <br className='sm:block hidden' />
              Web and Software Developer.
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center ml-20 mx-auto h-full w-full'>
          <div className='relative lg:-mr-10 -mb-96 h-full w-full'>
            
          </div>
        </div>
        <div className='h-screen w-screen -mt-20 ml-60'>
        <ComputersCanvas /></div>
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
