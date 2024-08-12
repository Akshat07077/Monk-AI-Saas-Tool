"use client";
import { DashIcon } from "@radix-ui/react-icons";
import {
  CodeIcon,
  History,
  Wallet2,
  Settings,
  LogOutIcon,
  Home,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Usagetrack from "./Usagetrack";
import { SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

function Sidebar({ isOpen, toggleSidebar }: any) {
  const Menulist = [
    {
      name: "Home",
      icon: Home,
      path: "/",
    },
    {
      name: "Dashboard",
      icon: CodeIcon,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: History,
      path: "/dashboard/history",
    },
    {
      name: "Account",
      icon: Wallet2,
      path: "/dashboard/account",
    },
  ];

  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div
      style={{
        width: "30vh",
        padding: "10px",
      }}
      className={`fixed top-0 left-0 h-screen bg-gray-900 shadow-lg shadow-slate-600 z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between p-4">
        <Image
          src={"/logo.png"}
          alt="logo"
          height={240}
          width={140}
          className="mt-10"
        />
      </div>
      <div className="text-white mt-10">
        {Menulist.map((item, index) => (
          <div
            key={index}
            className={`flex p-3 gap-2 mt-2 mb-2 hover:bg-[#8a2be2] rounded-lg ${
              path == item.path && "bg-[#8a2be2]"
            }`}
          >
            <item.icon />
            <h2>
              <a href={item.path}>{item.name}</a>
            </h2>
          </div>
        ))}
        <div className="flex p-3 gap-2 mt-2 mb-2 hover:bg-[#8a2be2] rounded-lg">
          <LogOutIcon />
          <SignOutButton />
        </div>
      </div>
      <div className="mb-10">
        <Usagetrack />
      </div>
      +
    </div>
  );
}

export default Sidebar;
