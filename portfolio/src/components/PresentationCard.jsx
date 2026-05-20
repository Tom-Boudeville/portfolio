import React from "react";

export default function PresentationCard() {
  return (
    <>
      <div className="vertical-card max-w-md p-6 space-y-4 mx-4">
        <p className="text-primary">UI/UX Designer</p>
        <p className="font-bold font-extrabold text-6xl">
          Hello, my name is Madelyn Torff
        </p>
        <p>
          Short text with details about you, what you do or your professional
          career. You can add more information on the about page.
        </p>
        <div className="flex space-x-4 mt-4">
          <button className="bg-primary font-bold py-1 px-4 rounded">
            Project
          </button>
          <button className="font-bold border-2 border-dark py-1 px-4 rounded">
            Linkedin
          </button>
        </div>
      </div>
    </>
  );
}
