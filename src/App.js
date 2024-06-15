import React from "react";
import "./App.css";
import { Navbar, About, Skills, Projects } from "./pages";

function App() {
  return (
    <div className="bg-[#171C28] text-white px-44 h-screen">
      <Navbar />
      <About />
    </div>
  );
}

export default App;
