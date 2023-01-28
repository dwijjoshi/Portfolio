import React from "react";

type Props = {};

const ProjectsNew = (props: Props) => {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative  flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar  scrollbar-track-gray-400/20 scrollbar-thumb-[rgba(88,224,195,255)] scrollbar-thin">
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <img
            src="https://res.cloudinary.com/dbuueyplm/image/upload/v1674884464/avatars/2023-01-28_11_08_04_d1osv9.png"
            alt=""
            className="h-36 w-36 object-cover"
          />

          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-white text-4xl font-semibold text-left">
              Project 1 of 3
            </h4>

            <p className="text-sm text-center md:text-left text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              dolore, earum ab doloremque adipisci animi ut cupiditate, possimus
              ipsum unde aperiam commodi molestias! Sed voluptatibus ad ea
              nesciunt accusamus eveniet!
            </p>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <img
            src="https://res.cloudinary.com/dbuueyplm/image/upload/v1674884464/avatars/2023-01-28_11_08_04_d1osv9.png"
            alt=""
            className="h-28 w-28 object-cover"
          />

          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-white text-4xl font-semibold text-center">
              Project 1 of 3
            </h4>
            <p className="text-sm text-left md:text-left text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem omnis voluptatibus modi fuga nostrum velit et
              reiciendis mollitia quas magnam non quam debitis voluptate ullam,
              ea facere,
            </p>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <img
            src="https://res.cloudinary.com/dbuueyplm/image/upload/v1674205523/avatars/ry4hvf2zqxkxgzetqzny.jpg"
            alt=""
            className="h-28 w-28 object-cover"
          />

          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-white text-4xl font-semibold text-center">
              Project 1 of 3
            </h4>
            <p className="text-sm text-center md:text-left text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem omnis voluptatibus modi fuga nostrum velit et
              reiciendis mollitia quas magnam non quam debitis voluptate ullam,
              ea facere, neque rerum iure. Consectetur doloribus voluptates
              illum sint eum vel, voluptatibus libero deleniti quisquam iste
              vero error perspiciatis voluptatum totam vitae accusamus iusto
              blanditiis expedita illo doloremque repellat laborum ratione
              praesentium deserunt. Quasi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsNew;
