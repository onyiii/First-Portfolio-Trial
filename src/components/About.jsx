import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          ea eos quas? Libero alias quod a officiis consequatur nihil ipsam
          distinctio nostrum quis? Nihil optio mollitia sequi distinctio
          blanditiis tempora eum aliquid quis consequatur. Eligendi aliquid
          facilis consequatur, temporibus id quod laboriosam distinctio
          aspernatur culpa ad doloremque blanditiis quia voluptatibus!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro culpa,
          inventore beatae saepe nulla dolorum deserunt deleniti earum minima
          assumenda quaerat cumque vero nesciunt aliquid magni reiciendis,
          architecto quos cupiditate minus quam soluta magnam ratione tempora
          error? Accusamus, in voluptas autem quibusdam commodi totam a porro
          consectetur assumenda, repellat architecto!
        </p>
      </div>
    </div>
  );
};

export default About;
