import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function blog3() {
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
            src="/article/Article3.jpg"
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
             
              Kapotasana magic
              </p>

            </div>
          </div>
        </div>
        <div className="mb-5 r mt-5">
          <p className="mt-1 text-lg text-center font-bold font-bah">{`Hips don’t lie 🙇🏻‍♀️👇🏼`}</p>

          <p className="p-3 font-bah">{`Best way to release stress and anxiety - kapotasana. For those going through a tough time this year - pick any variation of the pigeon pose and try and find comfort in it. Your focus needs to be on releasing tension in the hips. We don’t realise how much power the hips hold!`}</p>
          <p className=" p-3   font-bah">{`Start from downward facing dog to flow into the asana(there are many other ways to enter this pose, but this one is the simplest!). Once you're stable and in position, focus on settling into it. The moment you feel that muscle opening and being stretched - try and ease into it, slowly and with your breath 🧘🏻‍♀️(remember you truly enter into your asana the moment you feel the need to exit)`}</p>
          <p className=" p-4  font-semibold  font-bah">{`Feel free to do it with some assistance to go deeper into the stretch.   `}</p>
          <p className=" p-3  font-semibold  font-bah">{`This is also a great way to end a leg/glute workout🦵🏼💪🏼👍🏼`}</p>
        </div>
      </section>
      <div className="w-screen  flex justify-between fixed   top-[50%]  h-fit">
      <div className="hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-start lg:justify-center items-center ">
          <Link href="/blogs/blog2on">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/left-arrow.png" alt="" />
            </div>
          </Link>
        </div>
        <div className=" hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-end lg:justify-center  items-center">
          <Link href="/blogs/blog4on">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/right-arrow.png" alt="" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
