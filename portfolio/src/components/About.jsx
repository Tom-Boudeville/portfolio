import React from "react";

export default function About() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 mt-24 max-w-6xl mx-auto gap-12">
      <div className="flex-1">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 font-playfair">
          About me
        </h1>
        <p className="text-gray-500 mb-8 leading-relaxed text-xl font-nunito">
          Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor
          neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed
          cras sed. Aliquet risus posuere aliquet imperdiet sit.
        </p>
        <button className="bg-primary text-gray-900 px-6 py-2 rounded-lg font-poppins font-medium shadow-md hover:shadow-lg transition-shadow">
          Resume
        </button>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full bg-primary overflow-hidden flex items-end justify-center shadow-lg">
          <img
            src="/bg-about.png"
            alt="Madelyn Torff"
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
}
