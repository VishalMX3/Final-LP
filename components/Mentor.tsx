import React from "react";

const Mentor = () => {
  return (
    <div className="bg-black min-h-screen bg-center bg-cover px-5">
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

      <div className="flex md:flex-row flex-col lg:mx-[150px]">
        <div className="w-full md:w-1/2 h-auto min-w-[100px] relative">
          <img
            className=" w-full h-auto rounded-xl max-w-lg "
            src="mentor.jpg"
            alt="image description"
          />
          <div className="h-full bg-gradient-to-t from-black to-transparent absolute w-full bottom-0 flex flex-col px-10 justify-end">
            <p className=" text-white relative z-10 text-2xl font-medium">
              Abhishek Bansal
            </p>
            <p className="text-white relative z-10">Founder</p>
          </div>
        </div>
        <p className="text-gray-300 w-full md:w-1/2 text-xl mt-10 md:mt-0">
          Vaibhav Sisinty is an engineer turned marketer and now the founder of
          GrowthSchool. He has previously worked for Uber (India & LATAM) where
          he played crucial role in growing Uber from 100’s to millions of trips
          daily. He has worked for unicorn travel startup named Klook where he
          led business for India and Middle East, scaled the business 5X in less
          than 12 months.
          <br></br>
          <br></br>
          He started GrowthSchool with a small team of 4 interns in the middle
          of pandemic and in 2 years have built it to a 150+ member team with
          marquee investors like Sequoia and Owl Ventures investing over $5M ( ~
          40Cr INR ) in GrowthSchool.
          <br></br>
          <br></br>
          He has taught over 100K+ learners via his LinkedIn Workshop and super
          powerful Growth Hacking program and now gearing to teach 1M+ people
          the power of Generative AI and ChatGPT.<br></br>
        </p>
      </div>
    </div>
  );
};

export default Mentor;
