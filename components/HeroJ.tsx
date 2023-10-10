import React from "react";
import { BsCalendar } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Timer from "./Timer";
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black h-100 bg-fixed bg-center bg-cover pt-[20px] w-full sm:w-full">
      <div className="flex justify-starting items-center align-middle w-auto pr-[20px] h-[50px] border bg-banner-green rounded-md">
        <div className="flex pl-[15px] text-white">
          🔥 Early Bird Offer : Price resets to Rs 999 when the timer below hits
          0.
        </div>
        <button className="pl-[60px]">
          <AiOutlineClose className="fill-white" />
        </button>
      </div>
      <div className="flex flex-col  pt-5 my-5 md:pb-20 sm:pb-20">
        <h2 className="text-white text-4xl md:text-6xl text-center px-2">
          Learn how to Unlock Power of
          <span className="text-button-green">
            {" "}
            Generative AI using ChatGPT
          </span>
        </h2>
        <p className="text-white text-xl my-5 text-center">
          Master AI Powered Conversations, improve productivity, tap into
          unprecedented business growth and future proof your career in 3 hours
        </p>
        <div className="flex justify-center items-center space-x-10">
          <div
            className="flex w-40 bg-lime-950 h-10 justify-center
                    items-center text-white p-2 rounded-lg"
          >
            <BsCalendar />
            <div className="pl-4">8th Oct 2023</div>
          </div>
          <div
            className="flex w-40 bg-lime-950 h-10 justify-center
                    items-center text-white p-2 rounded-lg "
          >
            <BsClock />
            <div className="pl-4">11:00 AM IST</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center align-middle px-4 w-full">
        <div className="w-full gap-5 flex">
          <div className="w-full flex-col justify-between hidden md:flex">
            <div className="w-full h-[30px] bg-gradient-to-r from-[#33212A] to-[#8BC360]"></div>
            <div className="w-full h-[30px] bg-gradient-to-r from-[#33212A] to-[#8BC360]"></div>
            <div className="w-full h-[30px] bg-gradient-to-r from-[#33212A] to-[#8BC360]"></div>
            <div className="w-full h-[30px] bg-gradient-to-r from-[#33212A] to-[#8BC360]"></div>
            <div className="w-full h-[30px] bg-gradient-to-r from-[#33212A] to-[#8BC360]"></div>
            <div className="w-full h-[30px] bg-gradient-to-r from-[#33212A] to-[#8BC360]"></div>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            {/* Other hero content */}
            <iframe
              className=" w-full aspect-video rounded-2xl border"
              src={`https://www.youtube.com/embed/f3eCSkdUfU8`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full flex-col justify-between hidden md:flex">
            <div className="w-full h-[30px] bg-gradient-to-r to-[#33212A] from-[#8BC360]"></div>
            <div className="w-full h-[30px] bg-gradient-to-r to-[#33212A] from-[#8BC360]"></div>
            <div className="w-full h-[30px] bg-gradient-to-r to-[#33212A] from-[#8BC360]"></div>
            <div className="w-full h-[30px] bg-gradient-to-r to-[#33212A] from-[#8BC360]"></div>
            <div className="w-full h-[30px] bg-gradient-to-r to-[#33212A] from-[#8BC360]"></div>
            <div className="w-full h-[30px] bg-gradient-to-r to-[#33212A] from-[#8BC360]"></div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 w-full">
          <button className="w-full px-5 py-3 bg-button-green max-w-xl font-semibold rounded-xl lg:text-[25px] md:text-[18px] sm:text-[14px] ">
            Register now for ₹99 <span className="line-through">₹999</span>
          </button>
          <div className="mt-[15px] text-white text-[22px]">
            Offer ends in
            <Timer />
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-[30px] mx-15 mt-5 w-full">
        <div className="w-full h-[2px] bg-gradient-radial from-white to-black rounded-full my-3"></div>
        <h2 className="text-white text-6xl text-center px-2 text-[18px] mt-10 font-medium">
          Brought to you by
        </h2>
        <div className="flex justify-center items-center align-center pt-[20px]">
          <Image
            src="/tfu-logo-text.png"
            width={150}
            height={150}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
