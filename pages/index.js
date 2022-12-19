import Slider from "/components/slider";
import { FontAwesomeIcon, FaPlay } from "react-icons/fa";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Blogslide from "/components/blogslide";
import Link from "next/link";
import Fixediv from "../components/fixediv";
import Newsslide from "../components/newsslide";
import Image from "next/image";
import Testimonials from "../components/testimonials";

const rightIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 text-white"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Home() {
  const [buttonIndex, setButtonIndex] = useState(0);
  const buttonClick = (x) => {
    setButtonIndex(x);
  };
  const [videoss, setVideoss] = useState(null);
  const discover = [
    {
      name: "VINYASA FLOW",
      img: "/classes/vinyasa1.jpg",
      desc: "I love a good movement based practice, and swear by it! Simple reason being - movement on the mat represents change off the mat. ",
      blogsdata: [
        // {
        //   name: " YOG OFF THE MAT",
        //   small:
        //     "Taking the 'on the mat' practice and applying it within our every day routine - at work, at home, all over the world",
        //   desc: "Sins of lockdown (lockdowns) that I'm sure we've all encountered at some point! 🚫❓",
        //   imgs: "/indexpage/disc.jpg",
        // },
        // {
        //   name: " YOG OFF THE MAT",
        //   small:
        //     "Taking the 'on the mat' practice and applying it within our every day routine - at work, at home, all over the world",
        //   desc: "Is today looking bleak😑? overwhelming😲 ? crazy🤯? Quick fix - 🤫 ⤵️",
        //   imgs: "/indexpage/disc3.jpg",
        // },
        // {
        //   name: " YOG OFF THE MAT",
        //   small:
        //     "Taking the 'on the mat' practice and applying it within our every day routine - at work, at home, all over the world",
        //   desc: "Stay true to your roots👇🏼",
        //   imgs: "/indexpage/disc2.jpg",
        // },
      ],
    },
    {
      name: "AERIAL FLOW",
      img: "/discover/discover1.png",
      desc: "Aerial yoga is a more fun and engaging practice using a prop - swing, hammock, silk. I use silk hammocks.",
      blogsdata: [
        // {
        //   name: "YOG AND SELF-CARE",
        //   small:
        //     "A few tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
        //   desc: "Break from yoga. Break from my mat = break out on face! 🤦🏻‍♀️",
        //   imgs: "/indexpage/disc.jpg",
        // },
        // {
        //   name: "YOG AND SELF-CARE",
        //   small:
        //     "A few tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
        //   desc: "Detox starts within.🥒🥬",
        //   imgs: "/indexpage/disc3.jpg",
        // },
        // {
        //   name: "YOG AND SELF-CARE",
        //   small:
        //     "A few tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
        //   desc: "Clean - inside and out 🙆🏻‍♀️",
        //   imgs: "/indexpage/disc2.jpg",
        // },
      ],
    },
  ];

  const news = [
    {
      name: "loremipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
      imgs: "/indexpage/disc.jpg",
    },
    {
      name: "loremipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident, ",
      imgs: "/indexpage/disc3.jpg",
    },
    {
      name: "loremipsum",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident, ",
      imgs: "/indexpage/disc2.jpg",
    },
  ];
  const blog = [
    {
      name: "YOG ON THE MAT",
      small: "How to get started with Yoga and grow with your practice",
      desc: "Remember, you control your breath, don't let your breath control you! 🧘🏻‍♀️- 🤷🏽‍♀️ - ⬇️",
      imgs: "/indexpage/disc.jpg",
    },
    {
      name: "YOG ON THE MAT",
      small: "How to get started with Yoga and grow with your practice",
      desc: "Don't ever look back, unless it's from a different point of view 🙃 ⬇️",
      imgs: "/indexpage/disc3.jpg",
    },
    {
      name: "YOG ON THE MAT",
      small: "How to get started with Yoga and grow with your practice",
      desc: "Hips don't lie 🙇🏻‍♀️👇🏼",
      imgs: "/indexpage/disc2.jpg",
    },
  ];

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
  const videoclick = (video) => {
    setVideoss(video);
  };
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const timeId = setTimeout(() => setShowModal(true), 3000);

    return () => clearTimeout(timeId);
  }, []);
  return (
    <main>
      {/* <Testimonials /> */}
      <Slider />

      <section className="md:container p-4 mx-auto md:py-32 text-zinc-900">
        <div className="grid grid-col-1  md:grid-cols-2 md:gap-16 gap-4">
          <div className="w-auto">
            <p className="= text-left  text-2xl font-bah font-extrabold mb-5 tracking-widest text-black ">
              {" "}
              ABOUT
            </p>
            <p className="prose pt-8 text-justify  font-bah">
              {`Like the name suggests, everybody's goal today is to find ease in everything that we do. At work, at home, in relationships - within our family and outside. Simply stating - there's more than just - yog and aditi. How does yoga fit into our life when we're off the mat? What you learn on the mat is useless if it cannot be put to practice off the mat. We would like to help you connect with yoga in a way that works for you and ensure that you are able to practice no matter where you are because ultimately - Yoga is You. There are different ways to incorporate Yoga into life, including the basics of how we eat, sleep and everything in between!.

            I don't believe in extremes, so no - I haven't given up anything in my lifestyle. I continue to live as a "modern day yogi' (I take my protein like a hard core carnivore and treat myself with the occasional drink :)), but with Yoga I have found the right balance within my lifestyle. You can too!

            Yoga in one way or another is already a part of everybody's life, and it can and should be part of our personal care and hygiene too! Let's be conscious about how we make our mind-body connect with Yog . At . Ease`}
            </p>
          </div>
          <div className="w-auto mt-4 h-full  md:h-[600px] ">
            <img
              className="max-h-[600px] w-full  object-cover"
              alt=""
              src="/about/leaf.jpg"
            />
          </div>
        </div>
        <div className="w-full flex mt-5 justify-left">
          <Link href="/about">
            <button className="px-6 font-bah py-2 font-medium tracking-wide text-black bg-white border-2 border-black hover:bg-black hover:border-white mb-2     rounded-md  hover:text-white ">
              Read More
            </button>
          </Link>
        </div>
      </section>
      {/* discoverrrrrrrrrrrrrrrrrrrrrrrrrrrrr */}
      <section className="text-white mx-auto md:container ">
        <div className="py-5  md:py-9 ">
          <div>
            <p className="text-center text-2xl font-bah font-semibold mb-20 tracking-widest text-black">
              CLASS
            </p>
          </div>

          <div className="flex flex-col md:flex-row   gap-6  justify-between  ">
            {discover.map(({ name, img, desc }, index) => {
              return (
                <div key={index} className=" w-full md:w-1/2  bg-white rounded">
                  <div className="">
                    <img
                      src={img}
                      className="object-cover w-[660px] h-[400px] rounded"
                      alt=""
                    />
                  </div>
                  <div className="py-5 ">
                    <div className="flex mb-3 text-black w-full h-full   hover:text-deep-purple-accent-700">
                      <p className="text-lg font-bah p-2 mb-3 font-bold md:h-5  h-fit">
                        {`${name} >`}
                      </p>
                    </div>
                    <p className="  w-full text-black text-justify p-2 font-bah ">
                      {desc}
                    </p>
                  </div>
                  <div className="w-full flex justify-center">
                    <Link href={"/class"}>
                      <button className="px-6 font-bah cursor-pointer py-2 font-medium tracking-wide text-black bg-white border-2 border-black hover:bg-black hover:border-white mb-5     rounded-md  hover:text-white ">
                        Read Moress
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* <section
        data-aos="fade-up"
        className="text-black lg:h-[550px] body-font   lg:py-12"
        style={{
          backgroundImage: `url(${"/slider/1.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" md:container md:mx-auto  lg:rounded-lg text-left">
          <div className="lg:w-full mx-auto flex flex-col items-center justify-center  ">
            <div className="lg:w-full  w-full lg:mr-9  mt-6 lg:mt-10 ">
              <div className="w-full flex gap-4 lg:justify-center ">
                <p className="w-full text-center   text-2xl font-bah font-extrabold mb-5 tracking-widest  title-font text-white    ">
                  DISCOVER
                </p>
              </div>

              <p className="text-center  p-20 text-white  font-bah">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, repudiandae non et eum quam cupiditate harum cum
                earum id unde, qui culpa laudantium? Corrupti maxime
                necessitatibus saepe similique quasi ad distinctio? Rem nam
                fugiat, iure sapiente quae pariatur, quia sit omnis eligendi
                itaque eius! Facere non voluptatum nobis incidunt repellat!
              </p>
            </div>
           
            <div className="w-full flex justify-center">
              <Link href={"/classes"}>
                <button className="px-6 font-bah cursor-pointer py-2 font-medium tracking-wide text-white  border-2 border-white hover:bg-white hover:border-white mb-5     rounded-md  hover:text-black ">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      <Blogslide />

      <Newsslide />
    </main>
  );
}
