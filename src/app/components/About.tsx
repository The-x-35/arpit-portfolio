import React from 'react';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from './motionUtils';

const About: React.FC = () => {
  return (
    <section id="about" className="h-screen p-8">
      <motion.div variants={textVariant(1.25)}>
        <p className= "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn({ direction: "right", type: "spring", delay: 0.1, duration: 1 })}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       I am a Computer Science and Engineering undergraduate at IIIT Una with a passionate interest in cybersecurity and web development. My journey has led me to explore various facets of technology, particularly focusing on TypeScript and modern web development practices.
       Currently, I am actively contributing to open-source projects, where I apply my knowledge and collaborate with the community to build impactful solutions. Feel free to explore my work and get in touch if you are interested in discussing potential collaborations or have any questions!
      </motion.p>
    </section>
  );
};

export default About;
