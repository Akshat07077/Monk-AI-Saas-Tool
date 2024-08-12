import { Search } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import Sidebar from "./Sidebar";

function Searchsection({ onSearchInput }: any) {
  return (
    <div className="p-6 md:p-0 mt-5 bg-[#181b20] flex justify-center text-center items-center flex-col font-serif  shadow-cyan-600 hover:shadow-purple-600">
      <h2 className="glow-h2 md:w-[60%] text-[5vh] md:text-[8vh] leading-0 tracking-tighter">
        AI-Powered Solutions by MONK-AI
      </h2>
      <p className="p-6 md:p-0 md:w-[50%] text-center text-white text-sm md:mt-5 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quas,
        quibusdam odio voluptatem eaque necessitatibus.
      </p>
      <div className="flex justify-center btn-gradient items-center border h-10 p-2 m-5 bg-transparent text-white rounded-3xl">
        <Search />
        <input
          onChange={(event) => onSearchInput(event.target.value)}
          type="text"
          placeholder="Browse Templates..."
          className="outline-none bg-[transparent] m-2 "
        />
      </div>
      {/* <div className='flex justify-evenly gap-12 items-center m-4 mb-8'>
              <Button className='text-white bg-transparent border hover:bg-transparent hover:text-white hover:shadow-purple-700 shadow-md shadow-slate-400 rounded-2xl hover:scale-105' variant="ghost">Try Premium Now🔥</Button>
                <Button className=' text-white bg-transparent border hover:bg-transparent hover:text-white hover:shadow-purple-700 shadow-md shadow-slate-400 rounded-2xl hover:scale-105' variant="ghost">Share Us For Credits📢</Button>
          </div> */}
    </div>
  );
}

export default Searchsection;
