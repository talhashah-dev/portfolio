import React from "react";
import coding_gif from "../assets/images/coding.gif"

function About() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">About <span className="text-gray-300">Me</span></h1>

      <div className="flex gap-6 justify-between items-center">
        <div className="w-1/2">
          <p className="text-[#7e9199] mb-10">
            {" "}
            I am a Full Stack Web Developer from Mauritania. I have a passion
            for creating seamless,beautiful and creative websites, I have
            experience with various programming languages and specifically web
            technologies . Life is a continuous learning process, so work makes
            me more rigorous . I am currently available to hire .
          </p>
          <a href="mailto:syedt.in00@gmail.com" className="border border-white p-2 hover:border-[#00B2DF] hover:text-[#00B2DF] transition-all">Get in touch</a>
        </div>
        <img
          className="h-72 rounded"
          src={coding_gif}
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
