import React from "react";
import Laptop from "../assets/laptop.jpg";
import Button from "./Button";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="/" className="w-[500px] mx-auto py-4" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">WEB3 ANALYTICS DASHBOARD</p>
          <h1 className="md:text-3xl sm:text-2xl text-xl font-bold py-2">
            Merge data analytics dashboard
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
            recusandae possimus voluptatem beatae corporis quas, asperiores
            blanditiis voluptatum mollitia quia, ex, fuga et modi pariatur velit
            quaerat placeat aperiam dolore! Expedita vel, esse saepe voluptatum
            at quaerat.
          </p>
          <Button props={"Get Enrolled"} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
