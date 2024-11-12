import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ImageSwiper = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} loop={true}>
      <SwiperSlide>
        <div className="swiper-slide-content">
          <Image
            className="swiper-image"
            src="/images/kamran.jpg"
            alt="kamran"
            width={690}
            height={600}
          />
          <Image
            className="swiper-image"
            src="/images/peoples3.jpg"
            alt="kamran"
            width={770}
            height={600}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide-content">
          <Image
            className="swiper-image"
            src="/images/peoples2.jpg"
            alt="kamran"
            width={670}
            height={620}
          />
          <Image
            className="swiper-image"
            src="/images/laptops.jpg"
            alt="kamran"
            width={790}
            height={600}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide-content">
          <Image
            className="swiper-image"
            src="/images/Ameenalam.jpg"
            alt="kamran"
            width={670}
            height={600}
          />
          <Image
            className="swiper-image"
            src="/images/peoples.jpg"
            alt="kamran"
            width={790}
            height={600}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSwiper;
