import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Library() {
  const [buttonIndex, setButtonIndex] = useState(0);
  const buttonClick = (x) => {
    setButtonIndex(x);
  };
  const discover = [
    {
      name: "VINYASA",
      img: "/discover/discover1.jpg",
      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          name: "VINYASA ",
          small:
            "Taking the 'on the mat' practice and applying it within our every day routine - at work, at home, all over the world",
          desc: "Sins of lockdown (lockdowns) that I'm sure we've all encountered at some point! 🚫❓",
          imgs: "/discover/discover1.jpg",
        },
        // {
        //   name: " YOG OFF THE MAT",
        //   small:
        //     "Taking the 'on the mat' practice and applying it within our every day routine - at work, at home, all over the world",
        //   desc: "Is today looking bleak😑? overwhelming😲 ? crazy🤯? Quick fix - 🤫 ⤵️",
        //   imgs: "/indexpage/disc3.jpg",
        // },
        // {
        //   name: " YOG OFF THE MAT",
        //   small:
        //     "Taking the 'on the mat' practice and applying it within our every day routine - at work, at home, all over the world",
        //   desc: "Stay true to your roots👇🏼",
        //   imgs: "/indexpage/disc2.jpg",
        // },
      ],
    },
    {
      name: "AERIAL",
      img: "/discover/discover2.jpg",
      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          name: "AERIAL",
          small:
            "A few tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
          desc: "Break from yoga. Break from my mat = break out on face! 🤦🏻‍♀️",
          imgs: "/discover/discover2.png",
        },
        // {
        //   name: "YOG AND SELF-CARE",
        //   small:
        //     "A few tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
        //   desc: "Detox starts within.🥒🥬",
        //   imgs: "/indexpage/disc3.jpg",
        // },
        // {
        //   name: "YOG AND SELF-CARE",
        //   small:
        //     "A few tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
        //   desc: "Clean - inside and out 🙆🏻‍♀️",
        //   imgs: "/indexpage/disc2.jpg",
        // },
      ],
    },
  ];
  const blog = [
    {
      name: "YOG AND ADITI",
      blogsdata: [
        // {
        //   name: "YOG ON THE MAT",
        //   small: "How to get started with Yoga and grow with your practice",
        //   desc: "Remember, you control your breath, don't let your breath control you! 🧘🏻‍♀️- 🤷🏽‍♀️ - ⬇️",
        //   imgs: "/indexpage/disc.jpg",
        // },
        // {
        //   name: "YOG ON THE MAT",
        //   small: "How to get started with Yoga and grow with your practice",
        //   desc: "Don't ever look back, unless it's from a different point of view 🙃 ⬇️",
        //   imgs: "/indexpage/disc3.jpg",
        // },
        // {
        //   name: "YOG ON THE MAT",
        //   small: "How to get started with Yoga and grow with your practice",
        //   desc: "Hips don't lie 🙇🏻‍♀️👇🏼",
        //   imgs: "/indexpage/disc2.jpg",
        // },
      ],
    },
    {
      name: "VINYASA",
      blogsdata: [
        // {
        //   name: " YOG OFF THE MAT",
        //   small:
        //     "Taking the 'on the mat' practice and applying it within our every day routine - at work, at home, all over the world",
        //   desc: "Sins of lockdown (lockdowns) that I'm sure we've all encountered at some point! 🚫❓",
        //   imgs: "/indexpage/disc.jpg",
        // },
        // {
        //   name: " YOG OFF THE MAT",
        //   small:
        //     "Taking the 'on the mat' practice and applying it within our every day routine - at work, at home, all over the world",
        //   desc: "Is today looking bleak😑? overwhelming😲 ? crazy🤯? Quick fix - 🤫 ⤵️",
        //   imgs: "/indexpage/disc3.jpg",
        // },
        // {
        //   name: " YOG OFF THE MAT",
        //   small:
        //     "Taking the 'on the mat' practice and applying it within our every day routine - at work, at home, all over the world",
        //   desc: "Stay true to your roots👇🏼",
        //   imgs: "/indexpage/disc2.jpg",
        // },
      ],
    },
    {
      name: "AERIAL",
      blogsdata: [
        // {
        //   name: "YOG AND SELF-CARE",
        //   small:
        //     "A few tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
        //   desc: "Break from yoga. Break from my mat = break out on face! 🤦🏻‍♀️",
        //   imgs: "/indexpage/disc.jpg",
        // },
        // {
        //   name: "YOG AND SELF-CARE",
        //   small:
        //     "A few tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
        //   desc: "Detox starts within.🥒🥬",
        //   imgs: "/indexpage/disc3.jpg",
        // },
        // {
        //   name: "YOG AND SELF-CARE",
        //   small:
        //     "A few tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
        //   desc: "Clean - inside and out 🙆🏻‍♀️",
        //   imgs: "/indexpage/disc2.jpg",
        // },
      ],
    },
  ];
  return (
    <>
      <section className=" md:container md:mx-auto lg:h-[72vh]">
        <div className=" w-full mb-5 h-72 relative ">
          <Image
            layout="fill"
            alt="ser"
            src="/slider/car1.png"
            objectFit="cover "
            className="brightness-75"
            unoptimized={true}
          />
          <div className="w-full    h-full  flex  justify-center">
            <div className="text-white relative    h-full flex flex-col justify-center items-center">
              <p className="text-2xl  font-extrabold mt-5 mb-5   text-center font-bah ">
                DISCOVER
              </p>
            </div>
          </div>
        </div>
        <p className="p-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sit,
          facilis officia tempora eum voluptatibus necessitatibus consequuntur
          qui sequi aut obcaecati quos atque ea perferendis pariatur laudantium
          quasi unde. Blanditiis iure eveniet inventore. Nisi hic incidunt
          similique alias quod, dolor voluptatem deleniti delectus, mollitia
          expedita quidem est distinctio enim consectetur rerum itaque?
          Voluptas, aut fuga corrupti tempora ratione aliquam beatae?
        </p>
      </section>
      {/* <section className="text-white mx-auto md:container ">
        <div className="w-full h-72 relative ">
          <Image
            layout="fill"
            alt="ser"
            src="/slider/car1.png"
            objectFit="cover "
            className="brightness-75"
          />
          <div className="w-full    h-full  flex  justify-center">
            <div className="text-white relative    h-full flex flex-col justify-center items-center">
              <p className="text-2xl font-extrabold mt-5 mb-5  text-center font-bah ">
                DISCOVER
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center w-3/4 text-base font-bah p-10 mb-6 text-black">
            {`Whether you’re a complete beginner or you want to step up your routine, get the full studio experience at home with thousands of classes for body, mind, and spirit.`}
          </p>
        </div>
        <ul className="grid grid-flow-col gap-1 mt-5 text-center  text-black bg-white rounded-full p-1">
          {discover.map(({ name }, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  buttonClick(index);
                }}
              >
                <p
                  className={`${
                    index === buttonIndex
                      ? " text-black font-bold  border-black border-b-4"
                      : "bg-white"
                  } flex justify-center font-bah  bg-white  text-black py-4 hover:cursor-pointer`}
                >
                  {name}
                </p>
              </li>
            );
          })}
        </ul>

        
        <div className=" py-8">
        <div className="mb-5   mt-10 md:mx-auto">
          
            {discover[buttonIndex].blogsdata.map(({ name, imgs, desc, small }, index) => {
              return (
                <div className="flex md:flex-row flex-col  justify-evenly md:gap-24 ">
            <div className="w-fit  h-fit lg:h-fit ">
              <img
                layout="cover"
                className=" h-full w-full object-cover"
                alt=""
                src={imgs}
              />
            </div>
            <div className="w-auto ">
              <p className="text-2xl text-black mb-5 font-semibold  text-left ">
              {name}
              </p>{" "}
              <p className="prose font-bah ">
               {` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, perferendis ab! Natus nobis, modi facere quidem
                inventore repudiandae obcaecati consequuntur laborum eaque
                dolores pariatur corrupti possimus ut corporis enim tenetur!`}
              </p>
              <p className="prose font-bah  mt-2">{`
                rem fugit sint iste quo maiores laborum excepturi voluptates
                incidunt molestiae earum molestias ut hic praesentium autem
                illum. Repellendus consequatur possimus natus culpa unde iure
                blanditiis obcaecati cumque mollitia vero eaque itaque animi
                distinctio, adipisci eius officia! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas soluta accusantium
                perferendis modi, quaerat eius incidunt alias illo suscipit.
                Dolor, praesentium. Necessitatibus, ab aut provident, tempora
                fugiat iste ipsa nemo, ex praesentium sequi vitae quaerat illum
                ipsam voluptatum. Aspernatur facere nihil adipisci quasi libero
                doloribus atque rem, corrupti blanditiis, tenetur corporis sunt?
                Eum ullam in voluptatibus adipisci ipsam vero esse!`}
              </p>
             
            </div>
          </div>
       
              );
            })}
          </div>
        </div>
       
      </section> */}
    </>
  );
}
