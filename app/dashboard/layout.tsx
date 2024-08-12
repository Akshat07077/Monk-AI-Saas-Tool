import React from "react";
import Sidebar from "./_items/Sidebar";
import Header from "./_items/Header";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="md:w-64 hidden md:block fixed ">
        <Sidebar />
      </div>
      <div className="md:ml-64 ">
        <Header />
        {children}
      </div>
    </>
  );
}
