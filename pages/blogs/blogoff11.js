import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function blog6() {
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
            src="/article/Article6.jpg"
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
                Applying it within our every day routine - at work,at home, all
                over the world
              </p> */}
              <p className="text-center mt-2 text-2xl">Foundation first!</p>
            </div>
          </div>
        </div>
        <div className="mb-5 r mt-5">
          <p className="mt-1 text-lg text-center font-bold font-bah">{`Stay true to your roots👇🏼`}</p>

         
          <p className="mt-1 p-3   font-bah">{`🌳 Let’s not forget, It is what’s underneath the ground that contributes to green leaves, pretty flowers and fresh fruit 🌳`}</p>

          <p className="p-3 font-bah">{`We are built the same way, our roots give rise to who we are, how we grow and choices we make. While we keep changing (🍁 just like leaves wither and fall, making way for new leaves 🍁), let us always ensure our roots get stronger and not weaker 🙂`}</p>
          <p className="mt-2 p-4   font-bah">{`Through yoga, we learn the importance of good foundation and being grounded by exercising control of our mind and our body. Bring this yoga practice into your everyday routine to be able to exercise the same control in your journey of life! 🙌🏼`}</p>
          <p className="mt-2 p-4  font-semibold  font-bah">{`And remember (as I always say), it is important to strengthen this control through movement (🍃given the nature of our dynamic lifestyle 🍃). While your roots are similar to that of a tree, you are not actually a tree - so ‘stay moving’ ;) 🧘🏻‍♀️`}</p>
        </div>
      </section>
      <div className="w-screen  flex justify-between fixed   top-[50%]  h-fit">
        <div className="hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-start lg:justify-center items-center ">
          <Link href="/blogs/blogoff10">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/left-arrow.png" alt="" />
            </div>
          </Link>
        </div>
        <div className=" hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-end lg:justify-center  items-center">
          <Link href="/blogs/blogoff12">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/right-arrow.png" alt="" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
