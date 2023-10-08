import React from "react";
import Image from "next/image";

function BestTimeToJoin() {
  return (
    <div className="flex flex-col items-center justify-center bg-black h-100 bg-fixed bg-center bg-cover pt-[100px]">
      <div className="flex flex-col pl-14 pr-14 pb-20 lg:pb-20 md:pb-20 sm:pb-20 mx-15">
        <h2 className="text-white text-5xl text-center px-2">
          Why is now the best time to join?
        </h2>
      </div>
      <div className="flex flex-col rounded-xl flex-wrap pl-14 pr-14 pb-20 lg:pb-20 md:pb-20 sm:pb-20 mx-15">
        <Image
          src="/news_img.jpeg"
          width={900}
          height={900}
          alt="Picture of the author"
          className="flex rounded-3xl"
        />
      </div>
    </div>
  );
}

export default BestTimeToJoin;
