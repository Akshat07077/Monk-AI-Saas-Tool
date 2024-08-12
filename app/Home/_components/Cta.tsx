"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

function Cta() {
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });
  const ctaRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (ctaRef.current) {
      const rect = ctaRef.current.getBoundingClientRect();
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
    }%, #a770ef 5%, transparent 10%)`,
  };

  return (
    <div ref={ctaRef} className="h-[60vh] md:h-[70vh]" style={gradientStyle}>
      <div className="mt-20 text-center items-center justify-center flex flex-col overflow-hidden">
        <h1 className="text-[5vh] md:text-[8vh] md:w-[100vh] text-center items-center glow-h2">
          Ready to unleash your writing with lightning-fast speed?
        </h1>
        <p className="w-[30vh] md:w-[50%] text-sm text-slate-300 text-center mt-5">
          Monk AI is a AI SaaS tool specifically tailored for Content Creating.
          It leverages advanced Technology to automate and expedite tasks,
          improve decision-making, and deliver tangible results.
        </p>
      </div>
      <div className="flex gap-5 md:gap-14 items-center justify-center mt-10">
        <Button
          variant="ghost"
          className="bg-slate-400 hover:bg-slate-500 h-12 text-white w-40 rounded-3xl"
        >
          <a href="/sign-in">Get Started</a>
        </Button>
        <Button
          variant="ghost"
          className="bg-transparent border h-12 text-white w-40 rounded-3xl"
        >
          <a href="/aboutUs">Learn More</a>
        </Button>
      </div>
    </div>
  );
}

export default Cta;
