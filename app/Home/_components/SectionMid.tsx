import Image from "next/image";
import React from "react";

function SectionMid() {
  return (
    <div className="px-20 py-5 mt-10 ">
      <Image
        src="ss.png"
        height={70}
        width={100}
        alt="ss"
        className="w-[200vh] border-violet-600 shadow-lg shadow-purple-600 border-2 rounded-3xl "
      />
    </div>
  );
}

export default SectionMid;
