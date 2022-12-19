import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function blogself16() {
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
      <section className="md:container h-fit  mb-48 mx-auto">
        <div className="w-full h-80 relative ">
          <Image
            layout="fill"
            alt="ser"
            src="/article/Article9.jpg"
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
              Clean - inside and out
              </p>
            </div>
          </div>
        </div>
        <div className="mb-5 r mt-5">
          <p className="mt-1 text-center font-bold text-lg  font-bah">{`Be sure to disinfect your mat regularly, stay clean - stay safe!`}</p>

          
          <p className="p-2 font-bah">{`There is no excuse here. If you're a yogi or a potential yogi - your mat hygiene is crucial to your practice. Your mat is your safe space and comes in contact with your skin. So it is important that you wipe it before your practice, and ensure you disinfect (especially post a sweaty practice) it right after. The very essence of yoga is discipline, and your personal hygiene should be step 1. of your yoga goals ! `}</p>
          <p className=" p-2 font-semibold   font-bah">{`Make sure you disinfect using good products, one that is strong enough to clean up but yet not so strong that it stains your mat or more importantly your skin! Watch out for irritants in the label! `}</p>
        </div>
      </section>
      <div className="w-screen  flex justify-between fixed   top-[50%]  h-fit">
      <div className="hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-start lg:justify-center items-center ">
          <Link href="/blogs/blogself15">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/left-arrow.png" alt="" />
            </div>
          </Link>
        </div>
        
      </div>
    </>
  );
}
