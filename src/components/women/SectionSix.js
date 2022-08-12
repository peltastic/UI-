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
      <div className=" mx-auto w-[80%] -mt-[15rem] justify-center items-end flex">
        <h1 className="text-primary text-4xl text-right">
          <span>Peter Do Announces His First New York</span>
          <br />
          <span>Fahion Week Runaway Show</span>
        </h1>
        <div className="w-[40rem] relative ml-12">
          <img src={SectionSixImg} alt="six" className="w-full" />
          <div className="absolute bottom-4 right-4 w-16">
            <img src={PlayImg} alt="play" className="w-full" />
          </div>
        </div>
      </div>
      <div className="mx-auto pl-[10rem] w-auto">
        <h1 className="mt-[25rem] flex items-start">
          <span className="text-[6rem] ml-16 text-primary">FOR.</span>
          <span className="text-[13rem] block -mt-[3rem] ml-12 text-color2">
            future
          </span>
        </h1>
        <div className="">
          <h1 className="text-color1 text-[29rem] -mt-[19rem]">Couture</h1>
          <p className="text-primary text-right mr-[25rem] text-3xl -mt-[6rem]">
            LATEST COLLECTIONS
          </p>
        </div>
        <p className="text-primary text-5xl mt-6">
          <span>With the young leading the charge against giant</span>
          <br />
          <span>corporations, the appeal of small labels with big</span>
          <br />
          <span>visions will only grow.</span>
        </p>
      </div>

      <div className="w-full flex px-[10rem] justify-around mt-[5rem] ">
        {cartData.map((item, index) => {
          return (
            <div
              key={index}
              className={`${item.class} w-[30%] bg-color2 h-[65rem] max-h-[1000px]  relative `}
            >
              {item.shadow ? (
                <div className="bg-[#7070702e] w-full h-full absolute -left-[3rem] -bottom-[3rem] z-[-1]"></div>
              ) : null}
              <div className="absolute right-0 top-0  w-[80%]">
                <div className="absolute -left-[10rem] top-[8rem]">
                  <p
                    className={`${
                      item.color ? null : "opacity-30"
                    } -rotate-90  text-color1 text-[10rem]`}
                  >
                    {item.year}
                  </p>
                </div>
                <img src={item.Image} alt="" className="w-full h-full" />
                {item.collection ? (
                  <>
                    <div className="text-primary -ml-[2rem] -mt-[10rem]">
                      <p className="ml-[4rem]">Check out tour</p>
                      <p className="text-[5rem]">Collection</p>
                    </div>
                    <div className="w-full mt-8 px-8 flex justify-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="68.204"
                        height="25.408"
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
                            data-name="Line 7"
                            y1="12"
                            x2="10"
                            transform="translate(519.5 8934.5)"
                            fill="none"
                            stroke="#be6c42"
                            stroke-linecap="round"
                            stroke-width="1"
                          />
                        </g>
                      </svg>
                    </div>
                  </>
                ) : null}
                {item.button ? (
                  <button className="mt-[30rem] text-primary border-primary border text-xl py-4 px-10 float-right">
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
