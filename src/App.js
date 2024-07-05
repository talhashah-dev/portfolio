import React, { useState } from "react";
import "./App.css";
import { Navbar, About, Skills, Projects, Conatact } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleDataFromChild = (data) => {
    setMenuOpen(data);
  };

  return (
    <div className="bg-[#171C28] max-[426px]:px-4 max-[787px]:px-4 text-white px-44 min-h-screen pb-10">
      <Navbar sendDataToParent={handleDataFromChild}/>
      {menuOpen ? null :
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Conatact />} />
      </Routes> 
      }

    </div>
  );
}

export default App;
