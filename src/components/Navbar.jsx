import React, { useState } from "react";
import "../App.css"
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";


function Navbar({sendDataToParent}) {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleLinkClick = (index) => {
    setActive(index);
    setMenuOpen(false);
    sendDataToParent(false);
  };

  const handleMenu = () => {
    const newMenuState = !menuOpen;
    setMenuOpen(newMenuState);
    sendDataToParent(newMenuState);
  };
  

  return (
    <>
    <div className="container mx-auto flex justify-between items-center pt-8 mb-12 max-[426px]:mb-6 max-[426px]:block">
        <div className="title max-[426px]:flex max-[426px]:justify-between max-[426px]:items-center">     
            <a href="/">
            <h1 className={`text-3xl max-[426px]:text-base italic text-gray-400 hover:text-white signature`} onClick={() => handleLinkClick(0)}>&lt;Syed Talha /&gt;</h1>
            </a>     
          <button className="text-3xl hidden max-[426px]:block" onClick={() => handleMenu()}>{menuOpen ? <IoMdClose /> : <IoMdMenu />}</button>
        </div>
        <nav className={`flex gap-10 max-[426px]:flex-col max-[426px]:mt-10 ${menuOpen ? "max-[426px]:flex" : "max-[426px]:hidden"} `}>
            <a href="#about" className={`text-[#7e9199] hover:text-white pb-1 hover:border-b text-lg transition-all ${active === 0 ? "active" : "deactive"}`} onClick={() => handleLinkClick(0)}>
              About
            </a>
            <a href="#skills" className={`text-[#7e9199] hover:text-white pb-1 hover:border-b text-lg transition-all ${active === 1 ? "active" : "deactive"}`} onClick={() => handleLinkClick(1)}>
              Skills
            </a>
            <a href="#projects" className={`text-[#7e9199] hover:text-white pb-1 hover:border-b text-lg transition-all ${active === 2 ? "active" : "deactive"}`} onClick={() => handleLinkClick(2)}>
              Projects
            </a>
            <a href="#certificates" className={`text-[#7e9199] hover:text-white pb-1 hover:border-b text-lg transition-all ${active === 3 ? "active" : "deactive"}`} onClick={() => handleLinkClick(3)}>
              Certificates
            </a>
            <a href="#contact" className={`text-[#7e9199] hover:text-white pb-1 hover:border-b text-lg transition-all ${active === 4 ? "active" : "deactive"}`} onClick={() => handleLinkClick(4)}>
              Contact
            </a>
          <ul className={`flex justify-around items-center mt-28 min-[426px]:hidden`}>
            <li><a href="https://github.com/talhashah-dev" className="text-4xl" target="_blank" rel="noreferrer"><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/talhashah-dev/" className="text-4xl" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
            <li><a href="https://stackoverflow.com/users/23691689/talha-shah" className="text-4xl" target="_blank" rel="noreferrer"><FaStackOverflow /></a></li>
          </ul>
        </nav>  
        
    </div>
    </>
  );
}

export default Navbar;
