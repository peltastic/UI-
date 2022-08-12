import React from "react";
import Nav from "../../components/women/Nav";
import Header from "../../components/women/Header";
import SectionTwo from "../../components/women/SectionTwo";
import SectionThree from "../../components/women/SectionThree";
import SectionFour from "../../components/women/SectionFour";
import SectionFive from "../../components/women/SectionFive";
import SectionSix from "../../components/women/SectionSix";
import SectionSeven from "../../components/women/SectionSeven";
import Footer from "../../components/women/Footer";
function Women() {
  return (
    <>
      <div className="w-full">
        <Nav />
        <Header />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <Footer />
      </div>
    </>
  );
}

export default Women;
