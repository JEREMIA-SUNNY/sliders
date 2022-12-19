import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function blogoff13() {
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
            src="/article/headachehome.JPG"
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
                Headache home remedies !
              </p>
            </div>
          </div>
        </div>
        <div className="mb-5 r mt-5">
          <p className="mt-1  text-lg  text-center = font-bah">{`As someone who is prone to migraines every now and then, I totally understand how frustrating that pain can be. 😩 The moment I sense a throbbing pain, I immediately jump onto a mild pain killer. While that takes a bit to get working, I do a few self medicating tricks on myself. These would be very helpful to anyone who experiences this, especially those that are against pill popping!`}</p>

          <p className="mt-2 p-4  font-semibold  font-bah">{`1️⃣ A gentle massage of course helps, for those that don't know, a massage on the back of the neck also helps soothe a headache, especially when the pain is stress prone. `}</p>
          <p className="mt-2 p-4  font-semibold  font-bah">{`2️⃣Drinking a good amount of lukewarm water and maybe a light snack (avoid heavy calories food items) also helps, especially if the pain is due to hunger or dehydration.`}</p>
          <p className="mt-2 p-4  font-semibold font-bah">{`3️⃣There are certain yoga asanas and breathing techniques that help tremendously, look for this in "Yog on the mat" 🙏`}</p>
          <p className="mt-2 p-4  font-semibold  font-bah">{`4️⃣ Try sitting or lying down in a comfortable position and do some diaphragmatic breathing, generally known as deep breathing.  Try to restrict breathing only with the nose. `}</p>
          <p className="mt-2 p-4  font-semibold  font-bah">{`5️⃣ Putting a cold towel on the head and neck region can help reduce the ache. Some people try a cold water bath but that can sometimes aggravate the pain too. `}</p>
          <p className="mt-2 p-4  font-semibold  font-bah">{`6️⃣ Your choice of tea without sugar can help with a headache. I recommend  - hot water with a dash of lime, honey and turmeric. This can help soothe pain. `}</p>
          <p className="mt-2 p-4  font-semibold  font-bah">{`7️⃣There are select essential oils that help with this too! Look for this in "Yog and self care)`}</p>
          <p className="mt-2 p-4  font-semibold  font-bah">{`8️⃣ Always, speak with your doctor regarding any deficiencies or allergies that might trigger this pain too. `}</p>
        </div>
      </section>
      <div className="w-screen  flex justify-between fixed   top-[50%]  h-fit">
        <div className="hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-start lg:justify-center items-center ">
          <Link href="/blogs/blogoff12">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/left-arrow.png" alt="" />
            </div>
          </Link>
        </div>
        <div className=" hover:text-white   cursor-pointer  text-black w-[100px] rounded-l-full   flex  justify-end lg:justify-center  items-center">
          <Link href="/blogs/blogself14">
            <div className="flex md:w-[40px] w-[50px] md:bg-   animate-bounce">
              <img src="/indexpage/right-arrow.png" alt="" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
