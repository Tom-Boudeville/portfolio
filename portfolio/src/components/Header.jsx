import React from "react";

export default function Header() {
  return (
    <header className=" flex w-full h-20 shadow-sm overflow-hidden">
      <div className="flex-1 flex items-center px-8 md:px-16">
        <span className="text-2xl font-bold">Madelyn Torff</span>
      </div>

      <nav className=" flex-1 flex items-center justify-end px-8 md:px-16 space-x-8">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contacts">Contacts</a>
      </nav>
    </header>
  );
}
