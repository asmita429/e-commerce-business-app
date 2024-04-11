import React from "react";
import Button from "./Button";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-3xl sm:text-2xl text-xl">
            Whant tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="mr-3 p-3 flex w-full rounded-md text-black"
            />
            <Button props={"Get Notified"} />
          </div>
          <p>
            We care about the protection of your data. Read out{" "}
            <span className="text-[#00df9a] cursor-pointer">
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
