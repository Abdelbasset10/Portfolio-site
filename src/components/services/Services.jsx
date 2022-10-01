import React from 'react'
import { useSelector } from 'react-redux'
import Share from './Share'
import { frontSkills, backSkills, frameWorksSkills} from '../../data'

import heart from '../../images/heartemoji.png'
import glasse from '../../images/glasses.png'
import humble from '../../images/humble.png'

const Services = () => {
  const dark = useSelector((state)=>state.darkMode)
  return (
    <div className='py-32 w-11/12 m-auto md:flex justify-between md:mb-48' id='services' >
      {/* Left Side */}
      <div className='flex-1 mb-8 md:mb-0 '  >
        <h1 className={dark ? '  lg:mt-32 h1Me text-white': 'lg:mt-32 h1Me text-black'} >My Awsome <br /><span className='text-orange font-bold' >Services</span></h1>
        <p className={dark ? 'text-white my-4':'text-gray my-4'} > I am Full stack devoloper with fully responsive mobile. I can work in fornt-end part or backend-part or both. <br />My skills are in right Side !</p>
      </div>

      {/* Right Side */}
      <div className='relative flex-1 flex flex-col items-center justify-center gap-8  '>
        <div className='shadow-md cursor-pointer hover:-translate-y-3.5  shadow-gray md:absolute sm:top-0 sm:right-0 border-4 w-52 py-4 px-4 border-orange rounded-2xl'>
            <Share photo={heart} field='Front-end' skils={frontSkills} />
        </div>
        <div className=' shadow-md cursor-pointer hover:-translate-y-3.5 shadow-gray md:absolute top-40 md:-left-32 lg:left-0 xl:left-16  border-4 w-52 py-4 px-4 border-orange rounded-2xl'>
            <Share photo={glasse} field='Frameworks' skils={frameWorksSkills}  />
        </div>
        <div className=' shadow-md cursor-pointer hover:-translate-y-3.5 shadow-gray md:absolute  md:top-80 sm:right-10 border-4 w-52 py-4 px-4 border-orange rounded-2xl'>
            <Share photo={humble} field='Back-end' skils={backSkills} />
        </div>
      </div>
    </div>
  )
}

export default Services