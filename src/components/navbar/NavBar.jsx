import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {navLinks} from '../../data'
import {FaBars, FaMoon, FaSun} from 'react-icons/fa'
const NavBar = () => {
    const dispatch = useDispatch()
    const dark = useSelector((state)=>state.darkMode)
    const [mobileLinks,setMobileLinks]= useState(false)
  return (
    <nav className='nav-bar'>
        <div className='flex1 gap-2' >
            <h1 className={dark ? 'navbarLogo text-white':'navbarLogo text-black'} >Abdelbasset</h1>
            <div className='flex1 gap-1 themeDiv' >
                <FaMoon 
                    className={dark ? 'cursor-pointer bg-orange':'cursor-pointer'} 
                    onClick={()=>dispatch({type:'DARK'})} />
                <FaSun 
                    className={dark ? 'cursor-pointer':'cursor-pointer bg-orange'}
                    onClick={()=>dispatch({type:'LIGHT'})} />
            </div>
        </div>

        <div className='navLinks-pc' >
            {navLinks.map((link,index)=>{
                return (
                    <li key={index} className='list-none' >
                        <a href={link.href} className={dark ? 'text-white':'text-black'}>
                            {link.text}
                        </a>
                    </li>
                )
            })}
        </div>
        <div className='contact-pc' >
            <button className={dark ? 'button bg-gray hover:bg-orange':'button bg-orange hover:bg-black'}>Contact</button>
        </div>
        {/* Mobile navbar */}
        <div className='mobile-links relative' >
            <FaBars
                className={dark ?'text-3xl cursor-pointer text-white':'text-3xl cursor-pointer'}
                onClick={()=>setMobileLinks(!mobileLinks)}  />
            {mobileLinks && (
                <div className='absolute top-8 right-0 bg-orange py-4 px-8 text-center '>
                {navLinks.map((link,index)=>{
                    return (
                        <li key={index} className='list-none' >
                            <a href="#hero" className='text-white'>
                                {link.text}
                            </a>
                        </li>
                    )
                })}
                </div>
            )}

        </div>
    </nav>
  )
}

export default NavBar