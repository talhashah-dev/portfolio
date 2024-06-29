import React from "react";
import coding_gif from "../assets/images/coding.gif"

function About() {
  return (
    <div className="container mx-auto">
      <div className="flex gap-6 justify-between items-center max-[426px]:flex-wrap max-[426px]:justify-center">
        <div className="w-1/2 max-[426px]:w-full text-center">
          <h1 className="text-4xl font-bold mb-5">Hi, I'm <span className="text-gray-300">Talha</span> 👋</h1>
          <p className="text-[#7e9199] mb-5">
            I am a Frontend Developer from Karachi. I have a passion
            for creating seamless, beautiful and creative websites, I have
            experience with various programming languages and specifically web
            technologies. <br />
            Life is a continuous learning process, so work makes
            me more rigorous. <br />
            I am currently available to hire .
          </p>
          <a href="mailto:syedt.in00@gmail.com" className="border border-white p-2 hover:border-[#00B2DF] hover:text-[#00B2DF] transition-all inline-block w-1/2 max-[426px]:w-full">Get in touch</a>
        </div>
        <img
          className="h-72 rounded max-[426px]:h-auto max-[426px]:w-full max-[426px]:mb-5"
          src={coding_gif}
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
