import React from "react";

export default function PresentationCard() {
  return (
    <section className="relative z-20 flex items-center w-full px-8 md:px-16 min-h-[600px]">
      <div className="max-w-lg mt-12">
        <p className="text-primary font-bold font-poppins text-2xl mb-4 uppercase">
          UI/UX Designer
        </p>
        <p className="text-6xl md:text-7xl font-black font-poppins text-gray-900 mb-6">
          Hello, my name is Madelyn Torff
        </p>
        <p className="text-gray-400 font-poppins text-2xl mb-8 text-justify">
          Short text with details about you, what you do or your professional
          career. You can add more information on the about page.
        </p>
        <div className="flex space-x-4">
          <button className="bg-primary text-[20px] font-bold font-medium py-2 px-8 rounded-lg">
            Projects
          </button>
          <button className="font-semibold border-2 text-[20px] border-dark py-2 px-8 rounded-lg ">
            Linkedin
          </button>
        </div>
      </div>
    </section>
  );
}
