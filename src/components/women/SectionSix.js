import React from "react";
import SectionSixImg from "../../assets/women/sectionsix.png";
import PlayImg from "../../assets/women/play.svg";
import Card1Img from "../../assets/women/card1.png";
import Card2Img from "../../assets/women/card2.png";
import Card3Img from "../../assets/women/card3.png";

function SectionSix() {
  const cartData = [
    {
      year: 2019,
      collection: true,
      button: false,
      Image: Card1Img,
      color: true,
      shadow: true,
      class: "mt-[20rem]",
    },
    {
      year: 2020,
      collection: false,
      button: false,
      Image: Card2Img,
      class: "mt-[10rem]",
    },
    {
      year: 2021,
      collection: false,
      button: true,
      Image: Card3Img,
    },
  ];
  return (
    <section className="mt-[20rem] w-full">
      <div className=" mx-auto w-full sm:w-[80%] -mt-[15rem] justify-center items-end flex">
        <h1 className="text-primary text-3xl xs:text-4xl text-right">
          <span>Peter Do Announces His First New York</span>
          <br />
          <span>Fahion Week Runaway Show</span>
        </h1>
        <div className=" w-[30rem] sm:w-[40rem] relative ml-12">
          <img src={SectionSixImg} alt="six" className="w-full" />
          <div className="absolute bottom-4 right-4 w-16">
            <img src={PlayImg} alt="play" className="w-full" />
          </div>
        </div>
      </div>
      <div className="mx-auto pl-4 xxs:pl-[10rem] w-auto">
        <h1 className="mt-[15rem] sm:mt-[25rem] flex items-start">
          <span className="text-[3rem] xxs:text-[4rem] sm:text-[6rem] ml-16 text-primary">
            FOR.
          </span>
          <span className="text-[5rem] xxs:text-[7rem] sm:text-[13rem] block mt-0 mid2:-mt-[3rem] ml-6 sm:ml-12 text-color2">
            future
          </span>
        </h1>
        <div className="">
          <h1 className="ml-11 xxs:ml-0 text-color1 text-[9rem] xxs:text-[15rem] sm:text-[20rem] mid2:text-[29rem] -mt-[6rem] xxs:-mt-[9rem] sm:-mt-[12rem] mid2:-mt-[19rem]">
            Couture
          </h1>
          <p className="text-primary mb-[4rem] sm:mb-0 text-right mr-[25rem] sm:mr-[45rem] mid2:mr-[25rem] text-3xl mt-0 xxs:-mt-[3rem] mid2:-mt-[6rem]">
            LATEST COLLECTIONS
          </p>
        </div>
        <p className="text-primary ml-[5rem] xxs:ml-0 text-2xl xxs:text-3xl sm:text-5xl mt-6">
          <span>With the young leading the charge against giant</span>
          <br />
          <span>corporations, the appeal of small labels with big</span>
          <br />
          <span>visions will only grow.</span>
        </p>
      </div>

      <div className="w-full flex px-1 xxs:px-[5rem] sm:px-[10rem] justify-around mt-[5rem] ">
        {cartData.map((item, index) => {
          return (
            <div
              key={index}
              className={`${item.class} w-[30%] bg-color2 h-[40rem] xxs:h-[45rem] sm:h-[65rem] max-h-[1000px]  relative `}
            >
              {item.shadow ? (
                <div className="bg-[#7070702e] hidden xxs:block w-full h-full absolute -left-[3rem] -bottom-[3rem] z-[-1]"></div>
              ) : null}
              <div className="absolute right-0 top-0  w-[80%]">
                <div className="absolute -left-[7rem] sm:-left-[10rem] top-[8rem]">
                  <p
                    className={`${
                      item.color ? null : "opacity-30"
                    } -rotate-90  text-color1 text-[7rem] sm:text-[10rem]`}
                  >
                    {item.year}
                  </p>
                </div>
                <img src={item.Image} alt="" className="w-full h-full" />
                {item.collection ? (
                  <>
                    <div className="text-primary -ml-[2rem] -mt-[5rem] sm:-mt-[10rem]">
                      <p className="ml-[4rem]">Check out tour</p>
                      <p className="text-[3rem] sm:text-[5rem]">Collection</p>
                    </div>
                    <div className="w-full mt-8 px-8 flex justify-end">
                      <svg
                        className="w-32"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 68.204 25.408"
                      >
                        <g id="ico_arrow" transform="translate(-462 -8921.796)">
                          <line
                            id="Line_5"
                            data-name="Line 5"
                            x2="67"
                            transform="translate(462.5 8934.5)"
                            fill="none"
                            stroke="#be6c42"
                            stroke-linecap="round"
                            stroke-width="1"
                          />
                          <line
                            id="Line_6"
                            data-name="Line 6"
                            x2="10"
                            y2="12"
                            transform="translate(519.5 8922.5)"
                            fill="none"
                            stroke="#be6c42"
                            stroke-linecap="round"
                            stroke-width="1"
                          />
                          <line
                            id="Line_7"
                            dataName="Line 7"
                            y1="12"
                            x2="10"
                            transform="translate(519.5 8934.5)"
                            fill="none"
                            stroke="#be6c42"
                            strokeLinecap="round"
                            strokeWidth="1"
                          />
                        </g>
                      </svg>
                    </div>
                  </>
                ) : null}
                {item.button ? (
                  <button className="mt-[30rem] w-[120%] xxs:w-auto text-primary border-primary border text-xl py-4 px-10 float-right">
                    Browse Collections
                  </button>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SectionSix;
