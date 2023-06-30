import React from 'react'
import { FaFacebook, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa"

const Contract = () => {


  return (
    <div className='py-10 px-10 bg-[#f9f9f9] rounded-lg max-w-4xl font-semibold mx-auto items-center md:items-start flex flex-col'>
        <div data-aos="fade-down">
          <h4 className='text-center md:text-start font-bold md:pl-4 text-[#147efb]'>CONTACT ME</h4>
          <h3 className='md:text-start text-center md:pl-4 font-bold text-2xl'>Feel free to hit me up!👇</h3>
        </div>
        <div className='flex gap-5'>
          <a href="https://www.facebook.com/mungkornzaza.sologaming/">
            <div data-aos="zoom-in" className='pt-3 md:pl-4'>
                <FaFacebook size={50}/>
            </div>
          </a>

          <a href="https://www.instagram.com/_mungk0rn_/">
            <div data-aos="zoom-in" data-aos-delay="100" className='pt-3 md:pl-4'>
                <FaInstagram size={50}/>
            </div>
          </a>

          <a href="https://github.com/CinnamonRolly">
            <div data-aos="zoom-in" data-aos-delay="200" className='pt-3 md:pl-4'>
                <FaGithub size={50}/>
            </div>
          </a>

          <a href="https://www.youtube.com/channel/UCWy7pKl-5CBX3OT6vLBbIbA">
            <div data-aos="zoom-in" data-aos-delay="200" className='pt-3 md:pl-4'>
                <FaYoutube size={50}/>
            </div>
          </a>


        </div>
    </div>
  )
}

export default Contract