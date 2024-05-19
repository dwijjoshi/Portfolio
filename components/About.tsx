import { motion } from "framer-motion";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-start xl:space-y-0 items-center mx-auto sm:justify-center">
      <div className=" mt-20 top-20 sm:absolute sm:mt-0">
        <h3 className=" uppercase tracking-[20px] text-gray-500 text-2xl ">
          About
        </h3>
      </div>
      <div className="flex flex-col md:flex-row items-center px-10 md:px-0 mt-20 md:mt-0">
        <div className="mt-10  flex  flex-col items-center sm:items-start sm:text-xl flex-[1.5_2_0%] ">
          <p className="text-[rgba(136,146,176,255)] text-left">
            Hello, My name is{" "}
            <span className="text-[rgba(88,224,195,255)]">Dwij</span> and I
            enjoy creating things that live on the internet.My interest in
            <span className="text-[rgba(88,224,195,255)]">
              {" "}
              web development
            </span>{" "}
            started back in 2020 when the world was hit by covid and everyone
            was in their homes.I wanted to learn something good so I started
            learning web dev.
          </p>

          <p className="text-[rgba(136,146,176,255)] text-left mt-3">
            Fast forward to today, and I have build various full stack websites
            and my most frequent tech-stack used is{" "}
            <span className="text-[rgba(88,224,195,255)]"> MERN Stack.</span>
          </p>

          <p className="text-[rgba(136,146,176,255)] text-left mt-3">
            I look forward to learn new technologies and I am always open to
            face new challanges and solve them with the tech knowledge that I
            have.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
