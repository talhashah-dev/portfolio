import React, { useState } from "react";
import "../App.css"
import { Link } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState(0);
  const handleLinkClick = (index) => {
    setActive(index);
  };
  return (
    <>
    <div className="container mx-auto flex justify-between items-center pt-8 mb-12 max-[426px]:mb-6">
        <div className="title">
          <Link to="/">
            <h1 className={`text-3xl  max-[426px]:text-base italic mb-2 text-gray-400 hover:text-white signature`} onClick={() => handleLinkClick(0)}>&lt;Syed Talha /&gt;</h1>
          </Link>
        </div>
        <nav className="flex gap-10 max-[426px]:hidden">
            <Link to="/" className={`text-[#7e9199] hover:text-white pb-1 hover:border-b text-lg transition-all ${active === 0 ? "active" : "deactive"}`} onClick={() => handleLinkClick(0)}>About</Link>
            <Link to="/skills" className={`text-[#7e9199] hover:text-white pb-1 hover:border-b text-lg transition-all ${active === 1 ? "active" : "deactive"}`} onClick={() => handleLinkClick(1)}>Skills</Link>
            <Link to="/projects" className={`text-[#7e9199] hover:text-white pb-1 hover:border-b text-lg transition-all ${active === 2 ? "active" : "deactive"}`} onClick={() => handleLinkClick(2)}>Projects</Link>
            <Link to="/contact" className={`text-[#7e9199] hover:text-white pb-1 hover:border-b text-lg transition-all ${active === 3 ? "active" : "deactive"}`} onClick={() => handleLinkClick(3)}>Contact</Link>
        </nav>
    </div>
    </>
  );
}

export default Navbar;
