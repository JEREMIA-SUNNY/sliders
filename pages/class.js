import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Teams() {
  const [buttonIndex, setButtonIndex] = useState(0);
  const buttonClick = (x) => {
    setButtonIndex(x);
  };

  const team = [
    {
      name: "Dr. Deepak Joshi",
      image: "/deepakjoshi.jpeg",
      role: "Founder & Managing Director",
    },
    {
      name: "Nitin Joshi",
      image: "/person6.jpg",
      role: "CEO",
    },
    {
      name: "KS Chauhan",
      image: "/person1.jpg",
      role: "General Manager",
    },
    {
      name: "Naveen Kumar",
      image: "/person5.jpg",
      role: "Head of Sourcing",
    },
    {
      name: "Vijay Shetty",
      image: "/person3.jpg",
      role: "Head of Quality",
    },
    {
      name: "Dr. Shreya Bhat",
      image: "/person2.jpg",
      role: "Head of Research",
    },
    {
      name: "Raghavendra G",
      image: "/person4.jpg",
      role: "Head of Accounts",
    },
  ];
  const discover = [
    {
      name: "VINYASA FLOW",
      img: "/discover/discover1.jpg",
      desc: "",

      blogsdata: [
        {
          name: "VINYASA FLOW",
          small:
            "Taking the 'on the mat' practice and applying it within our every day routine - at work, at home, all over the world",
          desc: "I love a good movement based practice, and swear by it! Simple reason being - movement on the mat represents change off the mat. Vinyasa trains your mind and body to first keep up with each other and then team up to build controlled strength and steadiness. The constant movement on the mat trains us to exercise this steadiness off the mat too! ",
          imgs: "/classes/vinyasa1.jpg",
          desc2:
            "I practice Vinyasa every day, and teach it in various forms - restorative, pre and post natal and strength!",

          desc3:
            "Based on your mind/body build, you can choose your form and join me in this practice - online or offline!",
        },
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
      img: "/discover/discover2.jpg",
      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          name: "AERIAL",
          small:
            "A few tips and tricks on how to benefit from yoga with a little extra care towards our mind and body!",
          desc: "Aerial yoga is a more fun and engaging practice using a prop - swing, hammock, silk. I use silk hammocks. My mantra for anybody giving aerial yoga a shot is - your prop is your 5th limb, the idea is to use your 5 limbs as you flow and flip from one asana to another! ",
          imgs: "/discover/discover1.png",
          desc2:
            "Aerial can be more challenging than a regular yoga practice or it can be easier, it depends on how deep you get into it! ",

          desc3:
            "Start your aerial journey with Airo techniques, Vinyasa flow and Yog asanas at my studio. I spend every weekend with aerial students of all age groups as they sweat, flow and flip to build strength and flexibility! ",
        },
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

  return (
    <>
      <section className="text-white mx-auto md:container ">
        <div className="w-full h-72 relative ">
          <Image
            layout="fill"
            alt="ser"
            src="/classes/classban.jpg"
            objectFit="cover "
            className="brightness-75"
            unoptimized={true}
          />
          <div className="w-full    h-full  flex  justify-center">
            <div className="text-white relative    h-full flex flex-col justify-center items-center">
              <p className="text-2xl font-extrabold mt-5 mb-5  text-center font-bah ">
                CLASS
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center w-3/4 text-base font-bah p-10  text-black">
            {`I believe in every day movement and my practice reflects the same! Don't worry about the asanas, focus on transition instead and that is when you will be able to apply it to your life :) `}
          </p>
        </div>
        <ul className="grid grid-flow-col  mt-5 text-center  text-black bg-white rounded-full p-1">
          {discover.map(({ name }, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  buttonClick(index);
                }}
              >
                <p
                  className={`${
                    index === buttonIndex
                      ? " text-black font-extrabold  border-black border-b-4"
                      : "bg-white  border-slate-600 border-b-[2px]"
                  } flex justify-center font-bah  bg-white  text-black py-4 hover:cursor-pointer`}
                >
                  {name}
                </p>
              </li>
            );
          })}
        </ul>

        <div className=" py-8">
          <div className="mb-5   mt-10 md:mx-auto">
            {discover[buttonIndex].blogsdata.map(
              ({ name, imgs, desc, desc2, desc3 }, index) => {
                return (
                  <div
                    key={index}
                    className="flex md:flex-row flex-col  justify-evenly md:gap-24 "
                  >
                    <div className="w-fit  h-fit lg:h-fit ">
                      <img
                        className=" h-full w-full object-cover"
                        alt=""
                        src={imgs}
                      />
                    </div>
                    <div className="w-auto ">
                      {/* <p className="text-2xl text-black mb-5 font-semibold  text-left ">
                        {name}
                      </p>{" "} */}
                      <p className="prose font-bah  text-justify">{`${desc}`}</p>
                      <p className="prose font-bah text-justify  mt-2">{`${desc2}`}</p>
                      <p className="prose font-bah  text-justify mt-2">{`${desc3}`}</p>
                      <p className="prose  font-bah lg:mb-0 mb-5 pt-8">
                        Want to know more?{" "}
                        <Link href="/connect">
                          <a className="active:text-red underline   font-bah font-bold hover:text-orange decoration-blue text-blue">
                            Click here.
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
        {/* <div className="grid gap-28 lg:grid-cols-1 justify-center  ">
        {discover.map(({ name, img, desc }, index) => {
              return (
                <div className="mb-5  mt-10 md:mx-auto">
                <div className="flex md:flex-row flex-col  justify-evenly md:gap-24 ">
                  <div className="w-fit  h-fit lg:h-fit ">
                    <img
                      layout="cover"
                      className=" h-full w-full object-cover"
                      alt=""
                      src="/discover/discover1.jpg"
                    />
                  </div>
                  <div className="w-auto ">
                    <p className="text-2xl text-black mb-5 font-semibold  text-left ">
                      VINYASA
                    </p>{" "}
                    <p className="prose font-bah ">
                     {` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium, perferendis ab! Natus nobis, modi facere quidem
                      inventore repudiandae obcaecati consequuntur laborum eaque
                      dolores pariatur corrupti possimus ut corporis enim tenetur!`}
                    </p>
                    <p className="prose font-bah  mt-2">{`
                      rem fugit sint iste quo maiores laborum excepturi voluptates
                      incidunt molestiae earum molestias ut hic praesentium autem
                      illum. Repellendus consequatur possimus natus culpa unde iure
                      blanditiis obcaecati cumque mollitia vero eaque itaque animi
                      distinctio, adipisci eius officia! Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Quas soluta accusantium
                      perferendis modi, quaerat eius incidunt alias illo suscipit.
                      Dolor, praesentium. Necessitatibus, ab aut provident, tempora
                      fugiat iste ipsa nemo, ex praesentium sequi vitae quaerat illum
                      ipsam voluptatum. Aspernatur facere nihil adipisci quasi libero
                      doloribus atque rem, corrupti blanditiis, tenetur corporis sunt?
                      Eum ullam in voluptatibus adipisci ipsam vero esse!`}
                    </p>
                   
                  </div>
                </div>
              </div>
              );
            })}
            </div> */}
      </section>
    </>
  );
}
