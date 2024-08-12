"use client";

import { Button } from "@/components/ui/button";
import Dashboard from "./dashboard/page";
import Header from "./Home/_components/Header";
import Main from "./Home/_components/Main";
import SectionMid from "./Home/_components/SectionMid";
import Features from "./Home/_components/Features";
import Cta from "./Home/_components/Cta";
import Footer from "./Home/_components/Footer";
import MouseTrailer from "./Home/_components/MouseTrailer";
import Marque from "./Home/_components/Marque";

export default function Home() {
  return (
    <div className="cursor-default">
      <MouseTrailer />
      <Header />
      <Main />
      <SectionMid />
      <Marque />
      <Features />
      <Cta />
      <Footer />
    </div>
  );
}
