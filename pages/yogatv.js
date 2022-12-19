import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon, FaPlay } from "react-icons/fa";

export default function Yogatv() {
  const [videoss, setVideoss] = useState(null);

  const yogatv = [
    {
      name: "3 Sins of lockdown (lockdowns) that I'm sure we've all encountered at some point! 🚫❓",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
      imgs: "/yogatv/1.jpg",
      vidoes: (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/XSyyQQLW2IQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="allowfullscreen"
        ></iframe>
      ),
    },
    {
      name: "loremipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident, ",
      imgs: "/yogatv/2.jpg",
      vidoes: (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/oanjg8uCAe4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="allowfullscreen"
        ></iframe>
      ),
    },
    {
      name: "loremipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident, ",
      imgs: "/yogatv/3.jpg",
      vidoes: (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/j__CYzXxL5E"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="allowfullscreen"
        ></iframe>
      ),
    },
  ];

  return (
    <>
      <section className="md:container mx-auto">
        <div className="py-5  md:py-16">
          <p className="text-center text-2xl tracking-widest mb-10 font-bah font-extrabold">
            YOGA TV
          </p>
          {/* <p className="text-black text-xl font-bah text-center p-8">
            "Sed ut perspiciatis unde omnis iste natus error sit iste voluptatem
            accusantium doloremque rem aperiam, ipsa eaque quae. Sed ut
            perspiciatis unde omnis iste."
          </p> */}

          <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2">
            {yogatv.map(({ name, imgs, desc, vidoes }, index) => {
              return (
                <div
                  key={index}
                  onClick={() => videoclick(vidoes)}
                  href="/"
                  aria-label="View Item"
                >
                  <div className="relative rounded shadow-lg  hover:shadow-2xl">
                    <img
                      className="object-cover w-full h-56 md:h-64 xl:h-80"
                      src={imgs}
                      alt=""
                    />
                    <div className="absolute top-[40%] left-[40%] animate-pulse duration-100 ">
                      <FaPlay color="white" size={80} />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                      <p className="text-sm font-medium font-bah tracking-wide text-white">
                        Sed ut perspiciatis unde omnis iste natus error
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {videoss && (
            <div
              className={`fixed flex justify-center items-center bg-opacity-80  z-50 top-0   left-0 w-screen h-screen bg-black`}
            >
              <div
                className={` "border w-full lg:w-fit lg:h-[90%]  h-full   flex flex-row lg:flex-col justify-center items-center bg-gray bg-opacity-100"`}
              >
                <div className="lg:w-full bg-opacity-0 h-fit    bg-white flex flex-col  overflow-auto w-full">
                  <div
                    onClick={() => videoclick(null)}
                    className=" hover:cursor-pointer text-xl text-white text-end font-extrabold text-green animate-bounce  w-full"
                  >
                    X
                  </div>
                  <div className="md:w-[1000px] flex-3 w-full  h-[600px]  md:h-[500px] flex justify-center">
                    {videoss}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="text-center flex justify-center">
            <button className="px-6 font-bah py-2 font-medium tracking-wide text-black bg-white border-2 border-black hover:bg-black hover:border-white mb-5     rounded-md  hover:text-white ">
              Watch More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
