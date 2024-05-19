import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const ProjectsFinal3 = (props: Props) => {
  return (
    <div className="pt-40 md:pt-0 flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-start xl:space-y-0 items-center mx-auto sm:justify-center ">
      <div className="w-[90%] mt-20 ">
        <div className=" text-left bg-[#233550] p-2 rounded-xl">
          <div className="pl-5 pt-5 space-y-2 sm:flex sm:items-center">
            <div className="sm:space-y-4 sm:text-lg">
              <h4 className="text-[rgba(88,224,195,255)]">Project 3</h4>
              <h3 className="text-white text-xl">ASHA Portal</h3>
              <p className="text-[rgba(136,146,176,255)] ">
                ASHA Portal is a web portal that allows ASHA worker to submit
                their reports online.It removes all the paperwork as a result of
                which their incentives are no more delayed.They can upload their
                work to the portal and get it verified by the admin. Once the
                admin has verified the work the respective ASHA worker will get
                their incentives.
              </p>
              <ul className="flex justify-evenly sm:justify-start sm:space-x-6 text-[rgba(88,224,195,255)]">
                <li>React</li>
                <li>NodeJS</li>
                <li>Redux</li>
                <li>MongoDB</li>
                <li>Twilio</li>
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
                    url="https://tangerine-blini-82a520.netlify.app/"
                    fgColor="gray"
                    bgColor="transparent"
                  />
                </li>
              </ul>
            </div>
            <div className="flex  justify-center">
              <img
                className="w-48 h-32 sm:w-[40rem] sm:h-[18rem] object-cover rounded-lg"
                src="https://res.cloudinary.com/dbuueyplm/image/upload/v1674892075/avatars/2023-01-28_13_17_26_dc74s6.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsFinal3;
