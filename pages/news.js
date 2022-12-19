import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

export default function News() {
  const [loadmore, setLoadmore] = useState("hi");
  const [fullblog, setFullblog] = useState(null);
  const [buttonIndex, setButtonIndex] = useState(0);
  const loadclick = () => {
    setFullblog(1);
  };

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
      name: " Skincare Meets Yoga",
      logo: "/news/mama.png",
      desc: "Honasa Consumer Pvt. Ltd. (HCPL), the parent company of Mamaearth, and The Derma Co., announced the launch of a new skincare brand Ayuga based on ayurvedic",
      link: "https://www.livemint.com/companies/news/mamaearth-parent-launches-new-skin-and-hair-care-brand-ayuga-11645095954165.html",
      auth: "",
      sorc: " Mint",
      date: " February 17, 2022",
    },
    {
      id: 5,
      name: " Mental Health, a global priority ",
      logo: "/news/apple.jpg",
      desc: "Whilst the pandemic has, and continues to, take its toll on our mental health, the ability to reconnect through World Mental Health Day 2022 will provide us with an opportunity to re-kindle our efforts to protect",
      link: "https://www.who.int/campaigns/world-mental-health-day/2022",
      auth: "",
      sorc: " WHO",
      date: " ",
    },
  ];

  return (
    <>
      <section className="text-black md:container md:mx-auto  body-font">
        <p className="text-2xl font-extrabold mt-5 mb-5   text-center font-bah ">
          NEWS
        </p>

        <div className="mt-20">
          {blog.map(({ name, logo, id, desc, link, auth, sorc, date },index) => {
            return (
              <div key={index} className="mb-10 border-b-4  gap-6 flex flex-col  md:flex-row ">
                <div className=" w-full md:w-fit  hover:ease-in hover:opacity-50">
                  <Image
                    className=" flex-shrink-0 object-cover lg:w-[100%] lg:h-[200px] "
                    src={logo}
                    width={400}
                    height={250}
                    alt=""
                    unoptimized={true}
                  ></Image>
                </div>
                <div className=" w-full  ">
                  <div className="mb-3">
                    <div className=" text-black  ">
                      <p className=" text-2xl font-semibold text-left">
                        {name}
                      </p>
                    </div>
                  </div>
                  <p className="mb-1 font-semibold">
                    Source : <span className="font-normal">{sorc}</span>
                  </p>
                  <p className="mb-1 font-semibold">
                    Author : <span className="font-normal">{auth}</span>
                  </p>
                  <p className="mb-1 font-semibold">
                    Date : <span className="font-normal">{date}</span>
                  </p>
                  <p className="text-black text-justify">{desc}</p>

                  <div className="flex justify-center md:justify-end mt-3 ">
                    <a href={link} rel="noreferrer" target="_blank">
                      <p className="px-6 font-bah py-2  font-medium tracking-wide text-black bg-white border-2 border-black hover:bg-black hover:border-white mb-2     rounded-md  hover:text-white ">
                        Read More
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {fullblog && (
        <div className="md:container md:mx-auto">
          <div className="flex lg:grid md:grid md:grid-cols-3 lg:grid-cols-4 flex-wrap gap-1 gap-y-8  ">
            {blog.map(({ name, logo, id, desc, link, auth, sorc }) => {
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

                    <h1 className="text-xl font-bah p-2 mb-3 h-fit font-bold text-left">
                      {name}
                    </h1>
                    <p className="text-left font-bah">Source : {sorc}</p>
                    <p className="text-left font-bah">Author : {auth}</p>
                    <p className="leading-relaxed font-bah mt-5 text-left ">
                      {desc}
                    </p>
                  </div>
                  <div className="flex justify-center mt-3 ">
                    <a href={link} rel="noreferrer" target="_blank">
                      <p className="px-6 font-bah py-2  font-medium tracking-wide text-black bg-white border-2 border-black hover:bg-black hover:border-white mb-2     rounded-md  hover:text-white ">
                        Read More
                      </p>
                    </a>
                  </div>
                  <div className="w-full md:hidden block h-[1px] mt-5 bg-black"></div>
                </div>
              );
            })}
          </div>
        </div>
      )}{" "}
      {fullblog && (
        <div className="w-full flex mt-5 justify-center">
          <button
            onClick={() => (setFullblog(null), setLoadmore(1))}
            className="px-6 ease-in duration-75 font-bah py-2 font-medium tracking-wide text-black bg-white border-2 border-black hover:bg-black hover:border-white mb-2     rounded-md  hover:text-white "
          >
            Show Less
          </button>
        </div>
      )}
    </>
  );
}
