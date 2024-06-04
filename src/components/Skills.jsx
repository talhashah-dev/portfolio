import React, { useState } from "react";
import {
  HTML_Logo,
  CSS_Logo,
  JavaScript_Logo,
  Bootstrap_Logo,
  Git_Logo,
  Github_Logo,
  Firebase_Logo,
  Linux_Logo,
  VSCode_Logo,
} from "../assets/images/index";

function Skills() {
  const [name, SetName] = useState("");

  return (
    <div className="h-screen">
      <div className="text-3xl text-center font-bold mb-5 flex justify-between">
        <h1>Skills</h1>
        <div className="text-[#7e9199]">{name}</div>
      </div>

      <div className="flex items-center justify-evenly gap-5">
        
        <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
          <img src={HTML_Logo} alt="" className="h-12" onMouseEnter={() => SetName("HTML")}/>
        </div>

        <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
          <img src={CSS_Logo} alt="" className="h-12" onMouseEnter={() => SetName("CSS")}/>
        </div>

        <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
          <img src={JavaScript_Logo} alt="" className="h-10" onMouseEnter={() => SetName("JavaScript")}/>
        </div>

        <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
          <img src={Bootstrap_Logo} alt="" className="h-10" onMouseEnter={() => SetName("Bootstrap")}/>
        </div>

        <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
          <img src={Git_Logo} alt="" className="h-12" onMouseEnter={() => SetName("Git")}/>
        </div>

        <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
          <img src={Github_Logo} alt="" className="h-12" onMouseEnter={() => SetName("Github")}/>
        </div>

        <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
          <img src={Firebase_Logo} alt="" className="h-12" onMouseEnter={() => SetName("Linux")}/>
        </div>

        <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
          <img src={Linux_Logo} alt="" className="h-12" onMouseEnter={() => SetName("Linux")}/>
        </div>

        <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
          <img src={VSCode_Logo} alt="" className="h-12" onMouseEnter={() => SetName("Visual Studio Code")}/>
        </div>

      </div>

      
    </div>
  );
}

export default Skills;