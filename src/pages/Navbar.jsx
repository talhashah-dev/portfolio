import React, { useState } from "react";
import "../App.css"
import { Link } from "react-router-dom";
import { Close_Menu, Open_Menu } from "../assets/images";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa"

function Navbar({sendDataToParent}) {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleLinkClick = (index) => {
    setActive(index);
    setMenuOpen(false);
    sendDataToParent(false);
  };

  // const sendData = () => {
  //   sendDataToParent(menuOpen);
  // };

  const handleMenu = () => {
    // menuOpen ? setMenuOpen(false) : setMenuOpen(true);

    // sendData()
    const newMenuState = !menuOpen;
    setMenuOpen(newMenuState);
    sendDataToParent(newMenuState);
    console.log(menuOpen)
  };
  

  return (
    <>
    <div className="container mx-auto flex justify-between items-center pt-8 mb-12 max-[426px]:mb-6 max-[426px]:block">
        <div className="title max-[426px]:flex max-[426px]:justify-between max-[426px]:items-center">
          <Link to="/">
            <h1 className={`text-3xl max-[426px]:text-base italic mb-2 text-gray-400 hover:text-white signature`} onClick={() => handleLinkClick(0)}>&lt;Syed Talha /&gt;</h1>
          </Link>
          <img src={`${menuOpen ? Close_Menu : Open_Menu}`} className="h-10 hidden max-[426px]:block cursor-pointer" alt="" onClick={() => handleMenu()} />
        </div>
        <nav className={`flex gap-10 max-[426px]:flex-col max-[426px]:mt-10 ${menuOpen ? "max-[426px]:flex" : "max-[426px]:hidden"} `}>
            <Link to="/" className={`text-[#7e9199] hover:text-white pb-1 hover:border-b text-lg transition-all ${active === 0 ? "active" : "deactive"}`} onClick={() => handleLinkClick(0)}>About</Link>
            <Link to="/skills" className={`text-[#7e9199] hover:text-white pb-1 hover:border-b text-lg transition-all ${active === 1 ? "active" : "deactive"}`} onClick={() => handleLinkClick(1)}>Skills</Link>
            <Link to="/projects" className={`text-[#7e9199] hover:text-white pb-1 hover:border-b text-lg transition-all ${active === 2 ? "active" : "deactive"}`} onClick={() => handleLinkClick(2)}>Projects</Link>
            <Link to="/contact" className={`text-[#7e9199] hover:text-white pb-1 hover:border-b text-lg transition-all ${active === 3 ? "active" : "deactive"}`} onClick={() => handleLinkClick(3)}>Contact</Link>
            <div className="justify-center gap-5 mt-10 hidden max-[426px]:flex">
              <a href="https://github.com/talhashah-dev" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/talhashah-dev/" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
                <FaLinkedin />
              </a>
              <a href="https://stackoverflow.com/users/23691689/talha-shah" target="_blank" className="text-4xl cursor-pointer " rel="noreferrer" >
                <FaStackOverflow />
              </a>
            </div>
        </nav>   
    </div>
    </>
  );
}

export default Navbar;
