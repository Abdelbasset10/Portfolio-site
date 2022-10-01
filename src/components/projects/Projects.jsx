import React from 'react'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import bank from '../../images/Desktop - 1.png'
import gpt from '../../images/Header.png'
import restaurant from '../../images/Content.png'
import gym from '../../images/gym.jpg'




const Projects = () => {
    const dark = useSelector((state)=>state.darkMode)
  return (
    <div className='pt-20 w-11/12 m-auto' id='projects' >
        <h1 className={dark?'text-center text-4xl font-bold text-white':' text-black text-center text-4xl font-bold'  }>Recent Projects <br /> <span className='text-orange' >Portfolio</span></h1>
        <Swiper 
        className='mt-10 mb-4 hover:-translate-y-3.5 '
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true, dynamicBullets: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
      <SwiperSlide className='mb-10  ' >
        <a href="https://merry-sawine-8a918d.netlify.app/">
            <img src={bank} alt="side" className='rounded-3xl w-96 h-52 '  />
        </a>
      </SwiperSlide>
      
      <SwiperSlide className='bg-gpt-bg rounded-3xl' >
        <a href="https://candid-haupia-401141.netlify.app/">
            <img src={gpt} alt="side" className=' w-96 h-52 rounded-3xl 	'  />
        </a>
        
      </SwiperSlide>
      <SwiperSlide className='bg-blackk rounded-3xl'  >
        <a href="https://stalwart-frangipane-26eac7.netlify.app/">
            <img src={restaurant} alt="side" className='rounded-3xl w-96 h-52' />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://tiny-pony-717677.netlify.app/">
            <img src={gym} alt="side" className='rounded-3xl w-96 h-52' />
        </a>  
      </SwiperSlide>
      
    </Swiper>
    <p className={dark ? 'text-white mt-0':'text-black'} ><span className='font-bold' >Note :</span> There are some full stack projects in Github because Heroku has been not free to host server side xD</p>
    </div>
  )
}

export default Projects