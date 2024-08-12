"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { SignOutButton, useAuth } from "@clerk/nextjs";

function Header(onSearchInput: any) {
  const [isOpen, setIsOpen] = useState(false);
  const { isSignedIn } = useAuth();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4 h-24 border-b-0 shadow-sm shadow-violet-900 border-slate-500 flex justify-between items-center">
      <div className="flex p-4 gap-8 ml-10 h-10 items-center rounded-3xl text-white outline-none">
        <h2 className="glow-h2 text-3xl">MonkAI</h2>

        <div className="hidden md:flex gap-4">
          <Button
            className="ml-20 btn-gradient hover:scale-105 hover:text-white"
            variant="ghost"
          >
            <a href="/">Home</a>
          </Button>
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
          {!isSignedIn && (
            <Button
              className="bg-transparent border hover:scale-105 hover:text-white rounded-3xl w-[15vh]"
              variant="ghost"
            >
              <a href="/dashboard">Login</a>
            </Button>
          )}
          {isSignedIn && (
            <Button
              className="bg-transparent border hover:scale-105 hover:text-white rounded-3xl w-[15vh]"
              variant="ghost"
            >
              <SignOutButton />
            </Button>
          )}
          <Button
            className="bg-slate-500 border hover:scale-105 hover:bg-slate-600 hover:text-white rounded-3xl"
            variant="ghost"
          >
            <a href="mailto:messageakshat@gmail.com"> Contact Us</a>{" "}
          </Button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="fixed top-0 right-0 w-64 h-full text-white bg-gray-900 shadow-xl z-50 flex flex-col items-start p-4"
        >
          <button onClick={toggleSidebar} className="self-end mb-6 text-white">
            <X size={24} />
          </button>
          <Button
            className="btn-gradient hover:scale-105 hover:text-white mt-4"
            variant="ghost"
          >
            <a href="/">Home</a>
          </Button>
          <Button
            className="btn-gradient hover:scale-105 hover:text-white mt-4"
            variant="ghost"
          >
            <a href="/dashboard">Dashboard</a>
          </Button>
          <Button
            className="btn-gradient hover:scale-105 hover:text-white mt-4"
            variant="ghost"
          >
            <a href="/testimonialSection">Testimonials</a>
          </Button>
          <Button
            className="btn-gradient hover:scale-105 hover:text-white mt-4"
            variant="ghost"
          >
            <a href="/aboutUs">About us</a>
          </Button>
          {!isSignedIn && (
            <Button
              className="bg-transparent border mt-5 hover:scale-105 hover:text-white rounded-3xl w-[15vh]"
              variant="ghost"
            >
              <a href="/dashboard">Login</a>
            </Button>
          )}
          {isSignedIn && (
            <Button
              className="bg-transparent border mt-5 hover:scale-105 hover:text-white rounded-3xl w-[15vh]"
              variant="ghost"
            >
              <SignOutButton />
            </Button>
          )}
          <Button
            className="bg-slate-500 border hover:scale-105 hover:bg-slate-600 hover:text-white rounded-3xl w-full mt-4"
            variant="ghost"
          >
            <a href="mailto:messageakshat@gmail.com"> Contact Us</a>{" "}
          </Button>
        </motion.div>
      )}
    </div>
  );
}

export default Header;
