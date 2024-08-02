import React, { useState } from "react";
import "../App.css"
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";


function Navbar({sendDataToParent}) {
  // const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleLinkClick = (index) => {
    // setActive(index);
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
          <ul className="flex gap-10 max-md:flex-col max-md:w-full">
            <li className="max-md:w-full">
              <a href="#about" className={`inline-block w-full text-[#7e9199] hover:text-white max-md:hover:border-none max-md:active:bg-purple-500 max-md:active:text-white max-md:px-2 hover:border-b pb-1 text-lg`} onClick={() => handleLinkClick()}>
                About
              </a>
            </li>

            <li>
              <a href="#skills" className={`inline-block w-full text-[#7e9199] hover:text-white max-md:hover:border-none max-md:active:bg-purple-500 max-md:active:text-white max-md:px-2 hover:border-b pb-1 text-lg`} onClick={() => handleLinkClick()}>
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className={`inline-block w-full text-[#7e9199] hover:text-white max-md:hover:border-none max-md:active:bg-purple-500 max-md:active:text-white max-md:px-2 hover:border-b pb-1 text-lg`} onClick={() => handleLinkClick()}>
                Projects
              </a>
            </li>
            
            <li>
              <a href="#certificates" className={`inline-block w-full text-[#7e9199] hover:text-white max-md:hover:border-none max-md:active:bg-purple-500 max-md:active:text-white max-md:px-2 hover:border-b pb-1 text-lg`} onClick={() => handleLinkClick()}>
                Certificates
              </a>
            </li>
            
            <li>
              <a href="#contact" className={`inline-block w-full text-[#7e9199] hover:text-white max-md:hover:border-none max-md:active:bg-purple-500 max-md:active:text-white max-md:px-2 hover:border-b pb-1 text-lg`} onClick={() => handleLinkClick()}>
                Contact
              </a>
            </li>
          </ul>
          
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
