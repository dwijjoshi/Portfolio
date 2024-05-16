import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const ProjectsFinal = (props: Props) => {
  return (
    <div className=" flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen  xl:space-y-0 items-center mx-auto sm:justify-center ">
      <div className=" mt-20 top-20 sm:absolute sm:mt-0">
        <h3 className=" uppercase tracking-[20px] text-gray-500 text-2xl ">
          Projects
        </h3>
      </div>

      <div className="w-[90%] mt-10">
        <div className=" text-left bg-[#233550] p-2 rounded-xl">
          <div className="pl-5 pt-5 space-y-2 sm:flex sm:gap-x-4 sm:items-center">
            <div className="sm:space-y-4 space-y-2 sm:text-lg ">
              <h4 className="text-[rgba(88,224,195,255)]">Project 1</h4>
              <h3 className="text-white">EntreV</h3>
              <p className="text-[rgba(136,146,176,255)] ">
                EntreV is a social media for Entrepreneurs. EntreV develops a
                community throught which you can find a co-founder for your
                business,seek for fundings and also stay connected with your
                peer entrepreneurs.
              </p>
              <ul className="flex justify-evenly sm:justify-start sm:space-x-6 text-[rgba(88,224,195,255)]">
                <li>React</li>
                <li>NodeJs</li>
                <li>MongoDB</li>
                <li>Express</li>
              </ul>
              <ul className="flex">
                <li>
                  <SocialIcon
                    url="https://github.com/dwijjoshi"
                    fgColor="gray"
                    bgColor="transparent"
                  />
                </li>
                <li>
                  <SocialIcon
                    url="https://entrev-1m90.onrender.com/"
                    fgColor="gray"
                    bgColor="transparent"
                  />
                </li>
              </ul>
            </div>
            <div className="flex  justify-center">
              <img
                className="w-48 h-32 sm:w-[60rem] sm:h-[18rem] object-contain rounded-lg"
                src="https://res.cloudinary.com/dbuueyplm/image/upload/v1674884464/avatars/2023-01-28_11_08_04_d1osv9.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsFinal;
