import React from 'react'
import wave from '../../images/wave.png'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {SiUpwork} from 'react-icons/si'

const Footer = () => {
  return (
    <div className='relative'>
        <img src={wave} alt="wave" className='w-full h-96'  />
        <div className='absolute top-40 gap-8 flex justify-center flex-col items-center w-full'>
            <p className='text-white text-xl sm:text-3xl' >basset.rezazi26@gmail.com</p>
            <div className='flex flex-wrap justify-center itens-center gap-4' >
                <a href="https://github.com/Abdelbasset10">
                  <FaGithub  className='hover:-translate-y-3.5 text-white text-5xl sm:text-7xl cursor-pointer'/>
                </a>
                <a href="https://www.linkedin.com/in/mohamed-abdelbasset-rezazi-2199a824b/">
                  <FaLinkedin className='hover:-translate-y-3.5 text-white text-5xl sm:text-7xl cursor-pointer' />
                </a>
                <a href="https://www.upwork.com/freelancers/~01fbb84cdb4311df92">
                  <SiUpwork className='hover:-translate-y-3.5 text-white text-5xl sm:text-7xl cursor-pointer' />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer