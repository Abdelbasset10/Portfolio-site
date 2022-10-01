import React from 'react'

const Share = ({photo,skill}) => {
  return (
    <div className='flex items-center justify-center gap-4 px-2 sm:px-4 py-6' >
        <img src={photo} alt="crown" className=' w-6 sm:w-10' />
        <p className='text-xs' >{skill}</p>
    </div>
  )
}

export default Share