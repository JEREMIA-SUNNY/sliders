import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function blogoff10() {
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
            src="/article/Article5.jpg"
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
              Your own mini treat
              </p>
            </div>
          </div>
        </div>
        <div className="mb-5 r mt-5">
          <p className="mt-1  text-lg  text-center font-bold font-bah">{`Is today looking bleak😑? overwhelming😲 ? crazy🤯? Quick fix - 🤫 ⤵️`}</p>

          <p className="mt-1 p-3   font-bah">{`Find little things to change your perspective in ‘the now’ - a book, a show, an activity (sometimes a quick outdoor walk works for me), a person, an asana (most effective way to turn a frown upside down 🤸🏽), a treat or sometimes even a hot shower does the trick!`}</p>
          <p className="p-3 font-bah">{`Just about anything to help you look at things differently! I read “the bat hanging upside down laughs at the topsy turvy world”, there must be something about that view 🤔 🦇`}</p>

          <p className="mt-2 p-4  font-semibold  font-bah">{`And remember -Don’t worry about the Past ~ *Work on the Present* ~ Future will sort itself out !`}</p>
        </div>
      </section>
      <div className="w-screen  flex justify-between fixed   top-[50%]  h-fit">
      <div className="hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-start lg:justify-center items-center ">
          <Link href="/blogs/blogoff9">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/left-arrow.png" alt="" />
            </div>
          </Link>
        </div>
        <div className=" hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-end lg:justify-center  items-center">
          <Link href="/blogs/blogoff11">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/right-arrow.png" alt="" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
