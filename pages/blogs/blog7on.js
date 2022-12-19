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
            src="/article/hiit.jpg"
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
              <p className="text-center mt-2 text-2xl">Yoga and HIIT?</p>
            </div>
          </div>
        </div>
        <div className="mb-5 r mt-5">
          <p className="mt-1 text-lg text-center font-bold font-bah">{`Let me start by saying - yoga is not stretching✋`}</p>

          <p className="p-3 font-bah">{`Yoga can be as slow as you'd like it and as fast as you can take it. But no matter the intensity, the breathing should stay consistent.`}</p>
          <p className=" p-3   font-bah">{`Through my own journey, I've learnt and practiced to do different styles of yoga every single day. Twice a week - I pick up the pace and I sweat more than any other workout! I do a combination of power yoga and vinyasa. So there are asanas, variations of surya namaskars and transitions from some fun stretchy poses to some balancing ones!
`}</p>
          <p className="p-3 font-bah">{`50 minutes of this followed by a good ten minute cool down to bring my heart rate down - that's my pre and post weekend go-to workout!`}</p>
          <p className=" p-3   font-bah">{`Zero breaks in between, but I don't stop anyone from taking breaks if your body is asking for it. Just as long as it is a conscious break😅
`}</p>
          <p className="p-3 font-bah">{`So yes, Yoga can be in HIIT form, but your breathing should not. Listen to your body, don't just jump into a power yoga format unless you have trained for it. If you move faster than you can, then you will be prone to knee or lower back trouble and no workout is worth that damage!`}</p>

          <p className=" p-4  font-semibold  font-bah">{`For the beginners - start by bringing in slow movement in your yoga practice and then have your teacher help you progress little by little. 
`}</p>
         
        </div>
      </section>
      <div className="w-screen  flex justify-between fixed   top-[50%]  h-fit">
        <div className="hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-start lg:justify-center items-center ">
          <Link href="/blogs/blog6on">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/left-arrow.png" alt="" />
            </div>
          </Link>
        </div>
        <div className=" hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-end lg:justify-center  items-center">
          <Link href="/blogs/blog8on">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/right-arrow.png" alt="" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
