import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function blogoff9() {
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
            src="/article/articlefood.jpg"
            className="brightness-75"
            objectFit="cover "
            unoptimized={true}
          />
          <div className="w-full    h-full  flex  justify-center">
            <div className="text-white relative    h-full flex flex-col justify-center items-center">
              <p className="text-2xl font-extrabold mt-5   text-center font-bah ">
                YOG OFF THE MAT
              </p>
              {/* <p className="text-center">
              Applying it within our every day routine - at work,at home, all over the world
              </p> */}
              <p className="text-center mt-2 text-2xl">
              Yoga for your sins
              </p>
            </div>
          </div>
        </div>
        <div className="mb-10 r mt-5">
          <p className="mt-1  text-lg  text-center font-bold  font-bah">{`3 Sins of lockdown (lockdowns) that I’m sure we’ve all encountered at some point! 🚫❓`}</p>

          <p className="mt-2 p-4  font-semibold  font-bah">{`🙈Oversleeping 😴`}</p>
          <p className="mt-2 p-4  font-semibold  font-bah">{`🙉Overeating 🤤`}</p>
          <p className="mt-2 p-4  font-semibold font-bah">{`🙊Overthinking 🤔`}</p>

          <p className="mt-1 p-3   font-bah">{`I managed to get the ‘overeating’ under control by switching eating from a plate 🍽 to using bowls🥣 ! So I still eat everything, but in smaller quantities. (Of course refilling your bowl over and over defeats the purpose, be wise 🙃) As for the other two sins - 🧘🏻‍♀️🤸🏽🙏🏻 😇`}</p>
          <p className="p-3 mb-10 font-bah">{``}</p>
        </div>
      </section>
      <div className="w-screen  flex justify-between fixed   top-[50%]  h-fit">
      <div className="hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-start lg:justify-center items-center ">
          <Link href="/blogs/blog8on">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/left-arrow.png" alt="" />
            </div>
          </Link>
        </div>
        <div className=" hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-end lg:justify-center  items-center">
          <Link href="/blogs/blogoff10">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/right-arrow.png" alt="" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
