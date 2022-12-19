import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function blogoff12() {
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
            src="/article/stand.jpg"
            className="brightness-75"
            objectFit="cover "
            unoptimized={true}
          />
          <div className="w-full    h-full  flex  justify-center">
            <div className="text-white relative    h-full flex flex-col justify-center items-center">
              <p className="text-2xl font-extrabold mt-5  text-center font-bah ">
                YOG OFF THE MAT
              </p>
              {/* <p className="text-center">
              Applying it within our every day routine - at work,at home, all over the world
              </p> */}
              <p className="text-center mt-2 text-2xl">
              Stand up for yourself!
              </p>
            </div>
          </div>
        </div>
        <div className="mb-5 r mt-5">
          <p className="mt-1  text-lg  text-center font-bold font-bah">{`Have you ever spent some time making note of how much time you spend standing?👫 If that's a big no, start today! (Some of us lazy people have our smart watches/phones doing this work for us)
`}</p>

          <p className="mt-1 p-3   font-bah">{`You should have at least 8 - 10 hours a day spent standing (if not moving). Of Course if there are reasons your physician advises you against this, then don't change your pattern. But if all is good in the mind and body, then increase your standing hours. 
`}</p>
          <p className="p-3 font-bah">{`It is the easiest way to boost your metabolism, which means weight loss becomes easier, blood circulation is better and therefore breathing is better! `}</p>

          <p className="mt-2 p-4    font-bah">{`It also helps you improve your posture. It is important to have a good standing posture, but we'll come to that on the yoga part of this page :)`}</p>
          <p className="p-3 font-bah">{`This is especially important for those having daily desk jobs involving staring into a screen!  `}</p>
          <p className="p-3 font-bah">{`And remember - standing is step 1 to moving. So if you've got this covered, then you're halfway there! 🙌
🏃`}</p>
          
        
        </div>
      </section>
      <div className="w-screen  flex justify-between fixed   top-[50%]  h-fit">
      <div className="hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-start lg:justify-center items-center ">
          <Link href="/blogs/blogoff11">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/left-arrow.png" alt="" />
            </div>
          </Link>
        </div>
        <div className=" hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-end lg:justify-center  items-center">
          <Link href="/blogs/blogoff13">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/right-arrow.png" alt="" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
