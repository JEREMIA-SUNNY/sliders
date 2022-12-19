import React from "react";

export default function Fixediv({ clicked }) {
  return (
    <>
      <div className="flex fixed right-0 top-[15%]  z-50  flex-col">
        {/* <div className="bg-white">
            <p>close</p>
        </div> */}
        <div className="flex flex-col gap-6   p-2 rounded-lg shadow mt-4 w-fit bg-white  ">
          <div onClick={clicked} className="bg-white">
            <p className="text-center cursor-pointer font-extrabold">x</p>
          </div>
          <a
            className=" text-black transition-colors duration-300 transform hover:text-blue-500"
            href="https://twitter.com/yogease"
            rel="noopener noreferrer"
            target="_blank"
          >
           <img src="/icon/twitter.gif" className="w-8 h-8" alt="" />
          </a>

          <a
            className=" text-black transition-colors duration-300 transform hover:text-blue-500"
            href="https://www.linkedin.com/company/yogatease/about/?viewAsMember=true"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="/icon/linkid.gif" className="w-8 h-8" alt="" />
          </a>

          <a
            className=" text-black transition-colors duration-300 transform hover:text-blue-500"
            href="https://www.facebook.com/profile.php?id=100087070717735"
            rel="noopener noreferrer"
            target="_blank"
          >
             <img src="/icon/facebook.gif" className="w-8 h-8" alt="" />
          </a>

          <a
            className=" mb-4 text-black transition-colors duration-300 transform hover:text-blue-500"
            href="https://www.instagram.com/yogat.ease/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="/icon/insta.gif" className="w-8 h-8" alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
