import React from "react";
import "../App.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <div className="container mx-auto flex justify-between items-center pt-8 mb-12">
        <div className="title">
          <h1 className="text-4xl font-bold mb-2">Hello, I'm <span className="text-gray-300">Talha</span> 👋</h1>
        </div>
        <nav className="flex gap-10">
            <Link to="/" className="text-[#7e9199] hover:text-white pb-1 hover:border-b text-lg transition-all">About</Link>
            <Link to="/skills" className="text-[#7e9199] hover:text-white pb-1 hover:border-b text-lg transition-all">Skills</Link>
            <Link to="/projects" className="text-[#7e9199] hover:text-white pb-1 hover:border-b text-lg transition-all">Projects</Link>
            <Link to="/contact" className="text-[#7e9199] hover:text-white pb-1 hover:border-b text-lg transition-all">Contact</Link>
        </nav>
    </div>
    </>
  );
}

export default Navbar;
