import React from "react";

const Mentor = () => {
  return (
    <div className=" items-center justify-center bg-black min-h-screen bg-center bg-cover px-5">
      <div className="mx-15 ">
        <h2 className="text-white text-5xl text-center px-2 py-2 pt-9">
          <span className="text-lime-400">11354+</span> Students
        </h2>
        <p className="text-white py-2 text-xl text-center">
          who have taken this workshop would recommend you to join in if you fit
          any of the following:
        </p>
        <h2 className="text-white text-4xl text-center px-2 py-7 pt-14">
          Meet Your Mentor
        </h2>
      </div>

      <div className="flex md:flex-row flex-col items-center lg:mx-[150px]">
        <div className=" w-full h-auto  min-w-[100px] ">
          <img
            className=" w-full h-auto rounded-xl max-w-lg "
            src="mentor.jpg"
            alt="image description"
          />
        </div>
        <p className="text-white pt-5 md:pt-14">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
          veritatis, quo quaerat, debitis quasi facere totam veniam maiores hic
          ipsam a obcaecati. Nihil soluta itaque aliquam officia facilis aliquid
          modi.
        </p>
      </div>
    </div>
  );
};

export default Mentor;
