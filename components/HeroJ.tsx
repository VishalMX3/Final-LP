import React from "react";
import { BsCalendar } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Timer from "./timer";
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
      <div className="flex flex-col  pt-[40px] pb-20 lg:pb-20 md:pb-20 sm:pb-20">
        <h2 className="text-white text-5xl md:text-6xl text-center px-2">
          Learn how to Unlock Power of
          <span className="text-button-green">
            {" "}
            Generative AI using ChatGPT
          </span>
        </h2>
        <p className="text-white py-16 text-xl mx-10 text-center">
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
      <div className="flex justify-center items-center align-middle w-full h-auto">
        <div className="grid grid-cols-1 gap-[1em] justify-between w-1/4 h-max">
          <Image
            src="/cols2.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="flex justify-center items-center w-1/2  h-full">
          <div className="flex justify-center items-center flex-wrap w-10/12 h-full rounded-2xl">
            <div className="flex w-[1080px] h-full justify-center flex-wrap">
              {/* Other hero content */}
              <iframe
                className="w-full h-min aspect-video rounded-2xl border"
                src={`https://www.youtube.com/embed/f3eCSkdUfU8`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[0.75em] justify-between w-1/4 h-max">
          <Image
            src="/cols-swap.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center align-middle pt-[80px]">
        <button className="lg:w-[480px] md:w-[360px] sm:w-[280px] w-full lg:h-[58px] md:h-[48px] sm:h-[38px] h-[58px] bg-button-green font-semibold rounded-xl lg:text-[25px] md:text-[18px] sm:text-[14px] ">
          Register now for ₹99 <span className="line-through">₹999</span>
        </button>
        <div className="pt-[15px] text-white text-[22px]">
          Offer ends in
          <Timer />
        </div>
      </div>
      <div className="flex flex-col pt-[30px] mx-15">
        <h2 className="text-white text-6xl text-center px-2 text-[18px] font-medium">
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
