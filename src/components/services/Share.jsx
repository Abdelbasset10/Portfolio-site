import React from 'react'
import { useSelector } from 'react-redux'

const Share = ({photo,field,skils}) => {
    const dark = useSelector((state)=>state.darkMode)
  return (
        <div className=' flex flex-col items-center justify-center 	'>
            <img src={photo} alt="photos" className='w-20' />
            <p className={dark ? 'text-white font-bold':'text-black font-bold'}>{field}</p>
            <div className='flex flex-wrap justify-center items-center' >
                {skils.map((skil,index)=>{
                    return(
                        <p key={index} className={dark ? 'text-white':'text-black'} >{skil},</p>
                    )
                })}
            </div>
        </div>
  )
}

export default Share