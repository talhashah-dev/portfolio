import React, { useState } from "react";
import {
  HTML_Logo,
  CSS_Logo,
  JavaScript_Logo,
  Python_Logo,
  Bootstrap_Logo,
  React_Logo,
  Git_Logo,
  Github_Logo,
  Firebase_Logo,
  Linux_Logo,
  VSCode_Logo,
  Tailwind_Logo
} from "../assets/images/index";

function Skills() {
  const [name, setName] = useState(null);
  const handleLeave = (name) => {
    setName(name)
  }
  return (
    <div className="pb-5">

      <div className="text-3xl text-center font-bold flex justify-between">
        <h1>Skills</h1>
        <div className="text-[#7e9199]">{name}</div>
      </div>

      <div className="flex max-[426px]:flex-col items-center justify-between mt-14 gap-10">

        <div className="flex flex-col gap-10 max-[426px]:gap-5 max-[426px]:w-full">

          <div className="flex flex-col gap-5">
            <h4 className="text-2xl">Languages</h4>
            <div className="flex gap-5 max-[426px]:flex-wrap">
              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
                <img src={JavaScript_Logo} alt="" className="h-10" onMouseMove={() => setName("JavaScript")} onMouseLeave={() => handleLeave(null)}/>
              </div>

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
                <img src={Python_Logo} alt="" className="h-10" onMouseMove={() => setName("Python")} onMouseLeave={() => handleLeave(null)}/>
              </div>

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
                <img src={HTML_Logo} alt="" className="h-12" onMouseMove={() => setName("HTML5")} onMouseLeave={() => handleLeave(null)}/>
              </div> 

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
                <img src={CSS_Logo} alt="" className="h-10" onMouseMove={() => setName("CSS3")} onMouseLeave={() => handleLeave(null)}/>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-2xl">Library and Framworks</h4>
            <div className="flex gap-5 max-[426px]:flex-wrap">
              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
                <img src={React_Logo} alt="" className="h-12" onMouseMove={() => setName("React")} onMouseLeave={() => handleLeave(null)}/>
              </div> 

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
                <img src={Bootstrap_Logo} alt="" className="h-12" onMouseMove={() => setName("Bootstrap")} onMouseLeave={() => handleLeave(null)}/>
              </div>

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
                <img src={Tailwind_Logo} alt="" className="h-12" onMouseMove={() => setName("Tailwind")} onMouseLeave={() => handleLeave(null)}/>
              </div> 
            </div>
          </div>

        </div>

        <div className="flex flex-col gap-10 max-[426px]:gap-5 max-[426px]:w-full">

          <div className="flex flex-col gap-5">
            <h4 className="text-2xl">Version Control</h4>
            <div className="flex gap-5 max-[426px]:flex-wrap">
              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
                <img src={Git_Logo} alt="" className="h-12" onMouseMove={() => setName("Git")} onMouseLeave={() => handleLeave(null)}/>
              </div>

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
                <img src={Github_Logo} alt="" className="h-12" onMouseMove={() => setName("Github")} onMouseLeave={() => handleLeave(null)}/>
              </div> 
            </div>
          </div>


          <div className="flex flex-col gap-5">
            <h4 className="text-2xl">Other tools & Services</h4>
            <div className="flex gap-5 max-[426px]:flex-wrap">
              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
                <img src={Firebase_Logo} alt="" className="h-12" onMouseMove={() => setName("Firebase")} onMouseLeave={() => handleLeave(null)}/>
              </div>

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
                <img src={Linux_Logo} alt="" className="h-12" onMouseMove={() => setName("Linux")} onMouseLeave={() => handleLeave(null)}/>
              </div>

              <div className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300">
                <img src={VSCode_Logo} alt="" className="h-12" onMouseMove={() => setName("Visual Studio Code")} onMouseLeave={() => handleLeave(null)}/>
              </div>
            </div>
          </div>

        </div>

      </div>
      
    </div>
  );
}

export default Skills;