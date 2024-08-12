import Image from "next/image";
import React from "react";

interface MarqueeProp {
  imageSrc: string;
  title: string;
}

function MarquesItem({ imageSrc, title }: MarqueeProp) {
  return (
    <div className="flex md:flex-col justify-center items-center gap-4">
      <Image src={imageSrc} alt="logo" height={10} width={50} className="" />
      <h1 className="home-head">{title}</h1>
    </div>
  );
}

export default MarquesItem;
