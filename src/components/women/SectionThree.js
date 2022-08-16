import React from "react";
import SectionThreeImg from "../../assets/women/sectionthree.png";

function SectionThree() {
  return (
    <section className="h-[30vh] xs:h-[40vh] relative">
      <div className="absolute ml-[5rem] sm:ml-[12rem] mid:ml-[25rem] text-primary -top-[55rem] mid2:-top-[45rem]">
        <div className="flex items-center mb-8">
          <div className="w-[1.5rem] h-[1.5rem] bg-color1 mr-4"></div>
          <h2 className="text-2xl">BLOG ARTICLE</h2>
        </div>
        <h1 className="text-[8rem] xxs:text-[13rem] sm:text-[20rem] mid2:text-[25rem] -mt-[2rem] sm:-mt-[10rem]">
          Big
        </h1>
        <h1 className="text-[9rem] xxs:text-[13rem] sm:text-[20rem] mid2:text-[25rem] text-color1 ml-[5rem] xxs:ml-[8rem] sm:ml-[12rem] mid2:ml-[17rem] -mt-[6rem] xxs:-mt-[8rem] sm:-mt-[13rem] mid2:-mt-[17rem]">
          beauty
        </h1>
        <div className="flex flex-wrap w-[100%] mt-[3rem] xxs:mt-[6rem] xs:mt-0  mb-[20rem] text-primary">
          <div className=" w-[100%] xs:w-[40%] sm:w-[45%] border-r text-3xl xxs:text-5xl border-color1 pr-[7rem] xxs:pr-[4rem]  pb-[6rem]">
            <p className="text-right mb-2 ">Why does the Beauty Industry</p>
            <p className="text-right">Ignore Curvy Models</p>
            <button className="float-right mt-[5rem] xs:mt-[13rem] border border-primary px-8 py-4 text-2xl ">
              Discover More
            </button>
          </div>
          <div className="w-[90%] xs:w-[60%] mid:w-[50%] pb-4 pl-[4rem]">
            <p className="text-3xl mid:text-lg mt-[5rem] xxs:mt-4 xs:mt-[19rem]">
              <span>
                People often cite the 1950s as a time when curviness was in, but
              </span>
              <br className="hidden xs:block" />
              <span>
                that’s not entirely true,” said Elizabeth Wissinger, author of
              </span>
              <br  className="hidden xs:block"/>
              <span>
                “This Year’s Model” and a professor of fashion studies at the
                City
              </span>
              <br  className="hidden xs:block"/>
              <span>
                University of New York’s Graduate Center. “Yes, curvy bodies
                were
              </span>
              <br  className="hidden xs:block"/>
              <span>
                popular, but the people had those achievable, accessible
              </span>
              <br  className="hidden xs:block"/>
              <span>
                physiques, represented by movie stars like Marilyn Monroe.
                Fashion
              </span>
              <br  className="hidden xs:block"/>
              <span>was still very separate and models were thin.</span>
            </p>
          </div>
        </div>

        <div className="w-[35rem] xxs:w-[50rem] sm:w-[70rem] absolute top-[7rem] xxs:top-[13rem] sm:top-[10rem] mid2:top-[20rem] left-[9rem] z-[-1]">
          <img src={SectionThreeImg} alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
