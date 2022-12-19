import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function blog2() {
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
        <div className="w-full h-96 relative ">
          <Image
            layout="fill"
            alt="ser"
            className="brightness-75"
            src="/article/Article2.jpg"
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
              Asana for the hips!
              </p>
            </div>
          </div>
        </div>
        <div className="mb-5 p-5 mt-5">
          <p className="mt-1  text-lg text-center font-bold  font-bah">{`Don’t ever look back, unless it’s from a different point of view 🙃 ⬇️`}</p>

          <p className="p-3 font-bah">{`One of my favourite forward bending asana - prasarita padottanasana`}</p>
          <p className=" p-3   font-bah">{`A great way to stretch and strengthen the ankles, calves, hamstrings, upper arms and back! This asana is pretty effective in releasing tension in both - mind and body!`}</p>

          <p className="mt-1  p-4  font-semibold  font-bah  ">{`  🆗 Don’t forget - go slow and stop where you feel discomfort, it’s totally ok to come out of it and slowly try again.`}</p>
        </div>
      </section>
      <div className="w-screen  flex justify-between fixed   top-[50%]  h-fit">
      <div className="hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-start lg:justify-center items-center ">
          <Link href="/blogs/blog1on">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/left-arrow.png" alt="" />
            </div>
          </Link>
        </div>
        <div className=" hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-end lg:justify-center  items-center">
          <Link href="/blogs/blog3on">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/right-arrow.png" alt="" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
