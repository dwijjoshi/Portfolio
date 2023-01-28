import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

const Hero = (props: Props) => {
  return (
    <motion.div
      initial={{
        y: 500,
        opacity: 0,
        scale: 1,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex justify-center flex-col items-center h-screen"
    >
      <div className="flex justify-center w-[90%]  items-center flex-col-reverse  mt-16 sm:flex-row">
        <div className="ml-5 sm:ml-0">
          <div className="text-base text-[rgba(88,224,195,255)] tracking-wide mt-16 sm:mt-0">
            Hi, my name is
          </div>
          <div className="text-5xl text-[rgba(204,214,246,255)] font-semibold  mt-4 tracking-wider sm:text-7xl">
            Dwij Joshi.
          </div>
          <div className="text-5xl text-[rgba(136,146,176,255)] mt-4 sm:text-7xl">
            I make things for the web.
          </div>
        </div>
        <img
          className="h-[202px] w-[202px] object-cover rounded-full  sm:ml-16"
          src="https://res.cloudinary.com/dbuueyplm/image/upload/v1674205523/avatars/ry4hvf2zqxkxgzetqzny.jpg"
        />
      </div>
      <div className="mt-8">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Hero;
