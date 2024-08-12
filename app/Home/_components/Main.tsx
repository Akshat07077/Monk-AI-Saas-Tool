import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import Image from "next/image";
import React from "react";

function Main() {
  return (
    <div className="p-10 flex gap-[40vh]  items-center">
      <div className="w-full md:w-[50%] mt-[5vh] md:mt-[10vh] ml-4 md:ml-20 text-center md:text-left flex flex-col">
        <h1 className="home-head text-[5vh] md:text-[8vh]">
          Welcome to MONK-AI
        </h1>
        <h1 className="home-head text-[3vh] md:text-[8vh]">
          we sound like you
        </h1>
        <p className="text-white mt-3 md:mt-5 text-[10px] md:text-[12px]">
          At MONK-Ai you'll find the best usecase of AI in respect to content
          writing and other such usefull templates. You'll get free 50,000
          words.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-14 items-center justify-center md:justify-start mt-6 md:mt-10">
          <Button
            variant="ghost"
            className="bg-slate-400 hover:bg-slate-500 h-10 md:h-12 text-white w-32 md:w-40 rounded-3xl"
          >
            <a href="/dashboard">Get Started</a>
          </Button>
          <Button
            variant="ghost"
            className="bg-transparent border h-10 md:h-12 text-white w-32 md:w-40 rounded-3xl"
          >
            <a href="/aboutUs">Learn More</a>
          </Button>
        </div>
      </div>

      <div className=" md:block hidden hover:animate-pulse">
        <Image
          src="/mainn.png"
          height={200}
          width={100}
          alt="Logo"
          className="head-img h-[70vh]  w-full object-cover"
        />
      </div>
    </div>
  );
}

export default Main;
