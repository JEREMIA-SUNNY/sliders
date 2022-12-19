import Link from "next/link";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Slider() {
  const slides = [
    {
      text1: " Movement through yoga",
      text2: "",
      image: "/newslider/aerial2.jpg",
      id: "slide1",
    },
    {
      text1: "Grace in every step",
      text2: "",
      image: "/newslider/beach.jpg",
      id: "slide2",
    },
    
    {
      text1: "Balance off the mat",
      text2: "",
      image: "/newslider/aerialyoga.jpg",
      id: "slide4",
    },
    {
      text1: " Rise from within",
      text2: "",
      image: "/newslider/bridgepose.jpg",
      id: "slide5",
    },
    {
      text1: " Beyond skin deep",
      text2: "",
      image: "/newslider/cobrapose.jpg",
      id: "slide6",
    },
    {
      text1: "Still inside, flow outside",
      text2: "",
      image: "/newslider/headstand.jpg",
      id: "slide7",
    },
    {
      text1: "Slow and steady",
      text2: "",
      image: "/newslider/trikonasana.jpg",
      id: "slide8",
    },
    {
      text1: "Power through change",
      text2: "",
      image: "/newslider/warrior.jpg",
      id: "slide9"
    }
  ];

  return (
    <div className="relative w-auto">
      {/* <div className="w-full h-[60vh] flex overflow-x-auto snap-mandatory snap-x scrollbar-hide"> */}
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation={false}
          autoplay={true}
          loop={true}
          speed={1000}
          pagination={{ clickable: true }}

          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {slides.map(({ text1, text2, image, id }) => (
            <SwiperSlide key={id}>
              <div className="h-[650px]  w-full relative flex justify-center items-center">
                <Image
                  className="object-cover w-full brightness-75 h-full"
                  layout="fill"
                  src={image}
                  alt=""
                  unoptimized={true}
                />
                <div className="absolute inset-0 bg-green opacity-20"></div>
                <div className="px-4 md:container text-center z-50">
                  <h1 className="text-2xl md:text-4xl font-medium font-bah text-white drop-shadow-md py-4">
                    {text1}
                  </h1>
                  <h2 className="text-white leading-snug font-semibold text-2xl md:text-3xl font-bah drop-shadow-md">
                    {text2}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
