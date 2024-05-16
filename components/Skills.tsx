import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex  relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 items-center mx-auto "
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 sm:pt-10 gap-5 sm:gap-x-20 sm:gap-y-10 w-[90%]  sm:w-auto ">
        <Skill
          img={`https://img.icons8.com/external-tal-revivo-color-tal-revivo/512/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png`}
          name={`React`}
        />
        <Skill
          img={`https://img.icons8.com/color/512/javascript.png`}
          name={`Javascript`}
        />
        <Skill
          img={`https://img.icons8.com/color/512/typescript.png`}
          name={`Typescript`}
        />
        <Skill
          img={`https://img.icons8.com/color/512/nodejs.png`}
          name={`NodeJS`}
        />
        <Skill img={`angular.png`} name={`Angular`} />
        <Skill img={`nextjs.png`} name={`NextJS`} />
        <Skill
          img={`https://img.icons8.com/color/512/mongodb.png`}
          name={`MongoDB`}
        />
        <Skill
          img={`https://img.icons8.com/ios/512/react-native.png`}
          name={`ReactNative`}
        />
        <Skill
          img={`https://img.icons8.com/fluency/512/tailwind_css.png`}
          name={`Tailwind CSS`}
        />
        <Skill img={`https://img.icons8.com/color/512/git.png`} name={`Git`} />
        <Skill
          img={`https://img.icons8.com/color/512/redux.png`}
          name={`Redux`}
        />
        <Skill
          img={`https://img.icons8.com/color/512/firebase.png`}
          name={`Firebase`}
        />
      </div>
    </motion.div>
  );
};

export default Skills;
