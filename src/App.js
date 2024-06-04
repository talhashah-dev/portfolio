import React from "react";
import "./App.css";
import { Navbar, About, Skills, Projects } from "./components";

function App() {
  return (
    <div className="bg-[#171C28] text-white h-full px-44">
      <Navbar />
      <About />
      <Skills />
    </div>
  );
}

export default App;
