import React from "react";
import CardSection from "./CardSection";

function Features() {
  return (
    <div className="overflow-auto">
      <h1 className="text-center text-white text-[5vh] md:text-[6vh] font-bold">
        Learn About Our Features
      </h1>
      <div className="flex p-5 gap-5 md:p-20 justify-evenly">
        <CardSection
          imageSrc="https://cdn-icons-png.flaticon.com/128/4661/4661466.png"
          title="Advance Use-Cases"
          description="While basic use cases are well-established, these tools are now venturing into more advanced territories."
        />
        <CardSection
          imageSrc="https://cdn-icons-png.flaticon.com/128/3649/3649467.png"
          title="Automate Your Workflow"
          description="Streamline your processes and increase productivity with our advanced AI tools designed for efficiency."
        />
        <CardSection
          imageSrc="https://cdn-icons-png.flaticon.com/128/1601/1601223.png"
          title="Advanced Analytics"
          description="Gain insights into your data with our comprehensive analytics platform, powered by AI."
        />
      </div>
    </div>
  );
}

export default Features;
