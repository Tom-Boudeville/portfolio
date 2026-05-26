import React from "react";

export default function Footer() {
  return (
    <footer
      id="contacts"
      className="flex items-center justify-center h-20 mt-16"
    >
      <div>
        <div className="flex flex-row gap-4 mb-2 justify-center">
          <img src="/instagram.png" alt="Logo" className="w-6 h-6 mb-1" />
          <img src="/linkedin.png" alt="Logo" className="w-6 h-6 mb-1" />
          <img src="/mail.png" alt="Logo" className="w-6 h-6 mb-1" />
        </div>
        <span className="text-sm text-gray-600">Madelyn Torff 2021</span>
      </div>
    </footer>
  );
}
