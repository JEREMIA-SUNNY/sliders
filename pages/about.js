import Head from "next/head";
import Image from "next/image";
import Clients from "../components/clients";
import Link from "next/link";

export default function About() {
  const team = [
    {
      name: "tom",
      image: "/default.jpeg",
      role: "Founder & Managing Director",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "jerry",
      image: "/default.jpeg",
      role: "CEO",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/default.jpeg",
      role: "General Manager",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/default.jpeg",
      role: "Head of Sourcing",

      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/default.jpeg",
      role: "Head of Quality",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/default.jpeg",
      role: "Head of Research",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/default.jpeg",
      role: "Head of Research",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
  ];
  return (
    <>
      <div className="md:container   mb-10  mx-auto">
        <p className="text-2xl font-extrabold mt-5   text-center font-bah ">
          ABOUT
        </p>
        <div className="grid lg:grid-cols-2  grid-cols-1 md:gap-x-20 gap-4">
          <div
            className="w-full md:block hidden h-[70px] lg:col-span-2  col-span-1 "
            id="Analytics"
          ></div>
          <div className="w-auto">
            <p className="text-2xl font-semibold mt-10 md:mt-0 text-center md:text-left "> YOGANDADITI</p>
            <p className="prose text-black   pt-8 font-bah">
             
              {`Like most others, I wasn't a born yogi. It has taken me years of practice under multiple certified and highly reputed teachers. A few things I've learnt about myself along the way. 
              `}
            </p>
            <div className="flex gap-1 mt-2 text-black flex-row">
              <span className="w-fit ">👉</span>{" "}
              <p className="  text-black prose  font-bah ">
                {`I started my career in consulting right after college, and then dived into marketing, took me about 7 years to realise that it wasn't for me :) 
              `}
              </p>
            </div>
            <div className="flex mt-2 gap-1 flex-row">
              <span className="w-fit">👉</span>{" "}
              <p className="prose text-black font-bah ">
                {`This and my personal experience combined paved the way for my own brand - C positive. I was convinced that providing the 'right care' for those going through Cancer treatment would be fulfilling to me personally and professionally. This niche segment however was a tough nut to crack, at least for a one man army.
              `}
              </p>
            </div>
            <div className="flex mt-2 gap-1 flex-row">
              <span className="w-fit ">👉</span>{" "}
              <p className="prose text-black   font-bah ">
                {`Then came yoga :) which needs nothing more than just me!
              `}
              </p>
            </div>
            <p className="prose text-black   pt-2 font-bah">
              {`My practice helped me tremendously in building both - mental and physical strength. After completing several professional training courses (currently studying my MSc. Yoga) I am able to share my learnings and 'care' for a vast audience. I teach various forms of yoga every single day with aerial vinyasa being my chosen one! 

My goal is to make yoga part of as many lives as I can. 
              `}
            </p>
          </div>

          <div className="w-auto h-fit lg:h-[550px] ">
            <img
              className=" md:h-full md:w-full object-cover"
              alt=""
              src="/about2/herphoto.jpg"
            />
          </div>
        </div>
      </div>
      <div className="md:container  mb-5 mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-x-20 gap-4 ">
          <div className="w-auto mt-6 h-fit lg:h-[550px] ">
            <img
              className=" h-full w-full object-cover"
              alt=""
              src="/about/leaf.jpg"
            />
          </div>
          <div className="w-auto ">
            <p className="text-2xl font-semibold  text-left ">YOGATEASE</p>{" "}
            <p className="prose font-bah  mt-10">
              {`Like the name suggests, everybody's goal today is to find ease in everything that we do. At work, at home, in relationships - within our family and outside.
              Simply stating - there's more than just  - yog and aditi. How does yoga fit into our life when we're off the mat? What you learn on the mat is useless if it cannot be put to practice off the mat. We would like to help you connect with yoga in a way that works for you and ensure that you are able to practice no matter where you are because ultimately  - Yoga is You.
              There are different ways to incorporate Yoga into life, including the basics of how we eat, sleep and everything in between!.
              `}
            </p>
            <p className="prose font-bah  mt-2">
              {`I don't believe in extremes, so no - I haven't given up anything in my lifestyle. I continue to live as a "modern day yogi' (I take my protein like a hard core carnivore and treat myself with the occasional drink :)), but with Yoga I have found the right balance within my lifestyle. You can too!
`}
            </p>
            <p className="prose font-semibold font-bah  mt-2">{`Yoga in one way or another is already a part of everybody's life, and it can and should be part of our personal care and hygiene too! Let's be conscious about how we make our mind-body connect with Yog . At . Ease`}</p>
            {/* <p className="prose lg:mb-0 mb-5 pt-8">
              <Link href="/contact">
                <a className="active:text-red underline font-bold hover:text-orange decoration-emerald-600 text-emerald-600">
                  Get in touch
                </a>
              </Link>
              to know more.
            </p> */}
          </div>
        </div>
      </div>

      {/* <div className=" py-16 mx-auto container">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10">
        
          <h5 className="mb-4 text-2xl font-extrabold leading-none">
          
          
          </h5>
          <p className="mb-6 font-bah text-black">
           {`Like most others, I wasn't a born yogi. It has taken me years of practice under multiple certified and highly reputed teachers. I was born, brought up and live in Bangalore, India. I started my career in consulting right after college, and realised very quickly that it wasn't for me :) Jumped into marketing in a luxury start up since it felt like the right fit, which I enjoyed to the fullest. This and my personal experience combined paved the way for my own brand - C positive. I was convinced that providing the right personal care for those going through Cancer treatment would be fulfilling to me personally and professionally. This niche segment however was a tough nut to crack, at least for a one man army.`}
          </p>
          <p className="mb-6 font-bah font-semibold text-black">
           {`Then came yoga :) which needs nothing more than just me!`}
          </p>
          <p className="mb-6 font-bah text-black">
           {`

My practice helped me tremendously in building both - mental and physical strength. I wanted to share some of my learnings and experiences with more people, so I went ahead and completed my teacher training. This was the first of many courses that followed.

Today, I practice and teach various forms of yoga every single day with aerial vinyasa being my chosen one! My goal is to make yoga part of as many lives as I can. I genuinely believe that it helps people find balance - on the mat and off the mat!`}
          </p>
          
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="/indexpage/class.jpg"
            alt=""
          />
        </div>
      </div>
    </div> */}
    </>
  );
}
