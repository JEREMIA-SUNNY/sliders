import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    mode: "onChange",
  });

  const [message, setMessage] = useState(false);
  const isButtonVisble =
    watch("name") &&
    watch("email") &&
    watch("phone") &&
    watch("message") &&
    watch("location");
  const submit = handleSubmit(async (data) => {
    const { name, email, phone, message, location } = data;
    try {
      const response = await fetch(
        "https://46wxfuv357doo2avdwsoqs6i6e0lkxlm.lambda-url.ap-south-1.on.aws/",

        {
          method: "POST",
          headers: {},
          body: JSON.stringify({
            name,
            email,
            phone,
            message,
            location,
          }),
        }
      );

      if (response.status === 200) {
        reset({
          name: "",
          phone: "",
          email: "",
          message: "",
          location: "",
        });

        setMessage(true);
      } else {
        throw Error("Error while sending message");
      }
    } catch (error) {
      alert("Some thing went wrong");
    }
  });

  return (
    <>
      <section
        className="min-h-screen bg-cover "
        style={{
          backgroundImage: `url(${"/contact.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col   bg-black/60">
          <div className="md:container  min-h-screen  md:mx-auto flex flex-col flex-1 px-6  ">
            <div className="flex-1  mt lg:flex lg:mt-10 lg:-mx-6">
              <div className="text-white  lg:w-1/2 lg:mx-6">
                <div className="text-3xl font-normal  lg:text-5xl">
                  <p className="font-thin">
                    {" "}
                    YOG<span className="font-bold">AT</span>EASE
                  </p>
                </div>
                <p className="font-bah mt-6">
                  This is a safe space for everything yoga, life and in between.
                </p>
                <p className="mt-5"> Would you like to :</p>
                <div className="flex gap-2  text-white flex-row">
                  <span className="w-fit ">⚬</span>{" "}
                  <p className="  text-white prose  font-bah ">
                    {` know more about our website
              `}
                  </p>
                </div>
                <div className="flex gap-2  text-white flex-row">
                  <span className="w-fit ">⚬</span>{" "}
                  <p className="  text-white prose  font-bah ">
                    {` start your yoga journey with us
              `}
                  </p>
                </div>
                <div className="flex gap-2 flex-row">
                  <span className="w-fit">⚬</span>{" "}
                  <p className="prose text-white font-bah ">
                    {`ask us about anything yoga and more
              `}
                  </p>
                </div>
                <div className="flex gap-2 flex-row">
                  <span className="w-fit ">⚬</span>{" "}
                  <p className="prose text-white  font-bah ">
                    {`join us in building the community 
              `}
                  </p>
                </div>
                <div className="flex gap-2 flex-row">
                  <span className="w-fit">⚬</span>{" "}
                  <p className="prose text-white  font-bah ">
                    {` be featured on our website
              `}
                  </p>
                </div>

                <div className="mt-6 md:mt-8">
                  <h3 className="text-gray-300 font-bah">Follow us</h3>

                  <div className="flex mt-4 -mx-1.5 ">
                    <a
                      className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                      href="https://twitter.com/yogease"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg
                        className="w-10 h-10 fill-current"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                      </svg>
                    </a>

                    <a
                      className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                      href="https://www.linkedin.com/company/yogatease/about/?viewAsMember=true"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                          fill="currentColor"
                        />
                        <path
                          d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>

                    <a
                      className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                      href="https://www.facebook.com/profile.php?id=100087070717735"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>

                    <a
                      className="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                      href="https://www.instagram.com/yogat.ease/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className=" lg:w-1/2  lg:mx-6">
                <div className="w-full  px-8 py-3 mx-auto overflow-hidden bg-   shadow-gray-500 justify-self-stretch shadow-2xl  rounded-xl ">
                  <h1 className="text-2xl font-medium text-white font-bah">
                    {" "}
                    {`Let's connect`}
                  </h1>

                  {/* <p className="mt-4 text-white font-bah">
                           
                        </p> */}

                  <div className="mt-6 ">
                    <div className="flex-1">
                      <label className="block mb-2 text-sm text-white ">
                        What is your name?
                      </label>
                      <input
                        type="text"
                        className="block w-full px-5 py- mt-2 text-black bg-slate-200 border border-black rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        {...register("name", {
                          required: true,
                        })}
                      />
                      <label
                        className={`text-red-600   text-xs py-1 ${
                          errors.name ? "visible" : "invisible"
                        }`}
                      >
                        This field is required
                      </label>
                    </div>
                    <span className="text-white text-sm font-bah">
                      How should we reach you?
                    </span>
                    <div className="flex-1 flex gap-4 justify-center mt-2">
                      <div className="w-1/2">
                        <label className="block mb-2 text-sm text-white ">
                          Mobile
                        </label>
                        <input
                          type="text"
                          className="block w-full px-5 py- mt-2 text-black bg-slate-200 border border-black rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          {...register("phone", {
                            required: true,
                            minLength: 10,
                          })}
                        />
                        <label
                          className={`text-red-600   text-xs py-1 ${
                            errors.phone ? "visible" : "invisible"
                          }`}
                        >
                          {errors.phone?.type == "required"
                            ? "This field required"
                            : "Please enter a valid phone number"}
                        </label>
                      </div>

                      <div className="w-1/2">
                        <label className="block mb-2 text-sm text-white ">
                          Email
                        </label>
                        <input
                          type="email"
                          className="block w-full px-5 py- mt-2 text-black bg-slate-200 border border-black rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          {...register("email", {
                            required: true,
                            pattern:
                              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                          })}
                        />
                        <label
                          className={`text-red-600   text-xs py-1 ${
                            errors.email ? "visible" : "invisible"
                          }`}
                        >
                          {errors.email?.type == "required"
                            ? "This field is required"
                            : "Enter a valid email address"}
                        </label>
                      </div>
                    </div>

                    <div className="flex-1  mt-2">
                      <label className="block mb-2 text-sm text-white ">
                        Where do you live?
                      </label>
                      <input
                        type="text"
                        className="block w-full px-5 py- mt-2 text-black bg-slate-200 border border-black rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        {...register("location", {
                          required: true,
                        })}
                      />
                      <label
                        className={`text-red-600   text-xs  ${
                          errors.location ? "visible" : "invisible"
                        }`}
                      >
                        This field is required
                      </label>
                    </div>

                    <div className="w-full mt-2">
                      <label className="block mb-2 text-sm text-white">
                        Anything you would like to share with us?
                      </label>
                      <textarea
                        className="block w-full h-16 px-5 py- mt-2 text-black0  bg-slate-200 border border-gray-200 rounded-md md:h-20    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                        placeholder="Message"
                        {...register("message", { required: true })}
                      ></textarea>
                      <label
                        className={`text-red-600   text-xs py-1 ${
                          errors.message ? "visible" : "invisible"
                        }`}
                      >
                        This field is required
                      </label>
                    </div>
                    <div className="w-full flex justify-center items-center">
                      {message ? (
                        <p className="text-white text-md font-semibold pt-6 ">
                          {`Your message is sent. We'll get back to you at the earliest`}
                        </p>
                      ) : (
                        <button
                          onClick={submit}
                          disabled={!isButtonVisble}
                          className={`w-fit px-6 py-3 mt-6 text-sm border-2 border-black hover:border-white font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-black hover:text-white focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50 ${
                            isButtonVisble ? "opacity-100" : "opacity-50 "
                          }`}
                        >
                          SEND
                        </button>
                      )}
                    </div>
                    {/* <div className="flex justify-center">
                      <button className="w-fit px-6 py-3 mt-6 text-sm border-2 border-black hover:border-white font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-black hover:text-white focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                        SEND
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
