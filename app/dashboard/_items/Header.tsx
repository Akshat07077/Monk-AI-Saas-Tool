"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="p-4 h-24 border-b-0 shadow-sm shadow-violet-900 border-slate-500 flex justify-between items-center">
        <div className="flex p-4 gap-8 ml-10 h-10 items-center rounded-3xl text-white outline-none">
          <h2 className="glow-h2 text-3xl">
            <a href="/">MonkAI</a>
          </h2>

          <div className="hidden md:flex gap-4">
            <Button
              className="btn-gradient hover:scale-105 hover:text-white"
              variant="ghost"
            >
              <a href="/dashboard">Dashboard</a>
            </Button>
            <Button
              className="btn-gradient hover:scale-105 hover:text-white"
              variant="ghost"
            >
              <a href="/testimonialSection">Testimonials</a>
            </Button>
            <Button
              className="btn-gradient hover:scale-105 hover:text-white"
              variant="ghost"
            >
              <a href="/aboutUs">About us</a>
            </Button>
          </div>
        </div>

        <div className="text-white gap-8 flex mr-20">
          <div className="hidden md:flex gap-4">
            <Button
              className="bg-slate-500 border hover:scale-105 hover:bg-slate-600 hover:text-white rounded-3xl"
              variant="ghost"
            >
              Contact Us
            </Button>
          </div>
          {/* Sidebar Toggle Button only visible on mobile */}
          <div className="md:hidden">
            <button onClick={toggleSidebar} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Integration */}
      {/* Always show on desktop, toggle on mobile */}
      <div className="hidden md:block">
        <Sidebar isOpen={true} />
      </div>
      <div className="md:hidden">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </div>
    </>
  );
}

export default Header;
