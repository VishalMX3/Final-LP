import React from "react";
import { BsCheck2 } from "react-icons/bs";
import Image from "next/image";
import Timer from "./timer";

const Coursestructure = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black h-100 bg-fixed bg-center bg-cover lg:pt-10 md:pt-10 sm:pt-10">
      <div className="flex flex-col px-14 mx-15 pt-[110px]">
        <h2 className="text-white text-6xl text-center px-2 text-[52px] font-medium">
          Here's how it works over the{" "}
          <span className="text-button-green">2 hours</span>
        </h2>
      </div>
      <div className="flex flex-col py-[30px] px-16 justify-center w-full">
        <div className="flex flex-col text-white shrink bg-back-blue w-full h-100 rounded-lg px-9 pb-9 text-[18px]">
          <div className="flex py-[14px] align-middle h-min">
            <div className="flex pr-[12px] align-middle">
              <Image
                src="/ninja_star.svg"
                width={25}
                height={25}
                alt="Picture of the author"
              />
            </div>
            <div className="text-white text-[32px] font-bold">
              2 HOUR Workshop
            </div>
          </div>
          <div className="flex pb-[20px] align-middle h-min">
            <div className="flex pr-[12px] align-middle">
              <BsCheck2 className="w-[20px] h-[20px] align-middle" />
            </div>
            <div className="text-white ">
              Understand all the hype about AI and why ChatGPT is a force to
              reckon with
            </div>
          </div>
          <div className="flex pb-[20px]">
            <div className="pr-[12px] align-middle">
              <BsCheck2 className="w-[20px] h-[20px] align-middle" />
            </div>
            <div className="text-white ">
              Understand all the hype about AI and why ChatGPT is a force to
              reckon with
            </div>
          </div>
          <div className="flex pb-[20px]">
            <div className="pr-[12px] align-middle">
              <BsCheck2 className="w-[20px] h-[20px] align-middle" />
            </div>
            <div className="text-white ">
              Understand all the hype about AI and why ChatGPT is a force to
              reckon with
            </div>
          </div>
          <div className="flex pb-[20px]">
            <div className="pr-[12px] align-middle">
              <BsCheck2 className="w-[20px] h-[20px] align-middle" />
            </div>
            <div className="text-white ">
              Develop a understanding of how to leverage AI in your specific
              professional domain to save hours of time every week
            </div>
          </div>
          <div className="flex pb-[20px]">
            <div className="pr-[12px] align-middle">
              <BsCheck2 className="w-[20px] h-[20px] align-middle" />
            </div>
            <div className="text-white ">
              Understand all the hype about AI and why ChatGPT is a force to
              reckon with
            </div>
          </div>
          <div className="flex pb-[20px]">
            <div className="pr-[12px] align-middle">
              <BsCheck2 className="w-[20px] h-[20px] align-middle" />
            </div>
            <div className="text-white ">
              Understand all the hype about AI and why ChatGPT is a force to
              reckon with
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center align-middle pt-[80px]">
          <button className="lg:w-[480px] md:w-[360px] sm:w-[280px] w-full lg:h-[58px] md:h-[48px] sm:h-[38px] h-[58px] bg-button-green font-semibold rounded-xl lg:text-[25px] md:text-[20px] sm:text-[16px]">
            Register now for ₹99 <span className="line-through">₹999</span>
          </button>
          <div className="pt-[15px] text-white text-[22px]">
            Offer ends in
            <Timer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursestructure;
