import React from "react";

export default function Footer() {
  return (
    <footer
      id="contacts"
      className="flex items-center justify-center h-20 mt-16"
    >
      <div className="space-y-6">
        <div className="flex flex-row gap-4 mb-2 justify-center space-x-4">
          <img src="/instagram.png" alt="Logo" className="w-8 h-8 mb-1" />
          <img src="/linkedin.png" alt="Logo" className="w-8 h-8 mb-1" />
          <img src="/mail.png" alt="Logo" className="w-8 h-8 mb-1" />
        </div>
        <span className="text-sm font-nunito text-gray-600 justify-center flex">
          Madelyn Torff 2021
        </span>
      </div>
    </footer>
  );
}
