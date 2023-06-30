import React from 'react'
import videoBackground from '../assets/Background.mp4'
import { TypeAnimation } from 'react-type-animation';
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion"

const Masthead = () => {
  return (
    <div className='min-h-screen m-0 p-0 w-full flex flex-col items-center'>
        <video autoPlay loop muted playsInline className='absolute w-full h-full object-cover' src={videoBackground}/>
        <div className='p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex flex-col items-center justify-center'>
            <div></div>
            <motion.h1 
              className='mb-2 text-4xl xl:text-5xl opacity-100 transition-all'
              initial={{ opacity: 0}} 
              animate={{ opacity: 1}}
              transition={{duration: 2, delay: 0.2}}
              
            >
              WhileDev
            </motion.h1>
            <h2 className='mb-2 text-2xl xl:text-3xl tracking-tight'>
              <motion.div
              initial={{ opacity: 0}} 
              animate={{ opacity: 1}}
              transition={{duration: 2, delay: 0.2}}>
                <span className='pr-2'>I'm</span>
                  <span>
                    <TypeAnimation sequence={[
                      'Full-Stack Developer.',
                      3000,
                      'UI/UX Designer.',
                      3000,
                      'Middle School Student.',
                      3000
                    ]}
                    cursor={true}
                    repeat={Infinity}
                    />
                </span>
              </motion.div>
                
            </h2>
        </div>
        <IoIosArrowDown size={65} className='absolute z-50 bottom-0 text-white'/>
    </div>
  )
}

export default Masthead