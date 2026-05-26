import React from "react";

export default function PresentationCard({
  subtitle,
  title,
  description,
  button1,
  button2,
}) {
  return (
    <section className="relative z-20 flex items-center w-full px-8 md:px-16 min-h-[500px]">
      <div className="max-w-lg mt-12">
        <p className="text-primary font-bold font-poppins text-2xl mb-4 uppercase">
          {subtitle}
        </p>
        <p className="text-6xl md:text-7xl font-black font-poppins text-gray-900 mb-6">
          {title}
        </p>
        <p className="text-gray-400 font-poppins text-2xl mb-8 text-justify">
          {description}
        </p>
        <div className="flex space-x-4">
          <button className="bg-primary text-[20px] font-bold font-medium py-2 px-8 rounded-lg">
            {button1}
          </button>
          {button2 && (
            <button className="font-semibold border-2 text-[20px] border-dark py-2 px-8 rounded-lg ">
              {button2}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
