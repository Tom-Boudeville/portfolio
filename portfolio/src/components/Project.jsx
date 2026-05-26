import React from "react";

export default function Project({
  url,
  title,
  description,
  imageFirst = true,
}) {
  return (
    <div
      className="flex rounded-lg shadow-lg w-full mb-8 overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {imageFirst && (
        <div className="w-1/2">
          <img src={url} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Contenu texte */}
      <div className="w-1/2 p-4 flex flex-col justify-center items-center">
        <div className="flex flex-col space-y-6" style={{ width: "80%" }}>
          <h3 className="text-2xl font-bold mb-2 text-4xl font-playfair">
            {title}
          </h3>
          <p className="text-gray-400 mb-4 text-lg">{description}</p>
          <button className="text-dark font-bold py-2 px-6 border-2 border-dark rounded-3xl w-fit">
            View Project
          </button>
        </div>
      </div>

      {/* Image à droite si imageFirst=false */}
      {!imageFirst && (
        <div className="w-1/2">
          <img src={url} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  );
}
