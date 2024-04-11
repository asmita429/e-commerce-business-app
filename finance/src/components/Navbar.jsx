import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      className="flex justify-between items-center h-24
        max-w-[1240px] mx-auto p-4 text-white border-b-2 rounded-3xl border-b-gray-700 "
    >
      <img
        src="https://www.datocms-assets.com/105223/1701819587-logo.svg"
        alt=""
        className="h-10 w-[18%] bg-gradient-to-r from-emerald-400 to-blue-100 rounded"
      />

      <ul className="hidden md:flex">
        <li className="p-4 mr-2 cursor-pointer border-b-2 rounded-md border-b-emerald-600 hover:border-y-2 hover:border-y-emerald-500">
          Company
        </li>
        <li className="p-4 mr-2 cursor-pointer border-b-2 rounded-md border-b-emerald-600 hover:border-y-2 hover:border-y-emerald-500">
          Home
        </li>
        <li className="p-4 mr-2 cursor-pointer border-b-2 rounded-md border-b-emerald-600 hover:border-y-2 hover:border-y-emerald-500">
          Resources
        </li>
        <li className="p-4 mr-2 cursor-pointer border-b-2 rounded-md border-b-emerald-600 hover:border-y-2 hover:border-y-emerald-500">
          About
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4 text-[#00df9a]">REACT</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600 ">Home</li>
          <li className="p-4 border-b border-gray-600 ">Company</li>
          <li className="p-4 border-b border-gray-600 ">Resources</li>
          <li className="p-4 border-b border-gray-600 ">About</li>
          <li className="p-4 border-b border-gray-600 ">Hello</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
