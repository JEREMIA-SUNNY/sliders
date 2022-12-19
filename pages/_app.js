import Layout from "../components/layout";
import Head from "next/head";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Fixeddiv from "../components/fixediv";
import { useRouter } from "next/router";
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';

function MyApp({ Component, pageProps }) {
  // const [soicalmedia, setSocialmedia] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  // const route = useRouter();
  // useEffect(() => {
  //   const timeId = setTimeout(() => setShowModal(true), 3000);

  //   return () => clearTimeout(timeId);
  // }, []);

  // useEffect(() => {
  //   let timeId = null;

  //   if (route.pathname !== "/connect") {
  //     timeId = setTimeout(() => setSocialmedia(true), 6000);
  //   } else {
  //     setSocialmedia(false);
  //   }

  //   return () => {
  //     if (timeId) {
  //       clearTimeout(timeId);
  //     }
  //   };
  // }, [route.pathname]);

  // const clicked = () => {
  //   setSocialmedia(false);
  // };

  return (
    <Layout>
      <Head>
        <title>WC2022</title>
        <meta name="description" content="Official website of YogaTease" />
        <link rel="icon" href="messi.jpg" />
        
      </Head>

      {/* {showModal && (
        <div
          className={`fixed flex Z-50 justify-center items-center bg-opacity-80  z-50 top-0   left-0 w-screen h-screen bg-black`}
        >
          <div
            className={` "border w-full lg:w-fit lg:h-[90%]  h-full   flex flex-row lg:flex-col justify-center items-center bg-gray bg-opacity-100"`}
          >
            <div
              className="lg:w-full bg-opacity-0 h-fit bg-white   flex flex-col  overflow-auto w-full"
              //  style={{
              //   backgroundImage: `url(${"/indexpage/about1.jpg"})`,
              //   backgroundSize: "cover",
              //   backgroundPosition: "center",
              //   backgroundRepeat: "no-repeat",
              // }}
            >
              <div
                onClick={() => setShowModal(false)}
                className=" hover:cursor-pointer text-xl text-white text-end font-extrabold text-green animate-bounce  w-full"
              >
                X
              </div>

              <div className="md:w-[700px] bg-white  border-black  w-full  p-8 h-[500px]  md:h-[400px] flex flex-col justify-center ">
                <p className="text-3xl font-bah text-black mb-12  text-center font-semibold ">{`Hang on a second. Close your eyes and take a deep breath.`}</p>
                <p className="text-xl text-black font-bah  text-center ">{`Our space is not just Yoga. There's a story here 👇`}</p>
                <p className="text-xl text-black font-bah mb-12 text-center ">{`Stay connected.`}</p>
                <div className="flex   justify-center ">
                  <div className="flex mt-4 gap-5 justify-center w-full flex-row">
                    <Link href={"/connect"}>
                      <button
                        onClick={() => setShowModal(false)}
                        className="text-black hover:text-white font-bah hover:bg-black font-medium  w-32 border-2 border-black  rounded-md p-2"
                      >
                        Connect now
                      </button>
                    </Link>

                    <button
                      onClick={() => setShowModal(false)}
                      className="text-black font-bah hover:text-white hover:bg-black font-medium  w-32 border-2 border-black  rounded-md p- "
                    >
                     {`I'll do this later`}
                    </button>
                  </div>
                </div>
                <div className="flex justify-center "></div>
              </div>
            </div>
          </div>
        </div>
      )} */}

      <Component {...pageProps} />
      {/* {soicalmedia && <Fixeddiv clicked={clicked} />} */}
    </Layout>
  );
}

export default MyApp;
