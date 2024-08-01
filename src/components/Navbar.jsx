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
    <div className="flex justify-between items-center pt-8 mb-12 max-md:mb-6 max-md:block">
        <div className="title flex justify-between w-full max-[426px]:items-center">     
            <a href="/">
            <h1 className={`text-3xl max-md:text-xl italic font-bold signature`} onClick={() => handleLinkClick(0)}>&lt;Syed Talha /&gt;</h1>
            </a>     
          <button className="text-2xl hidden max-md:block" onClick={() => handleMenu()}>{menuOpen ? <IoMdClose /> : <IoMdMenu />}</button>
        </div>
        <nav className={`flex gap-10 max-md:flex-col max-md:mt-12 ${menuOpen ? "max-md:flex" : "max-md:hidden"} `}>
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
          <ul className={`hidden justify-around items-center mt-28 max-md:flex`}>
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
