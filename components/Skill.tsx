import { motion } from "framer-motion";
import React from "react";

interface Props {
  img: string;
  name: string;
}

const Skill: React.FC<Props> = ({ img, name }) => {
  return (
    <div className="flex flex-col items-center">
      <motion.img
        src={img}
        className=" h-20 w-20 object-cover"
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      />
      <h4 className="text-gray-500 tracking-wide mt-2">{name}</h4>
    </div>
  );
};

export default Skill;
