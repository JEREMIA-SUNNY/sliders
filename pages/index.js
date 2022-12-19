import { useState, useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import React from "react";
import withAutoplay from "react-awesome-slider/dist/autoplay";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import Slider from "../components/slider";
import Slider2 from "../components/slider2";
import Slider3 from "../components/slider3";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    arrows: false,
  };
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
    });
  }, []);
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <main>
      <head></head>
      <div  data-aos="zoom-out-right"
              data-aos-once="true" className="font-bold text-white text-center pt-5 pb-5 bg-[#2F2F2F] ">
        World Cup success and emotions
      </div>
      <div data-aos="fade-down" data-aos-once="true">
        <AutoplaySlider
          play={true}
          bullets={false}
          settings={settings}
          animation="cubeAnimation"
        >
          <div
            className="flex justify-center"
            style={{
              backgroundImage: `url(${"/1.jpg"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="rounded bg-white ">
              <p className="p-5">
                A ground-breaking World Cup with a fairy tale ending
              </p>
            </div>
          </div>
          <div
            className="flex justify-center"
            style={{
              backgroundImage: `url(${"/2.jpg"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="rounded bg-white ">
              <p className="w-[500px] p-5">
                Of the 32 nations qualified to play at the 2022 FIFA World Cup,
                24 countries competed at the previous tournament in 2018. Qatar
                were the only team making their debut in the FIFA World Cup,
                becoming the first hosts to make their tournament debut since
                Italy in 1934.
              </p>
            </div>
          </div>
          <div
            className="flex justify-center"
            style={{
              backgroundImage: `url(${"/3.jpg"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="rounded bg-white ">
              <p className="w-[500px] p-5">
                The 2022 World Cup is hosted by Qatar. The matches are going to
                be held between eight venues in the capital city of Doha, and
                the surrounding cities of Lusail, Al Khor, Al Rayyan, and Al
                Wakrah
              </p>
            </div>
          </div>
        </AutoplaySlider>
      </div>

      <Slider />
      <section>
        <div
          style={{
            backgroundImage: `url(${"/cr7.jpg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="h-[100vh]"
        >
          <div className="rounded-md flex  flex-col items-center  w-[700px] ">
            <p
              data-aos="zoom-in-down"
              data-aos-once="true"
              className=" mt-44 text-2xl ml-40 text-white"
            >
              “To go to a World Cup is a dream come true, and I can claim to
              have experienced that four times.” – Ronaldo
            </p>
          </div>
        </div>
      </section>
      <Slider2 />

      <Slider3 />
      {/* <AwesomeSlider animation="cubeAnimation">
        <div>dfhd</div>
        <div>dfhd</div>
        <div>dfhd</div>
        <div>dfhd</div>
      </AwesomeSlider> */}
    </main>
  );
}
