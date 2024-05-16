import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const ProjectsFinal2 = (props: Props) => {
  return (
    <div className=" flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-start xl:space-y-0 items-center mx-auto sm:justify-center ">
      <div className="w-[90%]  mt-20">
        <div className=" text-left bg-[#233550] p-2 rounded-xl">
          <div className="pl-5 pt-5 space-y-2 sm:flex sm:gap-x-4 sm:items-center">
            <div className="sm:space-y-4 sm:text-lg">
              <h4 className="text-[rgba(88,224,195,255)]">Project 2</h4>
              <h3 className="text-white text-xl">TalkToPDF</h3>
              <p className="text-[rgba(136,146,176,255)] ">
                With TalkToPDF, you can talk to your PDFs! Just upload your PDF
                document and start asking questions about it.
              </p>
              <ul className="flex justify-evenly sm:justify-start sm:space-x-6 text-[rgba(88,224,195,255)]">
                <li>NextJS</li>
                <li>Node.js</li>
                <li>Tailwind CSS</li>
                <li>Vercel</li>
              </ul>
              <ul className="flex">
                <li>
                  <SocialIcon
                    url="https://github.com/dwijjoshi/taltopdf-frontend"
                    fgColor="gray"
                    bgColor="transparent"
                  />
                </li>
                <li>
                  <SocialIcon
                    url="https://talktopdf-fawn.vercel.app/"
                    fgColor="gray"
                    bgColor="transparent"
                  />
                </li>
              </ul>
            </div>
            <div className="flex  justify-center">
              <img
                className="w-48 h-32 sm:w-[40rem] sm:h-[18rem] object-cover rounded-lg"
                src="talktopdf.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsFinal2;
