import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { EffectCreative, Autoplay,Pagination } from "swiper";

export default function Slider4 () {
  const slides = [
    {
      text1:
        "We have a great sense of togetherness. It is our team spirit that has taken us to this World Cup.” – Robbie Keane.",

      image: "messi.jpg",
      id: "slide1",
    },
    {
      text1:
        "The World Cup is the ultimate moment for any player. It is the opportunity to defend your country in the biggest tournament in the world and the moment the whole world will watch you play.” – Willian",

      image: "mbape.jpg",
      id: "slide2",
    },
    {
      text1:
        "“Every player dreams of winning the World Cup, and there are very few who are fortunate enough to actually do it.” – Carles Puyol",

      image: "modrich.jpg",
      id: "slide3",
    },
   
  ];
  return (
    <>
      <Swiper
         direction={"vertical"}
         pagination={{
           clickable: true,
         }}
         modules={[Pagination]}
         className="mySwiper"
      >
        {slides.map(({ text1, image, id }) => (
          <SwiperSlide key={id}>
            <div className="h-[100vh] w-full relative flex justify-center items-center">
              <Image
                className="object-cover w-full h-full"
                layout="fill"
                src={image}
                alt=""
              />
              <div className="absolute inset-0 bg-green opacity-20"></div>
              <div className="px-4 md:container text-center z-50">
                <h1 className="text-4xl md:text-5xl  text-white drop-shadow-md py-4">
                  {text1}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
