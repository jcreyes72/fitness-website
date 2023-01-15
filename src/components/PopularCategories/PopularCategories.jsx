import React from 'react'
import './PopularCategories.css'
import popular1 from "../../img/popular1.jpg"
import popular2 from "../../img/popular2.jpg"
import popular3 from "../../img/popular3.jpg"
import popular4 from "../../img/popular4.jpg"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const PopularCategories = () => {

    
    return (
        <>
            <h2 className='title'>POPULAR CATEGORIES</h2>
            <div className="s-container pop-container">  
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={4}
                    slidesPerGroup={1}
                    navigation = {true}
                    loopFillGroupWithBlank = {true}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className = "my-swiper"
                >
                    <SwiperSlide>
                    <div className="product popular">
                        <img src={popular1} alt="Barbells" />
                        <p>Barbells</p>
                        <h3>Multipurpose | Olympic | Powerlifting</h3>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="product popular">
                        <img src={popular2} alt="Plates" />
                        <p>Plates</p>
                        <h3>Bumper | Competition | Steel</h3>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="product popular">
                        <img src={popular3} alt="Benches" />
                        <p>Benches</p>
                        <h3>Flat | Adjustable</h3>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="product popular">
                        <img src={popular4} alt="Wraps, Straps, and Supports" />
                        <p>Wraps, Straps, and Supports</p>
                        <h3>Straps | Knee Sleeves | Belts</h3>
                    </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </>
    );
  }

export default PopularCategories