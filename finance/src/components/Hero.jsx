import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="text-white">
      <div
        className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center 
        flex flex-col justify-center"
      >
        <p className="text-[#00df9a] font-bold p-2">GROWING WITH NEW IDEAS</p>
        <h1 className="md:text-6xl sm:text-5xl text-3xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center md:p-2 pl-1 py-3">
          <p className="md:text-4xl sm:text-3xl text-base font-bold">
            Fast, flexible financing for
          </p>
          <div className="w-max pl-3">
            <p
              className="animate-typing overflow-hidden whitespace-nowrap
               md:text-4xl sm:text-3xl text-base font-bold text-white"
            >
              BTB, BTC, & SASS.
            </p>
          </div>
        </div>
        <p className="md:text-2xl text-base font-bold text-gray-500 md:p-4 pl-2">
          Monitor your data analytics to increase revenue for platforms.
        </p>
        <Button props={"Get Started"} />
      </div>
    </div>
  );
};

export default Hero;
