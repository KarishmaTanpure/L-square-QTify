import React, { useEffect,useRef } from "react";
import styles from './Carousel.module.css';
import SwiperCore, { Navigation } from "swiper/core";
import { Swiper,SwiperSlide,useSwiper } from "swiper/react";
import "swiper/css";
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';
import 'swiper/css/navigation';

SwiperCore.use([Navigation]);


export default function Carousel({data,renderComponent}) {
    const swiperRef = useRef(null);
return(
    <div className={styles.wrapper}>
        <Swiper 
        ref={swiperRef}
        style={{padding:"0px 20px"}}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
        >
            <CarouselRightNavigation swiper={swiperRef}  />
            <CarouselLeftNavigation/>
            
            {data.map((ele,index)=>  (
                <SwiperSlide key={index} >{renderComponent(ele)}</SwiperSlide>
            ))}
            </Swiper> 
    </div>
)
}