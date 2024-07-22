import React, { useState, useEffect } from "react";
import "./App.css";
import { About, Skills, Projects, Contact, Certificates } from "./pages";
import { Navbar, Loader, Footer } from "./components/index.js";
import { GoArrowUp } from "react-icons/go";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleDataFromChild = (data) => {
    setMenuOpen(data);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled > 300 ? setVisible(true) : setVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="bg-[#171C28] max-[426px]:px-4 max-[787px]:px-4 text-white px-44 min-h-screen pb-10">
      <Navbar sendDataToParent={handleDataFromChild} />
      {loading ? (
        <Loader />
      ) : (
        !menuOpen && (
          <>
            <button
              title="GO TO TOP"
              className={`rounded-lg py-4 px-2 text-2xl text-purple-500 hover:text-white bg-white hover:bg-purple-500 fixed right-10 bottom-10 ${
                visible ? "block" : "hidden"
              }`}
              onClick={scrollToTop}
            >
              <GoArrowUp />
            </button>
            <About />
            <Skills />
            <Projects />
            <Certificates />
            <Contact />
            <Footer />
          </>
        )
      )}
    </div>
  );
}

export default App;
