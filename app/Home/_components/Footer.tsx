import { Copyright, Github } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <div className="">
      <div className="md:h-[50vh] shadow-2xl shadow-purple-700 pr-2 overflow-clip ">
        <div className="container flex justify-evenly text-white ">
          <div className="mt-10">
            <h2 className="home-head md:text-3xl">
              <a href="/">MonkAI</a>
            </h2>
          </div>
          <div className="sec ml-5 mt-10">
            <ul className="lead w-28 md:w-full">
              <h2 className="home-head mb-5">Use-Case</h2>
              <li>
                <a href="/dashboard/content/generate-html">HTML generator</a>
              </li>
              <li>
                <a href="/dashboard/content/blog-content-generation">
                  Blog Writer
                </a>
              </li>
              <li>
                <a href="/dashboard/content/english-grammer-checker">
                  Grammer Corrector
                </a>
              </li>
              <li>
                <a href="/dashboard">Click to see All</a>
              </li>
            </ul>
          </div>
          <div className="sec ml-2 mt-10">
            <ul className="lead">
              <h2 className="home-head mb-5">Company</h2>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/testimonialSection">Testimonials</a>
              </li>
              <li>
                <a href="/account">Account</a>
              </li>
            </ul>
          </div>
          <div className=" hidden md:block sec ml-5  mt-10">
            <ul className="lead">
              <h2 className="home-head mb-5">Contact us</h2>
              <li>
                <a href="https://www.linkedin.com/in/akshat--sharma/s">
                  LinkedIn
                </a>
              </li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Mail</li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" text-center justify-center  flex p-10 text-white">
        <Copyright />
        2024 all rights reserved.
        <h4 className="ml-2">
          Made by{" "}
          <a
            className="underline"
            target="blank"
            href="https://akshat-sharma-portfolio.netlify.app/"
          >
            Akshat Sharma.
          </a>
        </h4>
      </div>
    </div>
  );
}

export default Footer;
