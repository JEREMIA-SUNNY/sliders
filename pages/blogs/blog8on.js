import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function blog7on() {
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
            src="/article/excuses.jpg"
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
              <p className="text-center mt-2 text-2xl">Excuses</p>
            </div>
          </div>
        </div>
        <div className="mb-5 r mt-5">
          <p className="p-3 font-bah">{`Every excuse you would use to avoid a morning workout is a reason to do it!. Everytime you find yourself in this position, change your mindset! Instead of justifying why you're skipping a workout, find reasons to do it instead! And trust you you'll have far more reasons to do a workout than not! `}</p>
          <p className=" p-3   font-bah">{`Excuses in my experience range from - simple headaches all the way up to a hangover, and trust me - there is still room for a workout. Just change the workout to fit your excuse, but be sure to do it ! `}</p>
          <p className=" p-4   font-bah">{`As a Yoga practitioner - there is no excuse in the world to skip yoga. It can be done at every level with any kind of injury and it will only help you get better and stronger! `}</p>
          <p className=" p-3  font-semibold  font-bah">{`Once it's in your routine, you can find ways to look forward to your workout and stop running away from it! 🙏
`}</p>
        </div>
      </section>
      <div className="w-screen  flex justify-between fixed   top-[50%]  h-fit">
        <div className="hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-start lg:justify-center items-center ">
          <Link href="/blogs/blog7on">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/left-arrow.png" alt="" />
            </div>
          </Link>
        </div>
        <div className=" hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-end lg:justify-center  items-center">
          <Link href="/blogs/blogoff9">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/right-arrow.png" alt="" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
