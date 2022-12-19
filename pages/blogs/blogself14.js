import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function blogself14() {
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
            src="/article/Article7.jpg"
            className="brightness-75"
            objectFit="cover "
            unoptimized={true}
          />
          <div className="w-full    h-full  flex  justify-center">
            <div className="text-white relative    h-full flex flex-col justify-center items-center">
              <p className="text-2xl font-extrabold mt-5   text-center font-bah ">
                YOG AND SELF-CARE
              </p>
              {/* <p className="text-center">
              Tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!

              </p> */}
              <p className="text-center mt-2 text-2xl">
             
              Break from yoga

              </p>
            </div>
          </div>
        </div>
        <div className="mb-5 r mt-5">
          

          <p className="mt-1 text-lg text-center font-bold font-bah ">{`Break from my mat = break out on face! 🤦🏻‍♀️`}</p>
          <p className="p-2 font-bah">{`What happens when I take a break for 4 days and eat and drink with no way of removing toxins.`}</p>
          <p className=" p-2   font-bah">{`Need that yoga glow back!`}</p>
          <p className=" p-2  font-semibold  font-bah">{`Best skin care routine is an hour of yoga - every single day!`}</p>
          <p className=" p-2 font-semibold  font-bah">{`Replace your makeup with a mat ;) (and maybe a handful of essential hygiene products)`}</p>
        </div>
      </section>
      <div className="w-screen  flex justify-between fixed   top-[50%]  h-fit">
      <div className="hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-start lg:justify-center items-center ">
          <Link href="/blogs/blogoff13">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/left-arrow.png" alt="" />
            </div>
          </Link>
        </div>
        <div className=" hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-end lg:justify-center  items-center">
          <Link href="/blogs/blogself15">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/right-arrow.png" alt="" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
