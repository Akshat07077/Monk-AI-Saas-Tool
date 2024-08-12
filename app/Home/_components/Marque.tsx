import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import MarquesItem from "./MarquesItem";
import { Button } from "@/components/ui/button";
import { max } from "moment";

function Marque() {
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });
  const Marqueeref = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (Marqueeref.current) {
      const rect = Marqueeref.current.getBoundingClientRect();
      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (isInside) {
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setGradientPosition({ x, y });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const gradientStyle = {
    background: `radial-gradient(circle at ${gradientPosition.x * 100}% ${
      gradientPosition.y * 100
    }%, #a770ef 1%, transparent 5%)`,
  };

  return (
    <div
      ref={Marqueeref}
      className="mt-8 shadow-lg shadow-violet-900 flex flex-col md:flex-row justify-between w-full items-center h-[60vh] md:h-[85vh] mb-10"
      style={gradientStyle}
    >
      <div className="items-center justify-center md:p-20 text-center md:flex flex-col">
        <h1 className="text-center mt-5 home-head md:text-[8vh] text-[5vh]">
          At MONK-AI
        </h1>
        <h1 className="text-center home-head md:text-[8vh] text-[5vh]">
          we have best use-cases
        </h1>
        <p className="text-white mt-5 p-5 md:p-0 text-[12px]">
          At MONK-AI there are 30+ templates, including Content Wrting, Code
          generator, Grammer Checker, Lryics Maker and many more templates .
        </p>
        <div className="flex gap-5 md:gap-14 items-center justify-center mt-10">
          <Button
            variant="ghost"
            className="bg-slate-400 hover:bg-slate-500  h-12 text-white w-40 rounded-3xl"
          >
            <a href="/dashboard" className="w-40">
              Dashboard
            </a>
          </Button>
          <Button
            variant="ghost"
            className="bg-transparent border h-12 text-white w-40 rounded-3xl "
          >
            <a href="/aboutUs">Learn More</a>
          </Button>
        </div>
      </div>
      <div>
        <div className="mt-10 md:hidden">
          {" "}
          <Marquee
            style={{
              width: "100vw",
              marginBottom: "30px",
            }}
            direction="right"
            className="visible md:invisible items-center text-violet-200 bg-[#892be21a] text-2xl "
          >
            <MarquesItem
              imageSrc="https://cdn-icons-png.flaticon.com/128/4186/4186534.png"
              title="Blog Generator"
            />
            <MarquesItem
              imageSrc="https://cdn-icons-png.flaticon.com/128/6062/6062646.png"
              title="HTML Generator"
            />
            <MarquesItem
              imageSrc="https://cdn-icons-png.flaticon.com/128/10650/10650851.png"
              title="Grammer Corrector"
            />
            <MarquesItem
              imageSrc="https://cdn-icons-png.flaticon.com/128/4646/4646888.png"
              title="Lyrics Generator"
            />
            <MarquesItem
              imageSrc="https://cdn-icons-png.flaticon.com/128/2013/2013695.png"
              title="Testimonials Generator"
            />
            <MarquesItem
              imageSrc="https://cdn-icons-png.flaticon.com/128/3696/3696638.png"
              title="Content Improver"
            />
          </Marquee>
        </div>{" "}
        <div className="hidden md:block">
          {" "}
          <Marquee
            style={{
              lineHeight: "1.5",
              width: "40vw",
              marginBottom: "20px",
            }}
            direction="down"
            className="md:visible md:h-[62vh] items-center text-violet-200 bg-[#892be21a] text-2xl "
          >
            <MarquesItem
              imageSrc="https://cdn-icons-png.flaticon.com/128/4186/4186534.png"
              title="Blog Generator"
            />
            <MarquesItem
              imageSrc="https://cdn-icons-png.flaticon.com/128/6062/6062646.png"
              title="HTML Generator"
            />
            <MarquesItem
              imageSrc="https://cdn-icons-png.flaticon.com/128/10650/10650851.png"
              title="Grammer Corrector"
            />
            <MarquesItem
              imageSrc="https://cdn-icons-png.flaticon.com/128/4646/4646888.png"
              title="Lyrics Generator"
            />
            <MarquesItem
              imageSrc="https://cdn-icons-png.flaticon.com/128/2013/2013695.png"
              title="Testimonials Generator"
            />
            <MarquesItem
              imageSrc="https://cdn-icons-png.flaticon.com/128/3696/3696638.png"
              title="Content Improver"
            />
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Marque;
