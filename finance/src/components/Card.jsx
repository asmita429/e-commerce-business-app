import React from "react";
import Button from "./Button";

const Card = ({ details, className }) => {
  return (
    <div
      className="w-full shadow-xl flex flex-col p-4 my-4 
      rounded-lg hover:scale-105 duration-300 bg-emerald-50"
    >
      <img
        className="w-20 mx-auto mt-[-3rem] bg-white "
        src={details.img}
        alt="single image"
      />
      <h2 className="text-2xl font-bold text-center py-8">{details.title}</h2>
      <p className="text-center text-3xl font-bold">Rs.{details.price}</p>
      <div className="text-center font-medium ">
        <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
        <p className="py-2 border-b mx-8">1 Granted User</p>
        <p className="py-2 border-b mx-8">Send up to 2GB</p>
      </div>
      <Button props={"Start Trial"} />
    </div>
  );
};

export default Card;
