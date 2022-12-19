import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function blog1on() {
  return (
    <>
      <section className="md:container h-fit  mx-auto">
        <div className="w-full h-80 object-cover relative ">
          <Image
            layout="fill"
            alt="ser"
            src="/article/Article1.jpg"
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
              Own your breath!
              </p>
            </div>
          </div>
        </div>
        <div className="mb-5 r mt-5">
          <p className="mt-1 text-center font-bold  font-bah">{`Remember, you control your breath, don’t let your breath control you! 🧘🏻‍♀️- 🤷🏽‍♀️ - ⬇️`}</p>

          <p className="mt-1 p-3   font-bah">{`There are so so many changes happening around us (and within us) that affect our way of breathing. We unknowingly let the change take over the way our body functions without realising the impact it has on our health- now and in the future. Our breath, energy level, appetite - all take a hit leading to all kinds of stress 🤯`}</p>
          <p className="p-3 font-bah">{`Take some time out to bring your body back under your control - starting with your breathing, and everything else will follow🧎🏻‍♀️`}</p>
          <p className="mt-2 p-4   font-bah">{`There are different ways of breathing, exercises to control breath work, yogic breath etc. but first - focus on just being aware of your breath before you get to learning pranayama techniques. Start with choosing an asana to sit in, here are a few ways of choosing one`}</p>
          <p className="mt-2 p-4  font-semibold  font-bah">{`1️⃣Pick something simple to bring you at ease (like I have in the picture - simple sweet balasana)`}</p>
          <p className="mt-2 p-4  font-semibold  font-bah">{`2️⃣Choose a pose with a little discomfort so you focus on finding comfort in it.`}</p>
          <p className="mt-2 p-4  font-semibold font-bah">{`3️⃣How about a challenging asana to help you realise where you stand - mind body and breath.`}</p>
          <p className="mt-2 p-4  font-semibold  font-bah">{`4️⃣Supine/prone shavasana`}</p>
          <p className="p-4 ">{`Whatever you decide, take your time and get into it and stay there for a good few minutes with sincere attention towards your breathing. Your intention here is - to stay grounded, steady and bring ease in your breath! If you get distracted, pause, and bring your focus back to your breathing.`}</p>
          <p className=" p-4  font-bah">{`Feel free to choose from some of my favourites :)
IG - @yogandaditi 
`}</p>
       </div>
      </section>
      <div className="w-screen  flex justify-between fixed   top-[60%]  h-fit">
        <div className="   cursor-default w-[100px] rounded-r-full flex-row items-center ">
          <Link href="">
            <p className=" text-center"></p>
          </Link>
        </div>
        <div className=" hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-end lg:justify-center  items-center">
          <Link href="/blogs/blog2on">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/right-arrow.png" alt="" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
