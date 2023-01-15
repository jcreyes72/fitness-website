import React from 'react'
import './Featured.css'
import feature1 from "../../img/feature1.jpg"
import feature2 from "../../img/feature2.jpg"
import feature3 from "../../img/feature3.jpg"
import feature4 from "../../img/feature4.jpg"
import feature5 from "../../img/feature5.jpg"
import feature6 from "../../img/feature6.jpg"
import feature7 from "../../img/feature7.jpg"
import feature8 from "../../img/feature8.jpg"
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
        <>
            <h2 className='title'>FEATURED PRODUCTS</h2>
            <div className="s-container">  
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
                    <div className="product">
                        <img src={feature1} alt="Rogue Echo Bike" />
                        <h3>Rogue Echo Bike</h3>
                        <p>$895.00</p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="product">
                        <img src={feature2} alt="The Ohio Bar - Stainless Steel / Black" />
                        <h3>The Ohio Bar - Stainless Steel / Black</h3>
                        <p>$350.00</p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="product">
                        <img src={feature3} alt="Rogue MIL Spec Echo Bumper" />
                        <h3>Rogue MIL Spec Echo Bumper</h3>
                        <p>$381.00</p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="product">
                        <img src={feature4} alt="Rogue RML-3W Fold Back Wall Mount Rack" />
                        <h3>Rogue RML-3W Fold Back Wall Mount Rack</h3>
                        <p>$610.00</p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="product">
                        <img src={feature5} alt="GORUCK Ballistic Trainers" />
                        <h3>GORUCK Ballistic Trainers</h3>
                        <p>$125.00</p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="product">
                        <img src={feature6} alt="Rogue Husafell Strongman Bag" />
                        <h3>Rogue Husafell Strongman Bag</h3>
                        <p>$95.00</p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="product">
                        <img src={feature7} alt="Rogue Squat Wedge" />
                        <h3>Rogue Squat Wedge</h3>
                        <p>$95.00</p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="product">
                        <img src={feature8} alt="GORUCK Ballistic Trainers" />
                        <h3>GORUCK Ballistic Trainers</h3>
                        <p>$125.00</p>
                    </div>
                    </SwiperSlide>

                </Swiper>
            </div>

        </>
    );
  }

export default Featured