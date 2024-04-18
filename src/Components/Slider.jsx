import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper stylesSlide 1

import 'swiper/css';
import 'swiper/css/pagination';
import '../App.css'
// import required modules
import { Pagination } from 'swiper/modules';
export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='rounded-3xl' src="https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>

        <SwiperSlide><img className='rounded-3xl' src="https://images.unsplash.com/photo-1623857587031-f79f53808d7a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>

        <SwiperSlide><img className='rounded-3xl' src="https://images.unsplash.com/photo-1615880323184-c48be164ca1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>

        <SwiperSlide><img className='rounded-3xl' src="https://images.unsplash.com/photo-1502208327471-d5dde4d78995?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>

        <SwiperSlide><img className='rounded-3xl' src="https://images.unsplash.com/photo-1705384776087-0d7f38800278?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
       
      </Swiper>
    </>
  );
}
