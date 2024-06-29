import React, { useState } from "react";
import "../App.css"
import { Link } from "react-router-dom";
import {Close_Menu, Open_Menu} from "../assets/images";

function Navbar() {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (index) => {
    setActive(index);
    setMenuOpen(false)
  };

  const handleMenu = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };

  return (
    <>
    <div className="container mx-auto flex justify-between items-center pt-8 mb-12 max-[426px]:mb-6 max-[426px]:block">
        <div className="title max-[426px]:flex max-[426px]:justify-between max-[426px]:items-center">
          <Link to="/">
            <h1 className={`text-3xl max-[426px]:text-base italic mb-2 text-gray-400 hover:text-white signature`} onClick={() => handleLinkClick(0)}>&lt;Syed Talha /&gt;</h1>
          </Link>
          <img src={`${menuOpen ? Close_Menu : Open_Menu}`} className="h-8 hidden max-[426px]:block cursor-pointer" alt="" onClick={() => handleMenu()} />
        </div>
        <nav className={`flex gap-10 max-[426px]:flex-col max-[426px]:h-screen max-[426px]:mt-10 max-[426px]:${menuOpen ? "flex" : "hidden"}`} >
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
