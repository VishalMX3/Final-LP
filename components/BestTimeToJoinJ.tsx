import React from "react";
import Image from "next/image";

function BestTimeToJoin() {
  return (
    <div className="flex flex-col items-center justify-center bg-black h-100 bg-fixed bg-center bg-cover pt-10 p-5">
      <div className="flex flex-col">
        <h2 className="text-white text-3xl text-center">
          Why is now the best time to join?
        </h2>
      </div>
      <div className="mt-5">
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
