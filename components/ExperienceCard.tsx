import React from "react";
import { motion } from "framer-motion";

function ExperienceCard(prop: any) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[600px] snap-center bg-[#27426b] px-10 py-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden text-gray-200 ">
      {/* <motion.img className="pt-2 h-20 w-20" src={prop.logo} alt="" /> */}
      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light ">{prop.role}</h4>
        <p className="font-bold text-2xl mt-1">{prop.company}</p>
        <div className="flex space-x-4 my-2">
          {prop.technologies &&
            prop.technologies.map((tech: string) => {
              return (
                <img className="h-10 w-10 rounded-full" src={tech} alt="" />
              );
            })}
        </div>
        <p className="uppercase py-3 text-gray-300">{prop.date}</p>
        <ul className="list-disc space-y-2 ml-5 text-lg">
          {prop.description.map((desc: any) => {
            return <li>{desc}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
