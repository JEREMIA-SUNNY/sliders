import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css/effect-cards";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { EffectCards, Autoplay } from "swiper";

export default function Slider3() {
  const slides = [
    {
      text1: "",

      image: "mbape2.jpg",
      id: "slide1",
    },
    {
      text1: "",

      image: "messi2.jpg",
      id: "slide2",
    },
    {
      text1: "",

      image: "messi3.jpg",
      id: "slide3",
    },
  ];
  return (
    <section className="bg-[#2F2F2F]">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        autoplay={true}
        loop={true}
        speed={800}
        modules={[EffectCards, Autoplay]}
        className="mySwiper flex justify-center items-center"
      >
        {slides.map(({ text1, image, id }) => (
          <SwiperSlide key={id}>
            <div className="h-[100vh] w-[100vh]  relative flex justify-center items-center">
              <Image
                className="object-cover relative w-full h-full"
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
    </section>
  );
}
