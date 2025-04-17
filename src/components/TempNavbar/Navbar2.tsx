


import React from "react";

export default function Navbar2() {
    return (
      <nav className="bg-black text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  