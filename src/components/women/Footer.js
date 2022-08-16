import React from "react";
import FooterImg from "../../assets/women/footer.png";
function Footer() {
  return (
    <footer className="relative text-primary pl-[7rem] mid2:pl-[15rem]">
      <div className="absolute top-0 z-[-1] left-0">
        <img src={FooterImg} alt="" className="w-full" />
      </div>
      <h1 className=" relative z-0 tracking-widest text-color2 opacity-60 text-[10rem] xs:text-[20rem] sm:text-[30rem] sm2:text-[40rem] mid2:text-[45rem]">
        FOR.
      </h1>
      <div className="flex items-center mx-[4rem] mt-0 xs:-mt-[10rem]  sm:-mt-[23rem] mb-8">
        <div className="w-[1.5rem] h-[1.5rem] ml-[5rem] bg-color1 mr-4"></div>
        <h2 className="text-2xl relative z-10">CRAFTMANSHIP</h2>
      </div>
      <div className="flex items-center mx-[4rem] mt-7 xs:mt-[20rem]">
        <div className="mr-auto w-[40%]">
          <div className="w-full py-4 border-b border-b-color1 text-2xl">
            <h2>Want to be the first to know?</h2>
            <h2 cla>FOLLOW US ON SOCIALs</h2>
          </div>
          <div className="flex text-xl pt-[7rem] w-[30%]">
            <h1 className="pr-28">Instagram</h1>
            <h1 className="pr-28">Pinterest</h1>
            <h1>Facebook</h1>
          </div>
        </div>
        <div className="mt-10">
          <ul className="mb-24">
            <li>
              <p>FAQ</p>
            </li>
            <li>
              <p>Shipping</p>
            </li>
            <li>
              <p>Return & Refund Policy</p>
            </li>
            <li>
              <p>Contact Us</p>
            </li>
          </ul>
          <p>C 2021 FOR.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
