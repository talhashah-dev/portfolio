import React from "react";
import "./App.css";
import { Navbar, About, Skills, Projects } from "./components";

function App() {
  return (
    <div className="bg-[#171C28] text-white h-screen px-44">
      <Navbar />
      <About />
    </div>
  );
}

export default App;
