import React from "react";

function Navbar() {
  return (
    <>
      <nav className="flex">
        <div className="title">
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <p>Frontend Developer</p>
        </div>
        <ul className="flex">
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
