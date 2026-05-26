import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="relative z-50 flex w-full h-20 overflow-hidden">
      <div className="flex-1 flex items-center px-8 md:px-16">
        <span className="text-2xl ">Madelyn Torff</span>
      </div>

      <nav className="flex-1 flex items-center justify-end px-8 md:px-32 space-x-16 text-lg">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `transition-all hover:text-cyan-400 ${
              isActive ? "border-b-2 border-gray-900" : ""
            }`
          }
        >
          About
        </NavLink>
        <a href="/#projects">Projects</a>
        <a href="/#contacts">Contacts</a>
      </nav>
    </header>
  );
}
