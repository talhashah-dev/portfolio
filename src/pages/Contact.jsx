import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

function Conatct(){
  return (
    <>
      <div className="text-center flex flex-col gap-5 max-[426px]:mt-44">
        <div className="text-5xl mb-10 max-[500px]:text-3xl max-[500px]:mb-5">Contact Me ☎️</div>
        <p className="text-gray-400 text-base">
          DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
        </p>
        <a href="tel:+923349009827" className="text-gray-400 text-2xl hover:text-white">+92-3349009827</a>
        <a href="mailto:syedt.in00@gmail.com" className="text-gray-400 text-2xl hover:text-white">syedt.in00@gmail.com</a>
        <div className="flex justify-center gap-5 mt-10">
          <a href="https://github.com/talhashah-dev" target="_black" className="text-4xl cursor-pointer " >
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/talhashah-dev/" target="_black" className="text-4xl cursor-pointer " >
            <FaLinkedin />
          </a>
          <a href="https://stackoverflow.com/users/23691689/talha-shah" target="_black" className="text-4xl cursor-pointer " >
            <FaStackOverflow />
          </a>
        </div>
      </div>
    </>
  )
}

export default Conatct;