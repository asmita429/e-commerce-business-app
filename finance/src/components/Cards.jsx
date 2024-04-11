import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <Card details={{ img: Single, title: "Single User", price: "199" }} />
        <Card details={{ img: Double, title: "Partnership", price: "377" }} />
        <Card details={{ img: Triple, title: "Group Account", price: "444" }} />
      </div>
    </div>
  );
};

export default Cards;
