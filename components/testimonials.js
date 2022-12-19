import Link from "next/link";
import Image from "next/image";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Testimonials() {
  const stuff = [
    {
      text: "Yoga is You",
      name: "",
      position: "",
      company: "",
      logo: "/testimonial1.png",
      id: 1,
    },
    {
      text: "Own your practice and grow from it",
      name: "",
      position: "",
      company: "",
      logo: "/testimonial2.png",
      id: 2,
    },
    {
      text: "Balance on the mat is balance off the mat",
      name: "",
      position: "",
      company: "",
      logo: "/testimonial3.png",
      id: 3,
    },
    {
      text: "Work-in to Work-out",
      name: "",
      position: "",
      company: "",
      logo: "/testimonial3.png",
      id: 4,
    },
    {
      text: "Bend>Balance>Breathe>Repeat",
      name: "",
      position: "",
      company: "",
      logo: "/testimonial3.png",
      id: 5,
    },
    {
      text: "Your body is your temple",
      name: "",
      position: "",
      company: "",
      logo: "/testimonial3.png",
      id: 5,
    },
    {
      text: "Fall to rise",
      name: "",
      position: "",
      company: "",
      logo: "/testimonial3.png",
      id: 5,
    },
    {
      text: "Your skin is 90% of your selfie",
      name: "",
      position: "",
      company: "",
      logo: "/testimonial3.png",
      id: 5,
    },
  ];

  return (
    <section
      style={{
        backgroundImage: `url(${"/classes/home.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="p-4 md:pt-12 lg:w-screen lg:h-screen  relative"
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={true}
        loop={true}
        speed={1000}
        // pagination={{ clickable: true }}
      >
        {stuff.map(({ text, name, position, company, logo, id }) => (
          <SwiperSlide key={id}>
            <div className="w-full lg:mt-20 relative flex justify-center items-center">
              <div className="md:container mx-auto md:px-24 flex flex-col justify-center items-center h-[50vh]">
                <p className="md:max-w-prose md:text-4xl font-semibold text-white text-sm md:leading-10 text-center font-bah">
                  {text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
