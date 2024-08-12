import CardSection from "@/app/Home/_components/CardSection";
import React from "react";

function About() {
  return (
    <div>
      <div className="text-center p-10 md:p-28">
        <div className=" md:px-52">
          <h1 className="home-head text-[8vh] ">Learn About MONK-AI</h1>
          <p className="text-slate-300">
            From individual freelancers to multinational corporations, AI
            Copywriting empowers professionals to amplify their content
            production and output, all while remaining steadfast in their core
            values.
          </p>
        </div>
      </div>
      <div>
        <h1 className="home-head text-[5vh] text-center">
          We Believe in Technology
        </h1>
        <div className="flex gap-10 justify-evenly mt-10 ">
          <CardSection
            title="Innovation"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
            imageSrc="https://cdn-icons-png.flaticon.com/128/10418/10418901.png"
          />
          <CardSection
            title="Creative"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus."
            imageSrc="https://cdn-icons-png.flaticon.com/128/13064/13064622.png"
          />
          <CardSection
            title="Collabrative"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
            imageSrc="https://cdn-icons-png.flaticon.com/128/5371/5371017.png"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
