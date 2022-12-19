import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function blog5on() {
  return (
    <>
      {/* <div className="w-full h-80 relative bg-coustom1 ">
        <Image
          layout="fill"
          alt="ser"
          src="/slider/1.jpg"
          objectFit="cover "
        />
        <div className="w-full    h-full  flex  justify-center">
          <div className="text-white relative    h-full flex flex-col justify-center items-center">
          <p className="text-2xl font-extrabold mt-5 mb-5  text-center font-bah ">YOG ON THE MAT</p>
    <p className="text-center">How to get started with Yoga and grow with your practice</p>
          </div>
        </div>
      </div> */}
      <section className="md:container h-fit  mx-auto">
        <div className="w-full h-80 relative ">
          <Image
            layout="fill"
            alt="ser"
            src="/article/anxiety.jpg"
            className="brightness-75"
            objectFit="cover "
            unoptimized={true}
          />
          <div className="w-full    h-full  flex  justify-center">
            <div className="text-white relative    h-full flex flex-col justify-center items-center">
              <p className="text-2xl font-extrabold mt-5   text-center font-bah ">
                YOG ON THE MAT
              </p>
              {/* <p className="text-center">
                How to get started with Yoga and grow with your practice
              </p> */}
              <p className="text-center mt-2 text-2xl">
             
              Anxiety and Yoga
              </p>

            </div>
          </div>
        </div>
        <div className="mb-5 r mt-5">
        <p className="p-3 font-bah">{`What is anxiety? The simplest way to explain this (without any medical terms) - it is trapped energy.`}</p>
          <p className=" p-4   font-bah">{`It's important to understand - energy is not a bad thing, it in fact is good. We constantly need more energy to keep up with a hundred different things happening throughout the day.`}</p>
          <p className=" p-3    font-bah">{`However, when this energy is built up because of the mind going into overdrive, then it is trapped and the body has no idea what to do with it! This definitely takes a toll on your nervous system and then can lead to a number of health issues that only get worse in time.`}</p>
          <p className=" p-3    font-bah">{`One quick simple way to help you manage this on your own is to work on your breathing. The one thing you can control is your breath, so bring your focus to your breathing and time your inhale and exhale. It doesn't matter what the count is, just set a goal to slow it down.`}</p>
          <p className="mt-2 p-4  font-semibold  font-bah">{`1️⃣ Sit in a comfortable position, or lie down, whatever works for you! Rest your dominant palm on your chest and bring your attention to your breathing.`}</p>
          <p className="mt-2 p-4  font-semibold  font-bah">{`2️⃣ Start with counting in your mind, to gauge the pace of your inhale and exhale.`}</p>
          <p className="mt-2 p-4  font-semibold font-bah">{`3️⃣ With every 3 breaths, increase the count of your inhale and exhale by 2.`}</p>
          <p className="mt-2 p-4  font-semibold  font-bah">{`4️⃣ Remember that your exhale should be longer than your inhale.`}</p>
          <p className="mt-2 p-4  font-semibold  font-bah">{`5️⃣  Your inhales and exhales should be steady and easy. No extra pressure and no loud sounds. The softer the better.`}</p>
          <p className="mt-2 p-4  font-semibold  font-bah">{`Make this a practice for whenever you feel anxious, uneasy, restless or any strong emotion that is overpowering you!`}</p>
        </div>
      </section>
      <div className="w-screen  flex justify-between fixed   top-[50%]  h-fit">
      <div className="hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-start lg:justify-center items-center ">
          <Link href="/blogs/blog4on">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/left-arrow.png" alt="" />
            </div>
          </Link>
        </div>
        <div className=" hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-end lg:justify-center  items-center">
          <Link href="/blogs/blog7on">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/right-arrow.png" alt="" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
