import Image from "next/image";
import React from "react";

function SectionMid() {
  return (
    <div className="px-20 py-5 mt-10 items-center flex justify-center ">
      <Image
        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHdvcmtzcGFjZSUyMHRlYW18ZW58MHx8MHx8fDA%3D"
        height={70}
        width={100}
        alt="ss"
        className="w-[100vh]  border-violet-600 shadow-lg shadow-purple-600 border-2 rounded-3xl "
      />
    </div>
  );
}

export default SectionMid;
