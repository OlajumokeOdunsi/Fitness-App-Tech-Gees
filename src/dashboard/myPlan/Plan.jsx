
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import './style.css';
import { Pagination, Navigation } from 'swiper/modules';

const Plan = () => {

    const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
     <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1.1}
        centeredSlides={true}
        spaceBetween={5}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper bg-blue-500">

        <SwiperSlide className='bg-[url{//public/08.jpg}]'>
        <button className='shadow-xl text-white border-2 hover:bg-text-color border-bg-color rounded-2xl py-2 px-4 mb-6'>12 weeks</button>
        </SwiperSlide>

        <SwiperSlide className='bg-[url{//public/08.jpg}]'>
        <button className='shadow-xl text-white border-2 hover:bg-text-color border-bg-color rounded-2xl py-2 px-4 mb-6'>12 weeks</button>
        </SwiperSlide>

        <SwiperSlide className='bg-[url{//public/08.jpg}]'>
        <button className='shadow-xl text-white border-2 hover:bg-text-color border-bg-color rounded-2xl py-2 px-4 mb-6'>12 weeks</button>
        </SwiperSlide>

        <SwiperSlide className='bg-[url{//public/08.jpg}]'>
        <button className='shadow-xl text-white border-2 hover:bg-text-color border-bg-color rounded-2xl py-2 px-4 mb-6'>12 weeks</button>
        </SwiperSlide>
        
      </Swiper>

    </>
  )
}

export default Plan