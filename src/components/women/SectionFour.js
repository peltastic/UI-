import React from "react";
import BgImg from "../../assets/women/sectionfour.svg";
import MarkImg from "../../assets/women/doublemark.svg";

function SectionFour() {
  return (
    <section className="bg-color1 text-color2 sm:mt-[30rem] mid:mt-[40rem] relative  h-[60vh] mid:h-[80vh] xl:h-screen overflow-hidden">
      <div className="w-full mt-[10rem] text-center">
        <h1 className="text-[4rem]">
          <span>I think there is beauty in everything</span>
          <br />
          <span>What 'normal' people perceive as</span>
          <br />
          <span>ugly, I can usually see something of</span>
          <br />
          <span> beauty in it</span>
        </h1>
        <h2 className=" mt-[4rem] text-xl">Alexander McQueen: Designer</h2>
        <div className=" mx-auto w-[10rem]">
          <img src={MarkImg} alt="" className="mx-auto w-full" />
        </div>
      </div>
      <div className="absolute -right-[35rem] w-[70rem] -top-[35rem]">
        <img src={BgImg} alt="" className="w-full" />
      </div>
      <div className="absolute -left-[43rem] w-[90rem] -bottom-[43rem]">
        <img src={BgImg} alt="" className="w-full" />
      </div>
    </section>
  );
}

export default SectionFour;
