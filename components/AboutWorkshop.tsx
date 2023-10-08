import React from "react";
import Card from "./Card";

const AboutWorkshop = () => {
  return (
    <div className="flex items-center justify-center bg-black min-h-screen bg-center bg-cover">
      <div className="flex flex-col py-14">
        <h2 className="text-white text-6xl text-center px-2 py-12">
          What will you learn in the{" "}
          <span className="text-lime-400">workshop?</span>
        </h2>
        <div className="px-12 flex flex-col items-center md:grid md:grid-cols-2 gap-16">
          <Card
            image="c1.svg"
            title="Conquer the ChatGPT Conversation Arena"
            description="Transform Your AI Communication: Stand Out with Dynamic, Persuasive, and Captivating ChatGPT Conversations"
          />
          <Card
            image="c2.svg"
            title="GrowthSchool’s Conversational AI Success Blueprint"
            description="An engagement powerhouse to elevate your customer interactions and boost your business!"
          />
          <Card
            image="c3.svg"
            title="Your Personal Jarvis: Unlock Limitless AI Potential:"
            description="Elevate your business to new heights with ChatGPT’s unparalleled conversational prowess, leaving customers captivated and eager to experience more of your products and services."
          />
          <Card
            image="c4.svg"
            title="Communicate Hyper-Personally Without even being present"
            description="Harness the power of ChatGPT’s exceptional personalization capabilities to create meaningful connections, inspiring unwavering loyalty and driving repeat purchases"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutWorkshop;
