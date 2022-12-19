import Image from "next/image";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";

export default function Newsslide() {
  const blog = [
    {
      id: 1,
      name: "International Day of Yoga 2022: Time to feel human again ",
      logo: "/news/news1.jpg",
      desc: "Do the challenges of the modern world and the effects of the pandemic have you tied up in knots? Maybe an ancient practice can give you some relief.",
      link: "https://edition.cnn.com/2022/06/21/health/international-day-of-yoga-2022-wellness/index.html",
      auth: "Forrest Brown",
      sorc: "CNN",
      date: "June 21, 2022",
    },
    {
      id: 2,
      name: "Yoga Mat Market and Oil Prices!",
      logo: "/news/news2.jpg",
      desc: "The global yoga mat market is expected to grow from $10.76 billion in 2021 to $11.37 billion in 2022 at a compound annual growth rate (CAGR) of 5.7%.",
      link: "https://www.businesswire.com/news/home/20220802005628/en/Yoga-Mat-Global-Market-Report-2022-Increasing-Popularity-of-Yoga-Driving-Demand---ResearchAndMarkets.com",
      auth: "ResearchAndMarkets",
      sorc: " Eastern Daylight Time",
      date: "August 02, 2022 ",
    },
    {
      id: 3,
      name: " Yoga cardio and weights!",
      logo: "/news/news3.jpg",
      desc: "The best approach to optimize our bodies is still under dispute with yogis’ health ideas frequently clashing with the conventional fitness community.",
      link: "https://duclarion.com/2022/09/how-to-combine-yoga-cardio-weights/",
      auth: "",
      sorc: " Branded Content",
      date: " September 26, 2022",
    },
    {
      id: 4,
      name: " Skincare meets Yoga",
      logo: "/news/mama.png",
      desc: "Honasa Consumer Pvt. Ltd. (HCPL), the parent company of Mamaearth, and The Derma Co., announced the launch of a new skincare brand Ayuga based on ayurvedic",
      link: "https://www.livemint.com/companies/news/mamaearth-parent-launches-new-skin-and-hair-care-brand-ayuga-11645095954165.html",
      auth: "",
      sorc: " Mint",
      date: " February 17, 2022",
    },
  ];
  const blog1 = [
    {
      id: 1,
      name: "International Day of Yoga 2022: Time to feel human again ",
      logo: "/news/news1.jpg",
      desc: "Do the challenges of the modern world and the effects of the pandemic have you tied up in knots? Maybe an ancient practice can give you some relief.",
      link: "https://edition.cnn.com/2022/06/21/health/international-day-of-yoga-2022-wellness/index.html",
      auth: "Forrest Brown",
      sorc: "CNN",
      date: "June 21, 2022",
    },
    {
      id: 2,
      name: "Yoga Mat Market and Oil Prices!",
      logo: "/news/news2.jpg",
      desc: "The global yoga mat market is expected to grow from $10.76 billion in 2021 to $11.37 billion in 2022 at a compound annual growth rate (CAGR) of 5.7%.",
      link: "https://www.businesswire.com/news/home/20220802005628/en/Yoga-Mat-Global-Market-Report-2022-Increasing-Popularity-of-Yoga-Driving-Demand---ResearchAndMarkets.com",
      auth: "ResearchAndMarkets",
      sorc: " Eastern Daylight Time",
      date: "August 02, 2022",
    },
    {
      id: 3,
      name: " Yoga cardio and weights!",
      logo: "/news/news3.jpg",
      desc: "The best approach to optimize our bodies is still under dispute with yogis’ health ideas frequently clashing with the conventional fitness community.",
      link: "https://duclarion.com/2022/09/how-to-combine-yoga-cardio-weights/",
      auth: "",
      sorc: " Branded Content",
      date: " September 26, 2022",
    },
    {
      id: 4,
      name: " Skincare meets Yoga",
      logo: "/news/mama.png",
      desc: "Honasa Consumer Pvt. Ltd. (HCPL), the parent company of Mamaearth, and The Derma Co., announced the launch of a new skincare brand Ayuga based on ayurvedic",
      link: "https://www.livemint.com/companies/news/mamaearth-parent-launches-new-skin-and-hair-care-brand-ayuga-11645095954165.html",
      auth: "",
      sorc: " Mint",
      date: " February 17, 2022",
    },
  ];
  const blog2 = [
    {
      name: "YOG AND SELF-CARE",
      small:
        "A few tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
      desc: "Break from yoga. Break from my mat = break out on face! 🤦🏻‍♀️",
      imgs: "/indexpage/disc.jpg",
    },
    {
      name: "YOG AND SELF-CARE",
      small:
        "A few tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
      desc: "Detox starts within.🥒🥬",
      imgs: "/indexpage/disc3.jpg",
    },
    {
      name: "YOG AND SELF-CARE",
      small:
        "A few tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
      desc: "Clean - inside and out 🙆🏻‍♀️",
      imgs: "/indexpage/disc2.jpg",
    },
  ];

  return (
    <>
      <section className="md:container md:mx-auto">
        <div className=" py-16 w-full  h-fit  lg:py-10">
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
                <p className="text-center text-2xl font-bah font-extrabold mb-5 tracking-widest text-black">
                  NEWS
                </p>
              </div>
              <div className="flex lg:grid md:grid md:grid-cols-3 lg:grid-cols-4 flex-wrap gap-1 gap-y-8  ">
                {blog.map(
                  ({ name, logo, id, desc, link, auth, sorc, date }) => {
                    return (
                      <div
                        key={id}
                        className="w-fit flex flex-col lg:flex-1 py-4 justify-between bg-opacity-75 px-5   rounded-lg overflow-hidden text-center relative"
                      >
                        <div>
                          <div className=" w-full transition duration-150 ease-out hover:ease-in hover:opacity-50">
                            <Image
                              className=" flex-shrink-0 object-cover xl:w-[100%] xl:h-[34rem]"
                              src={logo}
                              width={400}
                              height={300}
                              alt=""
                              unoptimized={true}
                            ></Image>
                          </div>

                          <h1 className="text-lg font-bold  font-bah text-left">
                            {name}
                          </h1>
                          <p className="text-left font-semibold font-bah">
                            Source : <span className="font-normal">{sorc}</span>
                          </p>
                          <p className="text-left font-semibold  font-bah">
                            Author : <span className="font-normal">{auth}</span>
                          </p>
                          <p className="mb-1 font-bah text-left font-semibold">
                            Date : <span className="font-normal">{date}</span>
                          </p>
                          <p className="leading-relaxed font-bah mt-5 text-left ">
                            {desc}
                          </p>
                        </div>
                        <div className="flex justify-center mt-3 ">
                          <Link href="/news">
                            <p className="px-6 font-bah py-2 cursor-pointer  font-medium tracking-wide text-black bg-white border-2 border-black hover:bg-black hover:border-white mb-2     rounded-md  hover:text-white ">
                              Read More
                            </p>
                          </Link>
                        </div>
                        <div className="w-full md:hidden block h-[1px] mt-5 bg-black"></div>
                      </div>
                    );
                  }
                )}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <p className="text-center text-2xl font-bah font-extrabold mb-5 tracking-widest text-black">
                  NEWS
                </p>
              </div>
              <div className="flex lg:grid md:grid md:grid-cols-3 lg:grid-cols-4 flex-wrap gap-1 gap-y-8  ">
                {blog1.map(
                  ({ name, logo, id, desc, link, auth, sorc, date }) => {
                    return (
                      <div
                        key={id}
                        className="w-fit flex flex-col lg:flex-1 py-4 justify-between bg-opacity-75 px-5  rounded-lg overflow-hidden text-center relative"
                      >
                        <div>
                          <div className=" w-full transition duration-150 ease-out hover:ease-in hover:opacity-50">
                            <Image
                              className=" flex-shrink-0 object-cover xl:w-[100%] xl:h-[34rem]"
                              src={logo}
                              width={400}
                              height={300}
                              alt=""
                              unoptimized={true}
                            ></Image>
                          </div>

                          <h1 className="text-lg font-bold  font-bah text-left">
                            {name}
                          </h1>
                          <p className="text-left font-semibold font-bah">
                            Source : <span className="font-normal">{sorc}</span>
                          </p>
                          <p className="text-left font-semibold font-bah">
                            Author : <span className="font-normal">{auth}</span>
                          </p>
                          <p className="mb-1 text-left  font-bah font-semibold">
                            Date : <span className="font-normal">{date}</span>
                          </p>
                          <p className="leading-relaxed font-bah mt-5 text-left ">
                            {desc}
                          </p>
                        </div>
                        <div className="flex justify-center mt-3 ">
                          <Link href="/news">
                            <p className="px-6 font-bah py-2 cursor-pointer font-medium tracking-wide text-black bg-white border-2 border-black hover:bg-black hover:border-white mb-2     rounded-md  hover:text-white ">
                              Read More
                            </p>
                          </Link>
                        </div>
                        <div className="w-full md:hidden block h-[1px] mt-5 bg-black"></div>
                      </div>
                    );
                  }
                )}
              </div>
            </SwiperSlide>

            {/* <SwiperSlide>
              <p className="text-3xl  capitalize lg:text-4xl text-black  text-center mb-7">PAUSE</p>
              <div className="grid gap-8 lg:grid-cols-3  ">
              {blog2.map(({ name, imgs, desc,small }, index) => {
              return (
                <div key={index} className="     bg-white rounded">
                  <div >
                    <img
                      src={imgs}
                      className="object-cover w-full h-64 rounded"
                      alt=""
                    />
                  </div>
                  <div className="py-5">
                    <div
                      
                      className="flex mb-3 text-black w-full h-full   hover:text-deep-purple-accent-700"
                    >
                      <p className="text-xl font-bah p-2 mb-6 font-bold md:h-5  h-fit">
                        {name}
                      </p>
                    </div>
                    <p className="text-sm font-bah p-4">{small}</p>
                    <p className="mb-4 font-bah p-2 h-12 text-black">{desc}</p>
                  </div>
                  <div className="w-full flex justify-center">
                  <Link href={"/blog"}>
                    <button className="px-6 font-bah py-2 font-medium tracking-wide text-black bg-white border-2 border-black hover:bg-black hover:border-white mb-5     rounded-md  hover:text-white ">
                      Read More
                    </button>
                    </Link>
                  </div>
                </div>
              );
            })}
                </div>
              </SwiperSlide> */}
          </Swiper>
        </div>
      </section>
    </>
  );
}
