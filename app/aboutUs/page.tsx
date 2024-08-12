import React from "react";
import About from "./_components/About";
import Header from "../Home/_components/Header";
import Cta from "../Home/_components/Cta";
import Footer from "../Home/_components/Footer";
import SectionMid from "./_components/SectionMid";

function Page() {
  return (
    <div>
      <Header />
      <About />
      <SectionMid />
      <Cta />
      <Footer />
    </div>
  );
}

export default Page;
