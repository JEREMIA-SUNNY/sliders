import React from "react";
import Image from "next/image";
import Link from "next/link";
function Projectscard() {
  return (
    <>
      <section className="text-black bg-gray-400 ">
        <div className="container px-5 pt-10 pb-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-3xl   title-font text-black   mb-4">
            Services Offered By TRUE&FAIR 
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row    gap-6">
            <div className="w-full  flex flex-col bg-white  justify-around h-[550px]   shadow-xl">
              <div className=" rounded-lg ">
                <div className="h-48 w-full relative cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/proj/1.png"
                    className="absolute inset-0 object-contain"
                    unoptimized={true}
                  />
                </div>

                <div>
                  <p className="text-2xl text-center mt-4">Title</p>
                  <p className="text-black text-center mt-4 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem adipisci beatae delectus quo, deleniti atque,
                    corrupti aliquid nam quis magni ipsum id facilis quia
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <Link href={""}>
                  <p className="text-black  p-2 font-bold ease-in duration-300 rounded-md  hover:bg-orange1   flex justify-center items-center text-left hover:cursor-pointer">
                    Read More
                  </p>
                </Link>
              </div>
            </div>

            <div className="w-full  flex flex-col bg-white  justify-around h-[550px]   shadow-xl">
              <div className=" rounded-lg ">
                <div className="h-48 w-full relative cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/proj/2.png"
                    className="absolute inset-0 object-contain"
                    unoptimized={true}
                  />
                </div>

                <div>
                  <p className="text-2xl text-center mt-4">Title</p>
                  <p className="text-black text-center mt-4 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem adipisci beatae delectus quo, deleniti atque,
                    corrupti aliquid nam quis magni ipsum id facilis quia
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <Link href={""}>
                  <p className="text-black  p-2 font-bold ease-in duration-300 rounded-md  hover:bg-orange1   flex justify-center items-center text-left hover:cursor-pointer">
                    Read More
                  </p>
                </Link>
              </div>
            </div>

            <div className="w-full  flex flex-col bg-white  justify-around h-[550px]   shadow-xl ">
              <div className=" rounded-lg ">
                <div className="h-48 w-full relative cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/proj/3.png"
                    className="absolute inset-0 object-contain"
                    unoptimized={true}
                  />
                </div>

                <div>
                  <p className="text-2xl text-center mt-4">Title</p>
                  <p className="text-black text-center mt-4 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem adipisci beatae delectus quo, deleniti atque,
                    corrupti aliquid nam quis magni ipsum id facilis quia
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <Link href={""}>
                  <p className="text-black  p-2 font-bold ease-in duration-300 rounded-md  hover:bg-orange1   flex justify-center items-center text-left hover:cursor-pointer">
                    Read More
                  </p>
                </Link>
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </>
  );
}

export default Projectscard;
