import React, { useState, useEffect } from "react";
import "./App.css";
import { About, Skills, Projects, Contact } from "./pages";
import { Navbar, Loader } from "./components/index.js";
import { Routes, Route } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDataFromChild = (data) => {
    setMenuOpen(data);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);


  return (
    <div className="bg-[#171C28] max-[426px]:px-4 max-[787px]:px-4 text-white px-44 min-h-screen pb-10">
      <Navbar sendDataToParent={handleDataFromChild} />
      {loading ? (
        <Loader />
      ) : (
        !menuOpen && (
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        )
      )}
    </div>
  );
}

export default App;
