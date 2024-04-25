import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import whilelogo from '../assets/WhileForWeb.png'

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  return (
    <div className='py-10 px-10 max-w-4xl font-semibold mx-auto items-center md:items-start flex md:flex-row flex-col'>
        <div data-aos="fade-right" className='md:w-[50%] w-[350px]'>
          <img src={whilelogo} alt="WhileLogo" className='p-6 rounded-[50px]'/>
        </div>
        <div data-aos="fade-left" className='md:w-[50%] w-[350px]'>
          <h4 className='text-center md:text-start font-bold md:pl-4 pt-5 text-[#147efb]'>ABOUT ME</h4>
          <h3 className='md:text-start text-center md:pl-4 font-bold text-2xl'>Hi! I'm A dedicated Web Developer based in Thailand!📍</h3>
          <p className='md:pl-4 pt-3 text-center md:text-start text-[#767676]'>I'm a web developer based in the Thailand area. I'm 14 years old, and I'm passionate about full-stack application development because of the diversity of technology I get to learn and code. I've been coding since I was in fourth grade. I start coding in Python and take a break after learning for two months. 2021: I'm back with a full passion for coding and have tried a coding bootcamp. Then I started to be a self-taught programmer and learned full-stack development with the MERN stack.</p>
        </div>
    </div>
  )
}

export default About
