import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function Experience({}: Props) {
  const pmcExperience = {
    logo: "https://pmccommerce.com/wp-content/uploads/2024/03/header-logo.svg",
    role: "Project Trainee",
    company: "PMC Retail",
    technologies: ["angular.png", "typescript.png", "noodejs.png", "git.png"],
    date: "Aug 2023 - April 2024",
    description: [
      "Worked on various projects including an Internal Tool which is currently used by 200+ people.",
      "Contributed to multiple projects during my internship period",
    ],
  };

  const treeVedExperience = {
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAYFBMVEX///8Aj+QAi+MAjeQAiOMAhuIAhOL1+/7I4/js9v2fzvPn9Pz7///D4Pe/3vdXqurf7vuUx/FOpunX6voynOdgr+uCvu8il+aw1/Vvtu262vacyfF4uO09oOgNk+VQo+g17zNXAAAEGElEQVRoge1Z2XbiMAyNZZksBLJvQOj//+VIlgOhEEoZZx7moBfSOL6+lrW6QfCRj3zkf5HtdkXw02k97BAgXA28ACzWwg47pc5rUe9RKexXAifiSnXrYB9Qnc8KD6uAjxoPB9TjGtgREQ8Cor5bATzTmARBgjrzj51vlIqDIFZqU3kHbzQM/DuAbt6Z3/fx4liOCiN+INVjvvhZ3C/5wX6jy2Qh7rWgtF06BgUL4WublGqzXwAPtdKIXRGl9/M0eb59nZ6V0vcM0qjoDBLAYngoNfsgYDfsvuEfDA0IOD2Yb46U7oYOgOfqcgk7ONoP+BuDzY1NcMyCSS2qu6FXDWC0mwjHRfDKgqPj38w3f6RztOrc08McYdugcEY764mZ8nhdNW6L7DQX6vS39Z6Mlp4RTxwVaKqaH5axg4G+JIvLB5li2usQmQuQCeb0M39rRItDHkT0KK6wILRnOZOqtPB4NboYLSqtgVdvOKHdYcaGz9aAS4boNq9cZNp3rBtz1cyJOIe3Vn5k3tBZxJ3V+dM81dDyupaFGrw5oZyps3Iub+z5YyOANc98Hhjs+lMWHuFGi7Sw1nOAgcddeC/wsudFSZmAgki416hnWq/s4ZmrsZ1ouBbeEW9C1/eufSORHL+EprQYh5kW2Qrn0TwcykLgcjGu6Dk2bd5yUI+cgRd+CFCd7X5/DsWx+PHcgWbUH6ahBGXOcsC+SG8EvbznWBlzv6OoFGzzUkUTKS3e37V9Ht5YbnZDPAzzvq3FmbX6UeEi8ej2CbgxasxORe9yTz799sUpG5XZoIujOL6gEydHmIIvcdIACF17yW15e6YXoPXlE4Bf1afbQV/hBcC0kixa/D6ih9/2BNuiQ5zTo62T/sNJZW5TiOf2rXYjP7RZ3ZHmQZbQ5yQ5C21CBdWNWXtYrgR+ljSMq74djfBFFDsyZdtXcfiDt78qcVJfNA118rppvCZh5tSvM0+E55I76vA3Wl6SeGLuWycse2eDT/Pku9JMzN8qcp9LbpOxTdr+lc7Esedu0T91LhE51XCiAt9HypRdxeW/0aVCT8pjKqz0s6LtHRm1qxG5xfDciobUT4DN2VzDe75d4JpA0k0Br+X5Xwj3RFKBUj36qCf6G2Hm+oufvrR35mHnqp4t/3aeb3S+XGnPbZ1swaO0IEUoR4F53+JFbMDVaarXCLqphHIJ6t7znNXLMKyhFblv4TsupTYrJNF6Ki1q/9jWNW32X+M+t53A/atc2q21EnR0qW7xxR7iZUmTWS2tE3+Gvi2a0rUCrlwHKJvCS9hNAB0mqqZR6FZBeNRM/lIuuqbGhzuL4tIuedB9IeBgplupbWME3sN/AXJqWqhHGWbdbTWAfekhDFRZ2e6+pZ5w15aZ/yvdj3zkI/9S/gCGfydXapscRwAAAABJRU5ErkJggg==",
    role: "Frontend Developer Intern",
    company: "TreeVed Infotech",
    technologies: ["nextjs.png", "typescript.png", "redux.png", "git.png"],
    date: "Jun 2023 - Aug 2023",
    description: [
      "Utilized NextJS and Redux to develop frontend components, resulting in an improvement in page load times.",
      "Developed and Tested 6 new features for the product.",
    ],
  };

  const regemExperience = {
    logo: "https://lh5.googleusercontent.com/p/AF1QipNI6LlZTM9HnpYZOetdfr5yA4Zt2omkZ0JXZ0HP=w160-h160-k-no",
    role: "Full-Stack Developer Intern",
    company: "Regem Enterprises",
    technologies: [
      "react.png",
      "redux.png",
      "noodejs.png",
      "mongo.png",
      "git.png",
    ],
    date: "Jan 2023 - Mar 2023",
    description: [
      "Played a key role in the development of a full-stack web application, resulting in a 25% increase in accessibility to the company's AI model",
      "Developed and optimized REST APIs, contributing to a 18% decrease in API response time.",
    ],
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full mt-10 flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[rgba(88,224,195,255)] scrollbar-thin">
        <ExperienceCard {...pmcExperience} />
        <ExperienceCard {...treeVedExperience} />
        <ExperienceCard {...regemExperience} />
      </div>
    </motion.div>
  );
}

export default Experience;
