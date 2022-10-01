import React from 'react'
import UpWork from '../../images/Upwork.png'
import linkedIn from '../../images/linkedin.png'
import { useSelector } from 'react-redux'

const Experiences = () => {
  const dark = useSelector((state)=>state.darkMode)
  return (
    <div className='pt-20 ' id='works'>
       <h1 className={dark ? 'text-center font-bold text-5xl mb-8 text-white':'text-center font-bold text-5xl mb-8 text-black'} >Brands & Clients</h1>
       <div className=' flex items-center justify-center flex-wrap gap-16 w-11/12 m-auto '  >
        <div className={dark ? '   shadow-md shadow-white border-gray workCircle':'shadow-md shadow-orange border-orange workCircle'}>
          <a href="https://www.upwork.com/freelancers/~01fbb84cdb4311df92">
            <img src={UpWork} alt="UpWork" className='animate-spin-slow'/>
          </a>
        </div>
        <div className={dark ? 'shadow-md shadow-white border-gray workCircle ':'shadow-md shadow-orange border-orange workCircle'} >
          <a href="https://www.linkedin.com/in/mohamed-abdelbasset-rezazi-2199a824b/">
            <img src={linkedIn} alt="linkedIn" className='animate-spin-slow'  />
          </a>
        </div>
       </div>
    </div>
  )
}

export default Experiences