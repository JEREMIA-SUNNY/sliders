import Image from "next/image";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { EffectCoverflow, Pagination } from "swiper";

export default function Slider2() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
    });
  }, []);
  const slides = [
    {
      text1:
        "When there is a World Cup the world stops, the country stops, everyone is hugging each other, whether old or young, everyone stops just to enjoy the football.",

      image: "4.jpg",
      id: "slide1",
    },
    {
      text1:
        "The tournament kicked off on Sunday, November 20 at the Al Bayt Stadium, where hosts Qatar lost 2-0 to Ecuador in Group A.",

      image: "5.jpg",
      id: "slide2",
    },
    {
      text1:
        "Since then, the group stages have continued, with England thrashing Iran 6-2 and Saudi Arabia shockingly beating Argentina 2-1.",

      image: "6.jpg",
      id: "slide3",
    },
    {
      text1:
        "You have to show up in the World Cup, and in the World Cup anything can happen.” – Lionel Messi",

      image: "7.jpg",
      id: "slide4",
    },
  ];

  return (
    <div className="relative w-auto">
      {/* <div className="w-full h-[60vh] flex overflow-x-auto snap-mandatory snap-x scrollbar-hide"> */}
      <div className="w-full">
        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay]}
          effect={"coverflow"}
          navigation={false}
          autoplay={true}
          loop={true}
          speed={800}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className="mySwiper"

          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {slides.map(({ text1, image, id }) => (
            <SwiperSlide key={id}>
              <div
                data-aos="fade-down"
                data-aos-once="true"
                className="h-[100vh] w-full relative flex justify-center items-center"
              >
                <Image
                  className="object-cover w-full h-full"
                  layout="fill"
                  src={image}
                  alt=""
                />
                <div className="absolute inset-0 bg-green opacity-20"></div>
                <div className="px-4 md:container bg-white rounded-lg  text-center z-50">
                  <h1 className="text-2xl   text-black drop-shadow-md py-4">
                    {text1}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
