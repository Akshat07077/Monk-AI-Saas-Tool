import { Star, StarsIcon, Workflow } from "lucide-react";
import Image from "next/image";
import React from "react";

interface CardSectionProps {
  imageSrc: string;
  title: string;
  description: string;
}

function CardSection({ imageSrc, title, description }: CardSectionProps) {
  return (
    <div className="text-white mt-5 text-[2.5vh] w-[50vh] btn-gradient md:w-[45vh] hover:shadow-lg hover:shadow-violet-700 hover:scale-110 flex flex-col justify-center items-center p-5">
      <Image
        className="items-center object-contain"
        src={imageSrc}
        alt=""
        height={100}
        width={100}
      />
      <h1 className="text-center mb-3 mt-2 font-bold">{title}</h1>
      <p className="text-sm text-center text-slate-200">{description}</p>
    </div>
  );
}

export default CardSection;
