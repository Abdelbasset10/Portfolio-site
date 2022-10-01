import React from 'react'
import { useSelector } from 'react-redux'
import Share from './Share'
import {SiUpwork} from 'react-icons/si'


import boy from '../../images/boy.png'
import vector1 from '../../images/Vector1.png'
import vector2 from '../../images/Vector2.png'
import github from '../../images/github.png'
import linkedIn from '../../images/linkedin.png'
import instagram from '../../images/instagram.png'
import glasses1 from '../../images/glassesimoji.png'
import crown from '../../images/crown.png'

const Hero = () => {
    const dark = useSelector((state)=>state.darkMode)
  return (
    <div className=' w-11/12 m-auto pt-10  md:flex justify-between items-start' id='hero' >
        {/* Left Side */}
        <div className='pt-10 flex-1 mb-32' >
            <h1 className={dark ? 'h1Me text-white':'h1Me text-black'} >Hey! Iam <br /> <span className='text-orange font-bold' >Rezazi Mohamed Abdelbasset</span></h1>
            <p className={dark ? 'text-white my-4':'text-gray my-4'} >Full stack Devoloper using MERN Stack techonolgies with fully responsive mobile working on many projects in front-end and back-end and both </p>
            <button className={dark ? 'button bg-gray hover:bg-orange':'hover:bg-black button bg-orange'}>Hire me</button>
            <div className=' mt-6 lg:mt-16 flex items-center gap-8 self-end' >
                <a href="https://github.com/Abdelbasset10">
                    <img src={github} alt="github" className='w-10 cursor-pointer animate-bounce	' />
                </a>
                <a href="https://www.linkedin.com/in/mohamed-abdelbasset-rezazi-2199a824b/">
                    <img src={linkedIn} alt="linkedIn" className='w-10 cursor-pointer animate-bounce	' />
                </a>
                <a href="https://www.upwork.com/freelancers/~01fbb84cdb4311df92">
                    <SiUpwork className='animate-bounce text-orange w-12 text-5xl sm:text-7xl cursor-pointer' />
                </a>

            </div>


        </div>

        {/* Right Side */}
        <div className='flex-1 relative mb-10 md:mb-0'  >
             <img src={vector2} alt="yellowVictor" className='  scale-100 sm:scale-75  top-4 sm:-top-10 md:scale-100 lg:scale-75 xl:scale-75 absolute md:-right-4 md:top-16  lg:top-0  xl:-top-8 lg:right-0  xl:right-0  '/> 
            <div className='flex  mt-20 md:mt-0 justify-center '>
                <img src={boy} alt="heroImage" className=' scale-110 sm:scale-125  md:top-0 self-center	 z-1  lg:right-28 md:scale-110  xl:scale-125' />
            </div>
            
             <img src={glasses1} alt="coolImage" className='absolute -top-32 -left-24 sm:left-0 lg:-left-28 xl:-left-20 md:-top-24 md:-left-20 lg:-left-12 xl:-top-16 scale-50 xl:scale-75' />
            <div className='absolute -top-16 right-0 sm:right-0 md:top-0 lg:-top-8 xl:top-0 md:-right-8 lg:right-0 shadow-lg  rounded-xl	bg-white animate-waving-hand		 	'>
                <Share photo={crown} skill='Web Devoloper'  />
            </div>
            <div className='absolute -bottom-4 left-28 md:left-8 md:bottom-0 lg:bottom-2 lg:left-20 xl:-bottom-3 xl:left-32 shadow-lg  rounded-xl	bg-white 	'>
                <Share photo={crown} skill='Web Devoloper'  />
            </div>
             
           
            
        </div>
        

    </div>
  )
}

export default Hero