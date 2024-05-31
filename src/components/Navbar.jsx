import React from "react";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between">
        <div className="title">
          <h1 className="text-3xl font-bold">Syed Talha</h1>
          <p>Frontend Developer</p>
        </div>
        <ul className="flex gap-10">
          <li className="cursor-pointer h-0">About</li>
          <li className="cursor-pointer h-0">Skills</li>
          <li className="cursor-pointer h-0">Projects</li>
          <li className="cursor-pointer h-0">Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
