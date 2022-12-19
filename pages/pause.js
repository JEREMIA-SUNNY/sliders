import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function Pause() {
  const [buttonIndex, setButtonIndex] = useState(0);
  const [loadmore, setLoadmore] = useState("hi");
  const buttonClick = (x) => {
    setButtonIndex(x);
  };
  const [fullblog, setFullblog] = useState(null);
  const loadclick = () => {
    setFullblog(1);
  };
  const blog = [
    {
      name: "YOG ON THE MAT",
      small: "How to get started with Yoga and grow with your practice",
      title: "Title 1",
      blogsdata: [
        {
          ser: "/blogs/blog1on",
          name: "YOG ON THE MAT",
          small: "How to get started with Yoga and grow with your practice",
          titles: " Own your breath!",
          desc: "Remember, you control your breath, don't let your breath control you! 🧘🏻‍♀️- 🤷🏽‍♀️ - ⬇️",
          imgs: "/article/Article1.jpg",
        },
        {
          ser: "/blogs/blog2on",
          name: "YOG ON THE MAT",
          titles: " Asana for the hips!",
          small: "",
          desc: "Don't ever look back, unless it's from a different point of view 🙃 ⬇️",
          imgs: "/article/Article2.jpg",
        },
        {
          ser: "/blogs/blog3on",
          name: "YOG ON THE MAT",
          titles: "Kapotasana magic",
          small: "",
          desc: "Hips don't lie 🙇🏻‍♀️👇🏼",
          imgs: "/article/Article3.jpg",
        },
      ],
      blogsdatafull: [
        {
          ser: "/blogs/blog4on",
          name: "YOG ON THE MAT",
          small: "How to get started with Yoga and grow with your practice",
          titles: "The art of Savasana",
          desc: "If you've done even one yoga class, then you've definitely heard of this asana.",
          imgs: "/article/savasana.jpg",
        },
        {
          ser: "/blogs/blog6on",
          name: "YOG ON THE MAT",
          titles: "Anxiety and Yoga",
          small: "How to get started with Yoga and grow with your practice",
          desc: "What is anxiety? The simplest way to explain this (without any medical terms) - it is trapped energy.",
          imgs: "/article/anxiety.jpg",
        },
        {
          ser: "/blogs/blog7on",
          name: "YOG ON THE MAT",
          titles: "Yoga and HIIT?",
          small: "How to get started with Yoga and grow with your practice",
          desc: "Let me start by saying - yoga is not stretching✋",
          imgs: "/article/hiit.jpg",
        },
        {
          ser: "/blogs/blog8on",
          name: "YOG ON THE MAT",
          small: "How to get started with Yoga and grow with your practice",
          titles: "Excuses",
          desc: "Every excuse you would use to avoid a morning workout is a reason to do it!",
          imgs: "/article/excuses.jpg",
        },
        // {
        //   ser: "/blogs/blog2",
        //   name: "YOG ON THE MAT",
        //   titles: " Asana for the hips!",
        //   small: "How to get started with Yoga and grow with your practice",
        //   desc: "Don't ever look back, unless it's from a different point of view 🙃 ⬇️",
        //   imgs: "/article/Article2.jpg",
        // },
        // {
        //   ser: "/blogs/blog3",
        //   name: "YOG ON THE MAT",
        //   titles: "Kapotasana magic",
        //   small: "How to get started with Yoga and grow with your practice",
        //   desc: "Hips don't lie 🙇🏻‍♀️👇🏼",
        //   imgs: "/article/Article3.jpg",
        // },
      ],
    },
    {
      name: "YOG OFF THE MAT",
      title: "Title 2",
      blogsdata: [
        {
          ser: "/blogs/blogoff9",
          name: " YOG OFF THE MAT",
          titles: "Yoga for your sins",
          small: "",
          desc: "3 Sins of lockdown (lockdowns) that I’m sure we’ve all encountered at some point! 🚫❓",
          imgs: "/article/articlefood.jpg",
        },
        {
          ser: "/blogs/blogoff10",
          name: " YOG OFF THE MAT",
          titles: "Your own mini treat",
          small:
            "Applying it within our every day routine - at work,at home, all over the world",
          desc: "Is today looking bleak😑? overwhelming😲 ? crazy🤯? Quick fix - 🤫 ⤵️",
          imgs: "/article/Article5.jpg",
        },
        {
          ser: "/blogs/blogoff11",
          name: " YOG OFF THE MAT",
          titles: "Foundation first!",
          small: "",
          desc: "Stay true to your roots👇🏼",
          imgs: "/article/Article6.jpg",
        },
      ],
      blogsdatafull: [
        {
          ser: "/blogs/blogoff12",
          name: " YOG OFF THE MAT",
          titles: "Stand up for yourself!",
          small:
            "Applying it within our every day routine - at work,at home, all over the world",
          desc: "Have you ever spent some time making note of how much time you spend standing?👫 If that's a big no",
          imgs: "/article/stand.jpg",
        },
        {
          ser: "/blogs/blogoff13",
          name: " YOG OFF THE MAT",
          titles: " Headache home remedies ! ",
          small:
            "Applying it within our every day routine - at work,at home, all over the world",
          desc: "As someone who is prone to migraines every now and then, I totally understand how frustrating that pain can be. 😩",
          imgs: "/article/headachehome.JPG",
        },
        // {
        //   ser: "/blogs/blog6",
        //   name: " YOG OFF THE MAT",
        //   titles: "Foundation first!",
        //   small:
        //     "Applying it within our every day routine - at work,at home, all over the world",
        //   desc: "Stay true to your roots👇🏼",
        //   imgs: "/article/Article6.jpg",
        // },
        // {
        //   ser: "/blogs/blog4",
        //   name: " YOG OFF THE MAT",
        //   titles: "Yoga for your sins",
        //   small:
        //     "Applying it within our every day routine - at work,at home, all over the world",
        //   desc: "3 Sins of lockdown (lockdowns) that I’m sure we’ve all encountered at some point! 🚫❓",
        //   imgs: "/article/articlefood.jpg",
        // },
        // {
        //   ser: "/blogs/blog5",
        //   name: " YOG OFF THE MAT",
        //   titles: "Your own mini treat",
        //   small:
        //     "Applying it within our every day routine - at work,at home, all over the world",
        //   desc: "Is today looking bleak😑? overwhelming😲 ? crazy🤯? Quick fix - 🤫 ⤵️",
        //   imgs: "/article/Article5.jpg",
        // },
        // {
        //   ser: "/blogs/blog6",
        //   name: " YOG OFF THE MAT",
        //   titles: "Foundation first!",
        //   small:
        //     "Applying it within our every day routine - at work,at home, all over the world",
        //   desc: "Stay true to your roots👇🏼",
        //   imgs: "/article/Article6.jpg",
        // },
      ],
    },
    {
      name: "YOG AND SELF-CARE",
      title: "Title 3",
      blogsdata: [
        {
          ser: "/blogs/blogself14",
          name: "YOG AND SELF-CARE",
          small: "",
          titles: " Break from yoga",
          desc: "Break from my mat = break out on face! 🤦🏻‍♀️",
          imgs: "/article/Article7.jpg",
        },
        {
          ser: "/blogs/blogself15",
          name: "YOG AND SELF-CARE",
          small: "",
          titles: "Detox starts within. ",
          desc: "Cucumber + gooseberries + mint leaves + bottle gourd + 🧊 = 💪🏼🧠🫀💁🏻‍♀️🏃🏻‍♀️🧘🏻‍♀️",
          imgs: "/article/Article8.jpg",
        },
        {
          ser: "/blogs/blogslef16",
          name: "YOG AND SELF-CARE",
          small:
            "Tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
          titles: "Clean - inside and out",
          desc: "Be sure to disinfect your mat regularly, stay clean - stay safe!",
          imgs: "/article/Article9.jpg",
        },
      ],
      blogsdatafull: [
        // {
        //   ser: "/blogs/blog7",
        //   name: "YOG AND SELF-CARE",
        //   small:
        //     "Tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
        //   titles: " Break from yoga",
        //   desc: "Break from my mat = break out on face! 🤦🏻‍♀️",
        //   imgs: "/article/Article7.jpg",
        // },
        // {
        //   ser: "/blogs/blog8",
        //   name: "YOG AND SELF-CARE",
        //   small:
        //     "Tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
        //   titles: "Detox starts within. ",
        //   desc: "Cucumber + gooseberries + mint leaves + bottle gourd + 🧊 = 💪🏼🧠🫀💁🏻‍♀️🏃🏻‍♀️🧘🏻‍♀️",
        //   imgs: "/article/Article8.jpg",
        // },
        // {
        //   ser: "/blogs/blog9",
        //   name: "YOG AND SELF-CARE",
        //   small:
        //     "Tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
        //   titles: "Clean - inside and out",
        //   desc: "Be sure to disinfect your mat regularly, stay clean - stay safe!",
        //   imgs: "/article/Article9.jpg",
        // },
        // {
        //   ser: "/blogs/blog7",
        //   name: "YOG AND SELF-CARE",
        //   small:
        //     "Tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
        //   titles: " Break from yoga",
        //   desc: "Break from my mat = break out on face! 🤦🏻‍♀️",
        //   imgs: "/article/Article7.jpg",
        // },
        // {
        //   ser: "/blogs/blog8",
        //   name: "YOG AND SELF-CARE",
        //   small:
        //     "Tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
        //   titles: "Detox starts within. ",
        //   desc: "Cucumber + gooseberries + mint leaves + bottle gourd + 🧊 = 💪🏼🧠🫀💁🏻‍♀️🏃🏻‍♀️🧘🏻‍♀️",
        //   imgs: "/article/Article8.jpg",
        // },
        // {
        //   ser: "/blogs/blog9",
        //   name: "YOG AND SELF-CARE",
        //   small:
        //     "Tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
        //   titles: "Clean - inside and out",
        //   desc: "Be sure to disinfect your mat regularly, stay clean - stay safe!",
        //   imgs: "/article/Article9.jpg",
        // },
      ],
    },
  ];
  const categor = [
    "How to get started with Yoga and grow with your practice",
    "Applying it within our every day routine - at work,at home, all over the world",
    "Tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
  ];
  return (
    <>
      <section className="md:container mx-auto ">
        <div className="w-full h-72 relative ">
          <Image
            layout="fill"
            alt="ser"
            src="/slider/car2.png"
            objectFit="cover "
            className="brightness-75"
            unoptimized={true}
          />
          <div className="w-full    h-full  flex  justify-center">
            <div className="text-white relative    h-full flex flex-col justify-center items-center">
              <p className="text-2xl font-extrabold mt-5 mb-5   text-center font-bah ">
                PAUSE
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 justify-center">
          <p className="text-center  text-base font-bah  mb-1 text-black">
            {`
We live in a fast moving world where every day change is now a norm. To keep up requires commitment to ourselves - not easy! 

So let's commit to movement and find little ways to slow down everywhere we can :)

`}
          </p>
          {/* <p className="text-center  text-base font-bah  mb-1 text-black">{`Is it a short mind-body connect on the mat? `}</p>
          <p className="text-center  text-base font-bah  mb-1 text-black">{`Or how you maintain your personal health and hygiene? `}</p>
          <p className="text-center  text-base font-bah  mb-1 text-black">{`Does it mean a well balanced lifestyle? `}</p>
          <p className="text-center  text-base font-bah  mb-1 text-black">{`Or all of the above?`}</p>
          <p className="text-center  text-base font-bah  mb-6 text-black">
            {`Allow this page to help you dig deeper into your version of yoga, one post at a time :)`}
          </p> */}
        </div>
        <ul className="grid grid-flow-col   text-center   text-black bg-white rounded-full p-1">
          {blog.map(({ name }, index) => {
            return (
              <li
                className=""
                key={index}
                onClick={() => {
                  buttonClick(index);
                  setFullblog(null);
                  setLoadmore(1);
                }}
              >
                <p
                  className={`${
                    index === buttonIndex
                      ? " text-black font-extrabold border-black border-b-[5px]"
                      : "bg-white border-slate-600 border-b-[2px]"
                  } flex justify-center font-bah   bg-white  text-black py-4 hover:cursor-pointer`}
                >
                  {name}
                </p>
              </li>
            );
          })}
        </ul>
        <div className=" py-5">
          <div className="grid grid-cols-3   text-center   text-black bg-white rounded-full p-1">
            {" "}
            {blog[buttonIndex].blogsdata.map(({ small }, index) => {
              return (
                <p
                  key={index}
                  className="text-sm md:h-[40px] mt-5 mb-5 font-bah "
                >
                  {small}
                </p>
              );
            })}
          </div>

          <div className="grid gap-8  lg:grid-cols-3  ">
            {blog[buttonIndex].blogsdata.map(
              ({ name, imgs, desc, small, title, ser, titles }, index) => {
                return (
                  <div key={index} className="     bg-white rounded">
                    <div>
                      <img
                        src={imgs}
                        className="object-cover w-full h-64 rounded"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <div className="flex mb-3 text-black w-full h-full   hover:text-deep-purple-accent-700">
                        <p className="text-xl font-bah p-2 mb-6 font-bold md:h-2  h-fit">
                          {titles}
                        </p>
                      </div>
                      {/* <p className="text-xs mt-5 font-bah ">{small}</p> */}

                      <p className=" font-bah p-2 mt-2 h-14 text-black">
                        {desc}
                      </p>
                    </div>
                    <div className="w-full flex mt-5 justify-center">
                      <Link href={ser}>
                        <button className="px-6 font-bah py-2 font-medium tracking-wide text-black bg-white border-2 border-black hover:bg-black hover:border-white mb-2     rounded-md  hover:text-white ">
                          Read More
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
        {loadmore && (
          <div className="w-full flex mb-5  justify-center">
            <button
              onClick={() => (loadclick(), setLoadmore(null))}
              className="px-6  font-bah py-2 font-medium tracking-wide text-black bg-white border-2 border-black hover:bg-black hover:border-white mb-2     rounded-md  hover:text-white "
            >
              Load More
            </button>
          </div>
        )}
      </section>

      {
        <div
          className={`${fullblog ? "py-16  md:container md:mx-auto" : "mb-5 "}`}
        >
          <div className="grid gap-8   lg:grid-cols-3 ">
            {fullblog &&
              blog[buttonIndex].blogsdatafull.map(
                ({ name, imgs, desc, small,titles ,ser}, index) => {
                  return (
                    <div key={index} className="     bg-white rounded">
                      <div>
                        <img
                          src={imgs}
                          className="object-cover w-full h-64 rounded"
                          alt=""
                        />
                      </div>
                      <div className="">
                      {/* <p className="text-xs mt-5 font-bah italic">{small}</p> */}
                      <div className="flex mb-3 text-black w-full h-full   hover:text-deep-purple-accent-700">
                        <p className="text-xl font-bah p-2 mb-6 font-bold md:h-2  h-fit">
                          {titles}
                        </p>
                      </div>

                      <p className=" font-bah p-2 mt-2 h-14 text-black">
                        {desc}
                      </p>
                    </div>
                      <div className="w-full flex mt-5 justify-center">
                        <Link href={ser}>
                          <button className="px-6 font-bah py-2 font-medium tracking-wide text-black bg-white border-2 border-black hover:bg-black hover:border-white mb-2     rounded-md  hover:text-white ">
                            Read More
                          </button>
                        </Link>
                      </div>
                    </div>
                  );
                }
              )}
          </div>
        </div>
      }
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
