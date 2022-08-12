import React from "react";
import HeroImg from "../../assets/women/heroImg.png";
import BadgeImg from "../../assets/women/badge.svg";
import videoImg from "../../assets/women/video.png";

function Header() {
  return (
    <header className="w-full relative ">
      <h1 className="absolute text-color1 opacity-10 text-[25rem] top-[7rem] -left-[10rem] block -rotate-90">
        2021
      </h1>
      <div className="h-full mt-[3rem] relative w-[70%] mx-auto">
        <div className="flex">
          <h2 className="text-primary no-lh text-[7rem] ml-[15rem]">FOR.</h2>
          <h2 className="text-[12rem] -mb-[10rem] no-lh ml-[1rem] text-color2">
            every
          </h2>
        </div>
        <div className="ml-[5rem]">
          <h1 className="text-[25rem] no-lh text-color1">Woman</h1>
          <h3 className="text-primary text-2xl mt-10 ml-16">
            LATEST COLLECTION
          </h3>
        </div>
        <div className="w-[60rem] ml-[23rem] -mt-[15rem]">
          <img src={HeroImg} alt="hero" className="w-full" />
        </div>
      </div>
      <div className="absolute top-0 right-[3rem] w-[12rem]">
        <img src={BadgeImg} alt="badge" className="w-full" />
      </div>
      <div className="absolute bottom-[4rem] flex right-[1rem]">
        <div className="w-[10rem] mr-[3rem]">
          <img src={videoImg} alt="badge" className="w-full" />
        </div>
        <p className="text-primary -rotate-90">Watch Video</p>
      </div>
    </header>
  );
}

export default Header;
