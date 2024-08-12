import React from "react";
import Header from "../Home/_components/Header";
import Card from "./_items/Card";
import Footer from "../Home/_components/Footer";

function page() {
  return (
    <div>
      <Header />
      <div className="text-center p-10 md:p-28">
        <div className=" md:px-52">
          <h1 className="home-head text-[5vh] md:text-[8vh] ">
            You're in a Good Company
          </h1>
          <p className="text-slate-300 text-sm">
            From individual freelancers to multinational corporations, AI
            Copywriting empowers professionals to amplify their content
            production and output, all while remaining steadfast in their core
            values.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 md:p-5 items-center ">
        <Card
          imageSrc="https://images.unsplash.com/photo-1484973550311-411a70d6edb5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGd1eXxlbnwwfHwwfHx8MA%3D%3D"
          title="Logan"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore eius repudiandae corrupti debitis perferendis mollitia amet voluptatibus fuga totam voluptas!"
        />
        <Card
          imageSrc="https://plus.unsplash.com/premium_photo-1665461699964-3c90fb578416?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGd1eXxlbnwwfHwwfHx8MA%3D%3D"
          title="Roy"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore eius repudiandae corrupti debitis perferendis mollitia amet voluptatibus fuga totam voluptas!"
        />
        <Card
          imageSrc="https://images.unsplash.com/photo-1707765643599-8c60886bf52b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3V5JTIwaW5kaWFufGVufDB8fDB8fHww"
          title="Himanshu"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore eius repudiandae corrupti debitis perferendis mollitia amet voluptatibus fuga totam voluptas!"
        />
        <Card
          imageSrc="https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGd1eXxlbnwwfHwwfHx8MA%3D%3D"
          title="KSI"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore eius repudiandae corrupti debitis perferendis mollitia amet voluptatibus fuga totam voluptas!"
        />
        <Card
          imageSrc="https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGd1eXxlbnwwfHwwfHx8MA%3D%3D"
          title="David"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore eius repudiandae corrupti debitis perferendis mollitia amet voluptatibus fuga totam voluptas!"
        />
        <Card
          imageSrc=""
          title="Logan"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore eius repudiandae corrupti debitis perferendis mollitia amet voluptatibus fuga totam voluptas!"
        />
        <Card
          imageSrc=""
          title="Logan"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore eius repudiandae corrupti debitis perferendis mollitia amet voluptatibus fuga totam voluptas!"
        />

        <Card
          imageSrc=""
          title="Logan"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore eius repudiandae corrupti debitis perferendis mollitia amet voluptatibus fuga totam voluptas!"
        />

        <Card
          imageSrc=""
          title="Logan"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore eius repudiandae corrupti debitis perferendis mollitia amet voluptatibus fuga totam voluptas!"
        />
      </div>
      <Footer />
    </div>
  );
}

export default page;
