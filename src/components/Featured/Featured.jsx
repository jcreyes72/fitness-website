import React from 'react'
import './Featured.css'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Featured = () => {
    return (
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        slidesPerGroup={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="product">
            <img src={''} alt="Product 1" />
            <h3>PRODUCT 1</h3>
            <p>$19.99</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product">
            <img src={''} alt="Product 2" />
            <h3>PRODUCT 2</h3>
            <p>$29.99</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product">
            <img src={''} alt="Product 3" />
            <h3>PRODUCT 3</h3>
            <p>$39.99</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product">
            <img src={''} alt="Product 4" />
            <h3>PRODUCT 4</h3>
            <p>$49.99</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product">
            <img src={''} alt="Product 5" />
            <h3>PRODUCT 5</h3>
            <p>$19.99</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product">
            <img src={''} alt="Product 6" />
            <h3>PRODUCT 6</h3>
            <p>$19.99</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product">
            <img src={''} alt="Product 7" />
            <h3>PRODUCT 7</h3>
            <p>$19.99</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product">
            <img src={''} alt="Product 8" />
            <h3>PRODUCT 8</h3>
            <p>$19.99</p>
          </div>
        </SwiperSlide>
      </Swiper>
    );
  }

export default Featured