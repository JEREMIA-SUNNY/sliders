import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function blog4on() {
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
            src="/article/savasana.jpg"
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
             
              The Art of Savasana
              </p>

            </div>
          </div>
        </div>
        <div className="mb-5 r mt-5">
         

          <p className="p-3 font-bah">{`If you've done even one yoga class, then you've definitely heard of this asana. Most think this is the easiest asana to do, but it's quite the opposite - this is most definitely the hardest asana to get right!)`}</p>
          <p className=" p-4   font-bah">{`The goal of Savasana is to relax your body with ease in your breath! This is the easy part, the hard part is to make sure that your mind is just as relaxed too. Which means, the mind has to be as still as your body. No thinking of what you have to do next, no wandering into a dreamy state, and definitely no sleeping.`}</p>
          <p className=" p-3    font-bah">{`To achieve this meditative state while lying down can take years of practice, but the benefits you will see from day-one!`}</p>
          <p className=" p-3    font-bah">{`To get started -`}</p>
          <p className="mt-2 p-4  font-semibold  font-bah">{`1️⃣Lie down on your mat, relaxed spine, palms opened out on either side of your waist. Give your legs a little lift by placing a pillow or a bolster underneath your knees. This will also help you flatten your lower back (which is a very good thing!)`}</p>
          <p className="mt-2 p-4  font-semibold  font-bah">{`2️⃣ Do one full scan of your full body starting with your feet all the way up to your head to make sure you're completely loosened out on the mat.`}</p>
          <p className="mt-2 p-4  font-semibold font-bah">{`3️⃣ Bring your focus to your breath and focus on the pace of your breath so that your mind is involved only in your savasana. Breathe in with your nose and out with your mouth.`}</p>
          <p className="mt-2 p-4  font-semibold  font-bah">{`4️⃣ Aim for 10 deep breaths, and make sure your exhales are longer than your inhales.`}</p>
          <p className="mt-2 p-4  font-semibold  font-bah">{`          Anywhere between 3 - 10 mins is a good savasana to reboot your system!`}</p>


        </div>
      </section>
      <div className="w-screen  flex justify-between fixed   top-[50%]  h-fit">
      <div className="hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-start lg:justify-center items-center ">
          <Link href="/blogs/blog3on">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/left-arrow.png" alt="" />
            </div>
          </Link>
        </div>
        <div className=" hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-end lg:justify-center  items-center">
          <Link href="/blogs/blog6on">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/right-arrow.png" alt="" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
