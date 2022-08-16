import React from "react";
import Logo from "../../assets/women/logo.png";

function Nav() {
  return (
    <nav className="flex items-center  px-[3rem]">
      <div className=" ml-[5rem] mr-auto h-[5rem]">
        <img src={Logo} alt="logo" className="h-full w-full" />
      </div>
      <ul className="flex mr-[7rem] items-center text-primary text-xl">
        <li className="mx-[3rem]">
          <a href="#" className=" border-b py-1 border-color1">Collection</a>
        </li>
        <li className="mx-[3rem]">
          <a href="#">LookBook</a>
        </li>
        <li className="mx-[3rem]">
          <a href="#">About</a>
        </li>
      </ul>
      <div className=" h-[4rem] mt-[2rem] relative">
        <div className=" w-[2rem] absolute top-1 right-0 h-[1px] bg-primary"></div>
        <div className=" w-[1.5rem]  absolute  top-3 right-0 h-[1px] bg-primary"></div>
        <div className=" w-[1rem] = absolute top-5 right-0 h-[1px] bg-primary"></div>
      </div>
    </nav>
  );
}

export default Nav;
