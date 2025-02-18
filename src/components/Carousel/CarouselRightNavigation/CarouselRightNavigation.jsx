import React, { useEffect, useState } from "react";
import {useSwiper} from "swiper/react";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";
import styles from "./CarouselRightNavigation.module.css";

export default function CarouselRightNavigation() {
  const swiper = useSwiper();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleSlideChange = () => {
      if (swiper && swiper.activeIndex >= swiper.slides.length - 2) {
        setIsVisible(false);
      }
    };

    if (swiper && swiper.on) {
      swiper.on("slideChange", handleSlideChange);

      return () => {
        swiper.off("slideChange", handleSlideChange);
      };
    }
  }, [swiper]);

  const handleButtonClick = () => {
    if (swiper && swiper.slideNext && typeof swiper.slideNext === "function") {
      swiper.slideNext();
    }
  };

  return isVisible ? (
    <div className={styles.rightNavigation}>
      <RightArrow onClick={handleButtonClick} />
    </div>
  ) : null;
}