import React from "react";
import HeroImg from "../../assets/women/heroImg.png";
import BadgeImg from "../../assets/women/badge.svg";
import videoImg from "../../assets/women/video.png";

function Header() {
  return (
    <header className="w-full relative h-[90vh] sm2:h-auto">
      <h1 className="absolute text-color1 opacity-10 text-[25rem] top-[30%] sm2:top-[7rem] -left-[15rem] sm:-left-[10rem] block -rotate-90">
        2021
      </h1>
      <div className="h-full mt-[3rem] relative w-full xs:w-[70%] mx-auto">
        <div className="absolute left-[50%] sm:left-0 -translate-x-[50%] sm:translate-x-0 top-[20%] sm2:relative">
          <div className="flex ">
            <h2 className="text-primary no-lh text-[5rem] xs:text-[7rem] ml-[5rem] sm:ml-[15rem]">FOR.</h2>
            <h2 className="text-[7rem] xs:text-[12rem] -mb-[10rem] no-lh ml-[1rem] text-color2">
              every
            </h2>
          </div>
          <div className="  sm:ml-[5rem]">
            <h1 className="text-[15rem] xs:text-[20rem] sm2:text-[25rem] no-lh text-color1">
              Woman
            </h1>
            <h3 className="text-primary text-2xl mt-10 ml-16">
              LATEST COLLECTION
            </h3>
          </div>
        </div>
        <div className="w-[60rem] sm2:ml-[23rem] right-0 sm:right-[10%] bottom-0 absolute sm2:relative -mt-[15rem]">
          <img src={HeroImg} alt="hero" className="w-full" />
        </div>
      </div>
      <div className="absolute top-0 right-[50%] translate-x-[50%] sm2:translate-x-0 sm2:right-[3rem] w-[12rem]">
        <img src={BadgeImg} alt="badge" className="w-full" />
      </div>
      <div className="absolute bottom-[4rem] flex xs:right-[1rem]">
        <div className="w-[10rem] mr-[3rem]">
          <img src={videoImg} alt="badge" className="w-full" />
        </div>
        <p className="text-primary -rotate-90">Watch Video</p>
      </div>
    </header>
  );
}

export default Header;
