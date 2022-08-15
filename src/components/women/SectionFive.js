import React from "react";
import SectionFiveImg from "../../assets/women/sectionfive.png";
import BadgeImg from "../../assets/women/badge.svg";

function SectionFive() {
  return (
    <section className="relative ">
      <div className="w-full absolute z-[-1] left-0 top-0">
        <img src={SectionFiveImg} alt="w-full" />
      </div>
      <div className="absolute top-[5rem] sm:top-[20rem] pl-[4rem] pb-[5rem] border-color1 border-l right-[10rem] sm:right-[20rem]">
        <div className="w-[13rem]">
          <img src={BadgeImg} alt="badge" className="w-full" />
        </div>
        <p className="text-primary text-xl mt-8">
          <span>Women inspired and drove our</span>
          <br />
          <span>designers when creating this</span>
          <br />
          <span>collection</span>
        </p>
      </div>
      <div className="w-full text-center pt-[15rem] sm:pt-[30rem]">
        <h1 className="text-[12rem] sm:text-[17rem] mid2:text-[25rem] text-color1 -ml-[25rem] ">Look</h1>
        <h1 className="text-[12rem] sm:text-[17rem] mid2:text-[25rem] ml-[12rem] sm:ml-[25rem] mid2:ml-[32rem] mb-[5rem] mid2:mb-0 text-color1dark -mt-[8rem] sm:-mt-[10rem] mid2:-mt-[16rem]">
          book
        </h1>
        <h2 className="text-[5rem] -mt-[7rem]">
          <span className="text-color2 mr-[2rem]">FOR.</span>
          <span className="text-primary">your darling</span>
        </h2>
        <button className="text-primary py-4 text-[1.1rem] px-8 border mt-[13rem] sm:mt-[20rem]  border-primary">
          Check out our Lookbook
        </button>
      </div>
    </section>
  );
}

export default SectionFive;
