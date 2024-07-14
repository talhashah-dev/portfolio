import React, { useState, useEffect } from "react";
import "./App.css";
import { About, Skills, Projects, Contact } from "./pages";
import { Navbar, Loader } from "./components/index.js";

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
          <>
          <About />
          <Skills />
          <Projects />
          <Contact />
          </>
        )
      )}
    </div>
  );
}

export default App;
