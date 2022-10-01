import React from 'react'
import { useSelector } from 'react-redux'

const Contact = () => {
    const dark = useSelector((state)=>state.darkMode)
  return (
    <div className=' w-11/12 sm:w-8/12 m-auto pt-10 md:flex md:justify-between' id='contact'>
        {/* Left Side */}
        <div className='flex-1' >
            <h1 className={dark ? 'h1Me text-white text-center md:text-left mb-4':' mb-4 text-center md:text-left h1Me text-black'} >Get in Touch <br /> <span className='text-orange'>Contact me</span></h1>
        </div>

        {/* Right Side */}
        <form className='flex  flex-col gap-4 justify-start items-start flex-1' >
            <input type="text" placeholder='Name' className='border-2 border-orange h-10 p-4 outline-none w-full rounded-lg' />
            <input type="text" placeholder='Email' className='border-2 border-orange h-10 p-4 outline-none w-full rounded-lg' />
            <textarea cols="30" rows="3" placeholder='Message' className='border-2 border-orange p-4 outline-none w-full rounded-lg'></textarea>
            <button className={dark ? 'button w-full sm:w-8/12 bg-gray self-center hover:bg-orange ':'hover:bg-black w-8/12 sm:w-fit text-center self-center button bg-orange'}>Send</button>
        </form>
    </div>
  )
}

export default Contact