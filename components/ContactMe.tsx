import React from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: String;
  email: String;
  subject: String;
  message: String;
};

type Props = {};

const ContactMe = (props: Props) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formdata) => {
    window.location.href = `mailto:dwijjoshi02@gmail.com?subject=${formdata.subject}&body=Hi,my name is ${formdata.name}.${formdata.message}`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact Me
      </h3>
      <div className="flex flex-col space-y-10 mt-5">
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center ">
            <EnvelopeIcon className="text-[rgba(88,224,195,255)] h-7 w-7 animate-pulse" />
            <p className="text-2xl text-white">dwijjoshi02@gmail.com</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-screen sm:w-fit mx-auto px-10"
        >
          <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-2 md:flex-row">
            <input
              {...register("name")}
              className="contactInput"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email")}
              className="contactInput"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="Subject"
          />
          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
          />
          <button
            type="submit"
            className="bg-[rgba(88,224,195,255)] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
