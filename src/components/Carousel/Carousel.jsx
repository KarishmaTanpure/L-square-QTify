import React, { useEffect,useRef } from "react";
import styles from './Carousel.module.css';
import { Navigation } from "swiper";
import { Swiper,SwiperSlide,useSwiper } from "swiper/react";
import "swiper/css";
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';
import 'swiper/css/navigation';


export default function Carousel({data,renderComponent}) {
    const swiperRef = useRef(null);
return(
    <div className={styles.wrapper}>
        <Swiper 
        style={{padding:"0px 20px"}}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
        >
            <CarouselRightNavigation />
            <CarouselLeftNavigation/>
            
            {data.map((ele,index)=>  (
                <SwiperSlide key={index} >{renderComponent(ele)}</SwiperSlide>
            ))}
            </Swiper> 
    </div>
)
}