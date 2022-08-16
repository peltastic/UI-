import React from "react";
import SectionTwoImg from "../../assets/women/sectiontwo.png";
import Marquee from "react-fast-marquee";

function SectionTwo() {
  return (
    <section className="relative">
      <div className="bg-color1 text-[#fff] py-2 flex justify-between w-full">
        <Marquee gradient={false}>
          <p className="text-white mr-[5rem] text-3xl">
            THE PRESENT IS FEMALE: THE DESIGNERS BEHIND A FASHION REVOLUTION
          </p>
          <p className="text-white text-3xl mr-[5rem]">
            THE PRESENT IS FEMALE: THE DESIGNERS BEHIND A FASHION REVOLUTION
          </p>
        </Marquee>
      </div>
      <div className="absolute top-0 z-[-1]">
        <img src={SectionTwoImg} alt="" className="w-full" />
      </div>
      <div className="relative mt-[5rem] xs:mt-[20rem] px-[5rem] sm:px-[10rem] z-10">
        <div className="flex items-center mb-8">
          <div className="w-[1.5rem] h-[1.5rem] bg-color1 mr-4"></div>
          <p className=" text-primary text-2xl relative block z-10">
            CRAFTMANSHIP
          </p>
        </div>

        <h1 className="text-primary text-[4rem] xs:text-[6rem] sm2:text-[11rem] ml-[1rem] mid:ml-[5rem] lh-2">
          <span>Real Women</span>
          <br />
          <span>Fashion State,</span>
          <br />
          <span>Insidious</span>
          <br />
          <span>whispering of</span>
          <br />
          <span>male</span>
        </h1>

        <div className="flex flex-wrap mb-[70rem] mt-24 w-full sm:w-[85%] mid2:w-[70%] text-primary">
          <div className=" flex items-center xs:block xs:border-r border-color1 w-full xs:w-[50%] pt-2 pb-[6rem] pr-[4rem]">
            <p className=" hidden xxs:block mr-[3rem] xs:mr-0 text-left xs:text-right text-2xl">
              <span>Still, what we never reckoned with then was the</span>
              <br />
              <span>notion that the achievement of women designers</span>
              <br />
              <span>today would amount to a reshaping of the industry—</span>
              <br />
              <span>
                not by fitting in with male-led corporate rules but by
              </span>
              <br />
              <span>steadily ignoring them, trusting their own instincts,</span>
              <br />
              <span>living how they wish, and opening wide the creative</span>
              <br />
              <span>space for a whole generation to thrive.</span>
            </p>
            <button className="float-right mt-12 border border-primary px-8 py-4 text-2xl ">
              Discover More
            </button>
          </div>
          <div className="pl-0 xs:pl-[4rem]  pb-[6rem]">
            <h1 className="text-[3rem]">
              <span>They're defying the</span>
              <br />
              <span>norm and redefining</span>
              <br />
              <span>what it means to be</span>
              <br />
              <span>beautiful</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
