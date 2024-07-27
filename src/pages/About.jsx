import React from "react";
import coding_gif from "../assets/images/coding.gif"

function About() {
  return (
    <div className="container mx-auto h-auto min-[426px]:my-36" id="about">
      <div className="flex gap-6 justify-between items-center max-[426px]:flex-wrap max-[426px]:justify-center">
        <div className="w-1/2 max-[426px]:w-full text-center min-[426px]:text-left">
          <h1 className="text-4xl min-[426px]:text-7xl mb-5">Hi, I'm Talha👋</h1>
          <p className="text-2xl mb-5">
            I am a Frontend Developer from Karachi. I have a passion
            for creating seamless, beautiful and creative websites, I have
            experience with various programming languages and specifically web
            technologies. <br />
            Life is a continuous learning process, so work makes
            me more rigorous. <br />
            I am currently available to hire .
          </p>
          <a href="#contact" className="p-2 px-6 text-base bg-white text-purple-500 hover:bg-purple-500 hover:text-white  transition-all inline-block w-auto max-[426px]:w-full">GET IN TOUCH</a>
        </div>
        <img
          className="h-96 rounded max-[426px]:h-auto max-[426px]:w-full max-[426px]:mb-5"
          src={coding_gif}
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
