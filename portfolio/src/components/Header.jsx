import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="relative z-50 flex w-full h-20 overflow-hidden">
      <div className="flex-1 flex items-center px-8 md:px-16">
        <span className="text-2xl font-bold">Madelyn Torff</span>
      </div>

      <nav className="flex-1 flex items-center justify-end px-8 md:px-32 space-x-16 text-lg">
        <Link to="/about">About</Link>
        <a href="/#projects">Projects</a>
        <a href="/#contacts">Contacts</a>
      </nav>
    </header>
  );
}
