import Image from "next/image";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";

export default function Blogslide() {
  const blog = [
    {
      
      name: "YOG ON THE MAT",
      small:"How to get started with Yoga and grow with your practice",
      title:"Own your breath!",
      desc: "Remember, you control your breath, don’t let your breath control you! 🧘🏻‍♀️- 🤷🏽‍♀️ - ⬇️",
      imgs: "/article/Article1.jpg",
    },
    {
      name: "YOG ON THE MAT",
      small:"How to get started with Yoga and grow with your practice",
      title:"Asana for the hips!",
      desc: "Don't ever look back, unless it's from a different point of view 🙃 ⬇️",
      imgs: "/article/Article2.jpg",
    },
    {
      name: "YOG ON THE MAT",
      small:"How to get started with Yoga and grow with your practice",
      desc: "Hips don't lie 🙇🏻‍♀️👇🏼",
      title:"Kapotasana magic",
      imgs: "/article/Article3.jpg",
    },
  ];
  const blog1 = [
    {
      
      name: " YOG OFF THE MAT",
      small:"Applying it within our every day routine - at work,at home, all over the world",
      desc: "3 Sins of lockdown (lockdowns) that I’m sure we’ve all encountered at some point! 🚫❓",
      imgs: "/article/articlefood.jpg",
      title:"Yoga for your sins",
    },
    {
      name: " YOG OFF THE MAT",
      small:"Applying it within our every day routine - at work,at home, all over the world",
      imgs: "/article/Article5.jpg",
      desc: "Is today looking bleak😑? overwhelming😲 ? crazy🤯? Quick fix - 🤫 ⤵️",
      title:"Your own mini treat",
    },
    {
      name: " YOG OFF THE MAT",
      small:"Applying it within our every day routine - at work,at home, all over the world",
      desc: "Stay true to your roots👇🏼",
      imgs: "/article/Article6.jpg",
      title:"Foundation first!",
    },
  ];
  const blog2 = [
    {
      
      name: "YOG AND SELF-CARE",
      small:"Tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
      desc: "Break from my mat = break out on face! 🤦🏻‍♀️",
      imgs: "/article/Article7.jpg",
      title:"Break from yoga",
    },
    {
      name: "YOG AND SELF-CARE",
      small:"Tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
      desc: "Cucumber + gooseberries + mint leaves + bottle gourd + 🧊 = 💪🏼🧠🫀💁🏻‍♀️🏃🏻‍♀️🧘🏻‍♀️",
      imgs: "/article/Article8.jpg",
      title:"Detox starts within.",
    },
    {
      name: "YOG AND SELF-CARE",
      small:"Tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
      desc: "Be sure to disinfect your mat regularly, stay clean - stay safe!",
      imgs: "/article/Article9.jpg",
      title:"Clean - inside and out",
    },
  ];
  



  return (
    <>
     <section className="md:container md:mx-auto">
     <div className=" py-11 w-full  h-fit  lg:py-16">
          

          
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              slidesPerGroup={1}
              breakpoints={{
                769: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                  spaceBetween: 20,
                  Autoplay: true,
                  loop: true,
                  speed: 800,

                  pagination: {},
                },
                1024: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 20,
                  Autoplay: true,
                  loop: true,
                  speed: 800,

                  pagination: {},
                },
              }}
              autoplay={true}
              pagination={{ clickable: true }}
              loop={true}
              speed={1700}
              effect=""
            >
              <SwiperSlide>
              <div>
            <p className="text-center text-2xl font-bah font-extrabold  mb-20 tracking-widest text-black">
             PAUSE
            </p>
            
          </div>
                <div className="grid gap-8 lg:grid-cols-3  ">
                {blog.map(({ name, imgs, desc,small,title }, index) => {
              return (
                <div key={index} className="    bg-white rounded">
                  <div href="" aria-label="Article">
                    <img
                      src={imgs}
                      className="object-cover w-full h-64 rounded"
                      alt=""
                    />
                  </div>
                  <div className="">
                    
                      <div className="flex md:mb-3 text-black w-full h-full   hover:text-deep-purple-accent-700">
                        <p className="text-xl text-black font-bah p-2 md:mb-6 font-bold md:h-2  h-fit">
                          {title}
                        </p>
                      </div>
                      {/* <p className="text-xs mt-5 font-bah ">{small}</p> */}


                      <p className=" font-bah p-2 md:mt-2 h-14 text-black">
                        {desc}
                      </p>
                    </div>
                  <div className="w-full mt-10  flex justify-center">
                  <Link href={"/pause"}>
                    <button className="px-6 font-bah cursor-pointer py-2 font-medium tracking-wide text-black bg-white border-2 border-black hover:bg-black hover:border-white mb-5     rounded-md  hover:text-white ">
                      Read More
                    </button>
                    </Link>
                  </div>
                </div>
              );
            })}
                </div>
              </SwiperSlide>



              <SwiperSlide>
              <div>
            <p className="text-center text-2xl font-bah font-extrabold mb-20 tracking-widest text-black">
             PAUSE
            </p>
            
          </div>
              <div className="grid gap-8 lg:grid-cols-3  ">
              {blog1.map(({ name, imgs, desc,small,title }, index) => {
              return (
                <div key={index} className=" =    bg-white rounded">
                  <div >
                    <img
                      src={imgs}
                      className="object-cover w-full h-64 rounded"
                      alt=""
                    />
                  </div>
                  <div className="">
                     
                      <div className="flex md:mb-3 text-black w-full h-full   hover:text-deep-purple-accent-700">
                        <p className="text-xl text-black font-bah p-2 md:mb-6 font-bold md:h-2  h-fit">
                          {title}
                        </p>
                      </div>
                      {/* <p className="text-xs mt-5 font-bah ">{small}</p> */}

                      <p className=" font-bah p-2 md:mt-2 h-14 text-black">
                        {desc}
                      </p>
                    </div>
                  <div className="w-full mt-10 flex justify-center">
                  <Link href={"/pause"}>
                    <button className="px-6 font-bah cursor-pointer py-2 font-medium tracking-wide text-black bg-white border-2 border-black hover:bg-black hover:border-white mb-5     rounded-md  hover:text-white ">
                      Read More
                    </button>
                    </Link>
                  </div>
                </div>
              );
            })}
                </div>
              </SwiperSlide>



              <SwiperSlide>
              <div>
            <p className="text-center text-2xl font-bah font-extrabold mb-5 tracking-widest text-black">
            PAUSE
            </p>
            
          </div>
              <div className="grid gap-8 lg:grid-cols-3  ">
              {blog2.map(({ name, imgs, desc,small,title }, index) => {
              return (
                <div key={index} className="     bg-white rounded">
                  <div >
                    <img
                      src={imgs}
                      className="object-cover w-full h-64 rounded"
                      alt=""
                    />
                  </div>
                  <div className="">
                      
                      <div className="flex md:mb-3 text-black w-full h-full   hover:text-deep-purple-accent-700">
                        <p className="text-xl text-black font-bah p-2 md:mb-6 font-bold md:h-2  h-fit">
                          {title}
                        </p>
                      </div>
                      {/* <p className="text-xs mt-5 font-bah ">{small}</p> */}

                      <p className=" font-bah p-2 mt-2 h-14 text-black">
                        {desc}
                      </p>
                    </div>
                  <div className="w-full mt-10  flex justify-center">
                  <Link href={"/pause"}>
                    <button className="px-6 font-bah cursor-pointer py-2 font-medium tracking-wide text-black bg-white border-2 border-black hover:bg-black hover:border-white mb-5     rounded-md  hover:text-white ">
                      Read More
                    </button>
                    </Link>
                  </div>
                </div>
              );
            })}
                </div>
              </SwiperSlide>



              

             


            </Swiper>
         
        </div>
      </section>
    </>
  );
}
