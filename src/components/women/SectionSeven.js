import React from "react";
import BadgeImg from "../../assets/women/badge2.svg";

function SectionSeven() {
  return (
    <section className="text-color2 text-center bg-color1 py-[10rem] mt-[20rem]">
      <div className="w-[10rem] mx-auto mb-16">
        <img src={BadgeImg} alt="badge" className="w-full" />
      </div>
      <p className="  text-2xl mb-16">
        SHAPES TRADED BETWEEN SLOUCHY AND BLOUSON AND UTTERLY SLEEK, WITH ONE OF
        <br />
        THE COLLECTION'S STANDOUT GARMENT, PAIRS OF SHEER-ISH NYLON CARGO
        <br />
        PANTS, FINDING A MIDDLE GROUND BETWEEN THE TWO.
      </p>
      <a href="#" className="border-b px-[2px] tracking-widest border-[#f7e7ce6d] py-1">
        DISCOVER
      </a>
    </section>
  );
}

export default SectionSeven;
