import React from "react";

export default function Header() {
  return (
    <header className="flex w-full h-20 shadow-sm bg-white">
      <div className="flex-1 flex items-center px-8 md:px-16">
        <span className="text-2xl font-bold text-gray-900">Madelyn Torff</span>
      </div>

      <nav className="flex-1 flex items-center justify-end px-8 md:px-16 space-x-8">
        <a
          href="#about"
          className="text-gray-600 font-medium hover:text-black transition-colors"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-gray-600 font-medium hover:text-black transition-colors"
        >
          Projects
        </a>
        <a
          href="#contacts"
          className="text-gray-600 font-medium hover:text-black transition-colors"
        >
          Contacts
        </a>
      </nav>
    </header>
  );
}
