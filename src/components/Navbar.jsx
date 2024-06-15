import React from "react";
import "../App.css"

function Navbar() {
  return (
    <>
      <nav className="container mx-auto flex justify-between items-center pt-8 mb-16">
        <div className="title">
          <h1 className="text-4xl font-bold mb-2">Hello, I'm <span className="text-gray-300">Talha</span> 👋</h1>
          <p>Frontend Developer</p>
        </div>
        <div className="flex gap-10">
          <a href="#" className="text-[#7e9199] hover:text-white pb-1 hover:border-b text-lg transition-all">About</a>
          <a href="#" className="text-[#7e9199] hover:text-white pb-1 hover:border-b text-lg transition-all">Skills</a>
          <a href="#" className="text-[#7e9199] hover:text-white pb-1 hover:border-b text-lg transition-all">Projects</a>
          <a href="#" className="text-[#7e9199] hover:text-white pb-1 hover:border-b text-lg transition-all">Contact</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
