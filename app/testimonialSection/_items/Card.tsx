import Image from "next/image";
import React from "react";
interface CardSectionProps {
  imageSrc: string;
  title: string;
  description: string;
}

function Card({ imageSrc, title, description }: CardSectionProps) {
  return (
    <div className="p-10">
      <div className="text-white btn-gradient text-[2.5vh] w-[38vh] md:w-[45vh] hover:shadow-lg hover:shadow-violet-700 hover:scale-110 flex flex-col justify-center items-center p-5">
        <Image
          className="items-center object-contain rounded-full"
          src={imageSrc}
          alt=""
          height={100}
          width={100}
        />
        <h1 className="text-center mb-3 mt-2 font-bold">{title}</h1>
        <p className="text-sm text-center text-slate-200">{description}</p>
      </div>
    </div>
  );
}

export default Card;
