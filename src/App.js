import React from "react";
import "./App.css";
import { Navbar, About, Skills, Projects, Conatact } from "./pages";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="bg-[#171C28] max-[426px]:px-4 max-[787px]:px-4 text-white px-44 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Conatact />} />
      </Routes>
    </div>
  );
}

export default App;
